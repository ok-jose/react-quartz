import { Radio } from 'antd'
import { Type, Mode } from '@sbzen/cron-core'
import { useService, DAY_OPTIONS } from '../utils'
import { AndComponent, Increment, RangeComponent } from '../share'

const Hour = () => {
  const hourApi = useService().getApi(Type.HOURS)
  return (
    <div>
      <Radio
        value={Mode.EVERY}
        checked={hourApi.isEverySelected()}
        onChange={hourApi.selectEvery}
      >
        每小时
      </Radio>
      <div key={Mode.INCREMENT}>
        <Radio
          value={Mode.INCREMENT}
          checked={hourApi.isIncrementSelected()}
          onChange={hourApi.selectIncrement}
        />
        <Increment
          disabled={hourApi.isIncrementControlsDisabled()}
          primaryOptions={DAY_OPTIONS}
          primaryValue={hourApi.getIncrementPrimaryValue()}
          onPrimaryValueChange={hourApi.setIncrementPrimaryValue}
          secondaryOptions={DAY_OPTIONS}
          secondaryValue={hourApi.getIncrementSecondaryValue()}
          onSecondaryValueChange={hourApi.setIncrementSecondaryValue}
        />
      </div>
      <div key={Mode.AND}>
        <Radio
          value={Mode.AND}
          checked={hourApi.isAndSelected()}
          onChange={hourApi.selectAnd}
        />
        具体小时：
        <AndComponent
          label={'具体小时'}
          options={DAY_OPTIONS}
          disabled={hourApi.isAndControlsDisabled()}
          isValueSelected={(v) => hourApi.isSelectedAndValue(v)}
          onValueChange={hourApi.selectAndValue}
          onSelect={hourApi.selectAnd}
        />
      </div>
      <div key={Mode.RANGE}>
        <Radio
          value={Mode.RANGE}
          checked={hourApi.isRangeSelected()}
          onChange={hourApi.selectRange}
        />
        <RangeComponent
          disabled={hourApi.isRangeControlsDisabled()}
          primaryOptions={DAY_OPTIONS}
          secondaryOptions={DAY_OPTIONS}
          primaryValue={hourApi.getRangePrimaryValue()}
          secondaryValue={hourApi.getRangeSecondaryValue()}
          onPrimaryValueChange={hourApi.setRangePrimaryValue}
          onSecondaryValueChange={hourApi.setRangeSecondaryValue}
        />
      </div>
    </div>
  )
}
export { Hour }

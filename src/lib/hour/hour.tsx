import { Radio } from 'antd'
import { Type, Mode } from '@sbzen/cron-core'
import { useService, HOUR_OPTIONS, HOUR_UNIT, generateOptions } from '../utils'
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
          unit={HOUR_UNIT}
          disabled={hourApi.isIncrementControlsDisabled()}
          primaryOptions={generateOptions(24)}
          primaryValue={hourApi.getIncrementPrimaryValue()}
          onPrimaryValueChange={hourApi.setIncrementPrimaryValue}
          secondaryOptions={HOUR_OPTIONS}
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
          options={HOUR_OPTIONS}
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
          unit={HOUR_UNIT}
          disabled={hourApi.isRangeControlsDisabled()}
          primaryOptions={HOUR_OPTIONS}
          secondaryOptions={HOUR_OPTIONS}
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

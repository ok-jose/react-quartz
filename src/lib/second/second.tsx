import { Radio } from 'antd'
import { Type, Mode } from '@sbzen/cron-core'
import { useService, SECOND_OPTIONS } from '../utils'
import { AndComponent, Increment, RangeComponent } from '../share'

const Second = () => {
  const secondApi = useService().getApi(Type.SECONDS)
  return (
    <div>
      <Radio
        value={Mode.EVERY}
        checked={secondApi.isEverySelected()}
        onChange={secondApi.selectEvery}
      >
        每秒
      </Radio>
      <div key={Mode.INCREMENT}>
        <Radio
          value={Mode.INCREMENT}
          checked={secondApi.isIncrementSelected()}
          onChange={secondApi.selectIncrement}
        />
        <Increment
          disabled={secondApi.isIncrementControlsDisabled()}
          primaryOptions={SECOND_OPTIONS}
          primaryValue={secondApi.getIncrementPrimaryValue()}
          onPrimaryValueChange={secondApi.setIncrementPrimaryValue}
          secondaryOptions={SECOND_OPTIONS}
          secondaryValue={secondApi.getIncrementSecondaryValue()}
          onSecondaryValueChange={secondApi.setIncrementSecondaryValue}
        />
      </div>
      <div key={Mode.AND}>
        <Radio
          value={Mode.AND}
          checked={secondApi.isAndSelected()}
          onChange={secondApi.selectAnd}
        />
        具体秒：
        <AndComponent
          label={'具体秒'}
          options={SECOND_OPTIONS}
          disabled={secondApi.isAndControlsDisabled()}
          isValueSelected={(v) => secondApi.isSelectedAndValue(v)}
          onValueChange={secondApi.selectAndValue}
          onSelect={secondApi.selectAnd}
        />
      </div>
      <div key={Mode.RANGE}>
        <Radio
          value={Mode.RANGE}
          checked={secondApi.isRangeSelected()}
          onChange={secondApi.selectRange}
        />
        <RangeComponent
          disabled={secondApi.isRangeControlsDisabled()}
          primaryOptions={SECOND_OPTIONS}
          secondaryOptions={SECOND_OPTIONS}
          primaryValue={secondApi.getRangePrimaryValue()}
          secondaryValue={secondApi.getRangeSecondaryValue()}
          onPrimaryValueChange={secondApi.setRangePrimaryValue}
          onSecondaryValueChange={secondApi.setRangeSecondaryValue}
        />
      </div>
    </div>
  )
}
export { Second }

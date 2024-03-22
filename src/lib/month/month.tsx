import { Radio } from 'antd'
import { Type, Mode } from '@sbzen/cron-core'
import { useService, MONTH_OPTIONS } from '../utils'
import { AndComponent, Increment, RangeComponent } from '../share'

const Month = () => {
  const monthApi = useService().getApi(Type.MONTH)
  return (
    <div>
      <Radio
        value={Mode.EVERY}
        checked={monthApi.isEverySelected()}
        onChange={monthApi.selectEvery}
      >
        每月
      </Radio>
      <div key={Mode.INCREMENT}>
        <Radio
          value={Mode.INCREMENT}
          checked={monthApi.isIncrementSelected()}
          onChange={monthApi.selectIncrement}
        />
        <Increment
          disabled={monthApi.isIncrementControlsDisabled()}
          primaryOptions={MONTH_OPTIONS}
          primaryValue={monthApi.getIncrementPrimaryValue()}
          onPrimaryValueChange={monthApi.setIncrementPrimaryValue}
          secondaryOptions={MONTH_OPTIONS}
          secondaryValue={monthApi.getIncrementSecondaryValue()}
          onSecondaryValueChange={monthApi.setIncrementSecondaryValue}
        />
      </div>
      <div key={Mode.AND}>
        <Radio
          value={Mode.AND}
          checked={monthApi.isAndSelected()}
          onChange={monthApi.selectAnd}
        />
        具体月份：
        <AndComponent
          label={'具体月份'}
          options={MONTH_OPTIONS}
          disabled={monthApi.isAndControlsDisabled()}
          isValueSelected={(v) => monthApi.isSelectedAndValue(v)}
          onValueChange={monthApi.selectAndValue}
          onSelect={monthApi.selectAnd}
        />
      </div>
      <div key={Mode.RANGE}>
        <Radio
          value={Mode.RANGE}
          checked={monthApi.isRangeSelected()}
          onChange={monthApi.selectRange}
        />
        <RangeComponent
          disabled={monthApi.isRangeControlsDisabled()}
          primaryOptions={MONTH_OPTIONS}
          secondaryOptions={MONTH_OPTIONS}
          primaryValue={monthApi.getRangePrimaryValue()}
          secondaryValue={monthApi.getRangeSecondaryValue()}
          onPrimaryValueChange={monthApi.setRangePrimaryValue}
          onSecondaryValueChange={monthApi.setRangeSecondaryValue}
        />
      </div>
    </div>
  )
}
export { Month }

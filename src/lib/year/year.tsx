import { Radio } from 'antd'
import { Type, Mode } from '@sbzen/cron-core'
import { useService, YEAR_OPTIONS, YEAR_UNIT } from '../utils'
import { AndComponent, Increment, RangeComponent } from '../share'

const Year = () => {
  const yearApi = useService().getApi(Type.YEAR)
  return (
    <div>
      <Radio
        value={Mode.EVERY}
        checked={yearApi.isEverySelected()}
        onChange={yearApi.selectEvery}
      >
        任意年
      </Radio>
      <div key={Mode.INCREMENT}>
        <Radio
          value={Mode.INCREMENT}
          checked={yearApi.isIncrementSelected()}
          onChange={yearApi.selectIncrement}
        />
        <Increment
          unit={YEAR_UNIT}
          disabled={yearApi.isIncrementControlsDisabled()}
          primaryOptions={YEAR_OPTIONS}
          primaryValue={yearApi.getIncrementPrimaryValue()}
          onPrimaryValueChange={yearApi.setIncrementPrimaryValue}
          secondaryOptions={YEAR_OPTIONS}
          secondaryValue={yearApi.getIncrementSecondaryValue()}
          onSecondaryValueChange={yearApi.setIncrementSecondaryValue}
        />
      </div>
      <div key={Mode.AND}>
        <Radio
          value={Mode.AND}
          checked={yearApi.isAndSelected()}
          onChange={yearApi.selectAnd}
        />
        具体年份：
        <AndComponent
          label={'具体年份'}
          options={YEAR_OPTIONS}
          disabled={yearApi.isAndControlsDisabled()}
          isValueSelected={(v) => yearApi.isSelectedAndValue(v)}
          onValueChange={yearApi.selectAndValue}
          onSelect={yearApi.selectAnd}
        />
      </div>
      <div key={Mode.RANGE}>
        <Radio
          value={Mode.RANGE}
          checked={yearApi.isRangeSelected()}
          onChange={yearApi.selectRange}
        />
        <RangeComponent
          unit={YEAR_UNIT}
          disabled={yearApi.isRangeControlsDisabled()}
          primaryOptions={YEAR_OPTIONS}
          secondaryOptions={YEAR_OPTIONS}
          primaryValue={yearApi.getRangePrimaryValue()}
          secondaryValue={yearApi.getRangeSecondaryValue()}
          onPrimaryValueChange={yearApi.setRangePrimaryValue}
          onSecondaryValueChange={yearApi.setRangeSecondaryValue}
        />
      </div>
    </div>
  )
}
export { Year }

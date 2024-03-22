import { Radio } from 'antd'
import { Type, Mode } from '@sbzen/cron-core'
import { useService, MINUTE_OPTIONS } from '../utils'
import { AndComponent, Increment, RangeComponent } from '../share'

const Minute = () => {
  const minuteApi = useService().getApi(Type.MINUTES)
  return (
    <div>
      <Radio
        value={Mode.EVERY}
        checked={minuteApi.isEverySelected()}
        onChange={minuteApi.selectEvery}
      >
        每分钟
      </Radio>
      <div key={Mode.INCREMENT}>
        <Radio
          value={Mode.INCREMENT}
          checked={minuteApi.isIncrementSelected()}
          onChange={minuteApi.selectIncrement}
        />
        <Increment
          disabled={minuteApi.isIncrementControlsDisabled()}
          primaryOptions={MINUTE_OPTIONS}
          primaryValue={minuteApi.getIncrementPrimaryValue()}
          onPrimaryValueChange={minuteApi.setIncrementPrimaryValue}
          secondaryOptions={MINUTE_OPTIONS}
          secondaryValue={minuteApi.getIncrementSecondaryValue()}
          onSecondaryValueChange={minuteApi.setIncrementSecondaryValue}
        />
      </div>
      <div key={Mode.AND}>
        <Radio
          value={Mode.AND}
          checked={minuteApi.isAndSelected()}
          onChange={minuteApi.selectAnd}
        />
        具体分钟：
        <AndComponent
          label={'具体分钟'}
          options={MINUTE_OPTIONS}
          disabled={minuteApi.isAndControlsDisabled()}
          isValueSelected={(v) => minuteApi.isSelectedAndValue(v)}
          onValueChange={minuteApi.selectAndValue}
          onSelect={minuteApi.selectAnd}
        />
      </div>
      <div key={Mode.RANGE}>
        <Radio
          value={Mode.RANGE}
          checked={minuteApi.isRangeSelected()}
          onChange={minuteApi.selectRange}
        />
        <RangeComponent
          disabled={minuteApi.isRangeControlsDisabled()}
          primaryOptions={MINUTE_OPTIONS}
          secondaryOptions={MINUTE_OPTIONS}
          primaryValue={minuteApi.getRangePrimaryValue()}
          secondaryValue={minuteApi.getRangeSecondaryValue()}
          onPrimaryValueChange={minuteApi.setRangePrimaryValue}
          onSecondaryValueChange={minuteApi.setRangeSecondaryValue}
        />
      </div>
    </div>
  )
}
export { Minute }

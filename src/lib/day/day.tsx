import { Radio } from 'antd'
import { Type, Mode } from '@sbzen/cron-core'
import { useService, DAY_OPTIONS, DAY_UNIT } from '../utils'
import { AndComponent, Increment } from '../share'

const Day = () => {
  const DayApi = useService().getApi(Type.DAY)
  return (
    <div>
      <Radio
        value={Mode.EVERY}
        checked={DayApi.isEverySelected()}
        onChange={DayApi.selectEvery}
      >
        每天
      </Radio>
      <div key={Mode.INCREMENT}>
        <Radio
          value={Mode.INCREMENT}
          checked={DayApi.isDayOfMonthIncrementSelected()}
          onChange={DayApi.selectDayOfMonthIncrement}
        />
        <Increment
          unit={DAY_UNIT}
          disabled={DayApi.isDayOfMonthIncrementControlsDisabled()}
          primaryOptions={DAY_OPTIONS}
          primaryValue={DayApi.getDayOfMonthIncrementPrimary()}
          onPrimaryValueChange={DayApi.setDayOfMonthIncrementPrimary}
          secondaryOptions={DAY_OPTIONS}
          secondaryValue={DayApi.getDayOfMonthIncrementSecondary()}
          onSecondaryValueChange={DayApi.setDayOfMonthIncrementSecondary}
        />
      </div>
      <div key={Mode.AND}>
        <Radio
          value={Mode.AND}
          checked={DayApi.isDayOfMonthAndSelected()}
          onChange={DayApi.selectDayOfMonthAnd}
        />
        具体日期：
        <AndComponent
          label={'具体日期'}
          options={DAY_OPTIONS}
          disabled={DayApi.isDayOfMonthAndControlsDisabled()}
          isValueSelected={(v) => DayApi.isSelectedDayOfMonthAndValue(v)}
          onValueChange={DayApi.selectDayOfMonthAndValue}
          onSelect={DayApi.selectDayOfMonthAnd}
        />
      </div>
    </div>
  )
}
export { Day }

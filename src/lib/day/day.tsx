import { Radio } from 'antd'
import { Type, Mode } from '@sbzen/cron-core'
import { useService, DAY_OPTIONS, DAY_UNIT, WEEK_OPTIONS } from '../utils'
import { AndComponent, Increment, RangeComponent } from '../share'

const Day = () => {
  const DayApi = useService().getApi(Type.DAY)
  return (
    <div>
      <Radio
        key={Mode.EVERY}
        value={Mode.EVERY}
        checked={DayApi.isEverySelected()}
        onChange={DayApi.selectEvery}
      >
        每天
      </Radio>
      <Radio
        key={Mode.LAST_DAY}
        value={Mode.LAST_DAY}
        checked={DayApi.isDayOfMonthLastDaySelected()}
        onChange={DayApi.selectDayOfMonthLastDay}
      >
        本月的最后一天
      </Radio>
      <Radio
        key={Mode.LAST_DAY_WEEK}
        value={Mode.LAST_DAY_WEEK}
        checked={DayApi.isDayOfMonthLastDayWeekSelected()}
        onChange={DayApi.selectDayOfMonthLastDayWeek}
      >
        本月的最后一个工作日
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
      <div key={'DAY_OF_WEEK'}>
        <Radio
          value={Mode.AND}
          checked={DayApi.isDayOfWeekAndSelected()}
          onChange={DayApi.selectDayOfWeekAnd}
        />
        具体星期：
        <AndComponent
          label={'具体星期'}
          options={WEEK_OPTIONS}
          disabled={DayApi.isDayOfWeekAndControlsDisabled()}
          isValueSelected={(v) => DayApi.isSelectedDayOfWeekAndValue(v)}
          onValueChange={DayApi.selectDayOfWeekAndValue}
          onSelect={DayApi.selectDayOfWeekAnd}
        />
      </div>
      <div key={'DAY_OF_WEEK_RANGE'}>
        <Radio
          value={Mode.RANGE}
          checked={DayApi.isDayOfWeekRangeSelected()}
          onChange={DayApi.selectDayOfWeekRange}
        />
        <RangeComponent
          primaryOptions={WEEK_OPTIONS}
          primaryValue={DayApi.getDayOfWeekRangePrimary()}
          onPrimaryValueChange={DayApi.setDayOfWeekRangePrimary}
          secondaryOptions={WEEK_OPTIONS}
          secondaryValue={DayApi.getDayOfWeekRangeSecondary()}
          onSecondaryValueChange={DayApi.setDayOfWeekRangeSecondary}
        />
      </div>
    </div>
  )
}
export { Day }

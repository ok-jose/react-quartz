export enum WeekDayCode {
  SUN = 'SUN',
  MON = 'MON',
  TUE = 'TUE',
  WED = 'WED',
  THU = 'THU',
  FRI = 'FRI',
  SAT = 'SAT',
}

// 创建一个通用的函数来生成选项
function generateOptions(length: number, start: number = 1) {
  return Array.from({ length }, (_, i) => i + start).map((i) => {
    const str = i.toString()
    return { value: str, label: str }
  })
}

// 使用新的函数来生成选项
const SECOND_OPTIONS = generateOptions(60, 0)
const MINUTE_OPTIONS = generateOptions(60, 0)
const HOUR_OPTIONS = generateOptions(24, 0)
const DAY_OPTIONS = generateOptions(31)
const WEEK_DAY_OPTIONS = generateOptions(7)
const MONTH_INTERVAL = generateOptions(12)
const YEAR_OPTIONS = generateOptions(80, 2020)

const WEEK_OPTIONS = [
  {
    label: '周一',
    value: WeekDayCode.MON,
  },
  {
    label: '周二',
    value: WeekDayCode.TUE,
  },
  {
    label: '周三',
    value: WeekDayCode.WED,
  },
  {
    label: '周四',
    value: WeekDayCode.THU,
  },
  {
    label: '周五',
    value: WeekDayCode.FRI,
  },
  {
    label: '周六',
    value: WeekDayCode.SAT,
  },
  {
    label: '周日',
    value: WeekDayCode.SUN,
  },
]

const YEAR_UNIT = '年'
const MONTH_UNIT = '月'
const DAY_UNIT = '日'
const WEEK_UNIT = '周'
const HOUR_UNIT = '时'
const MINUTE_UNIT = '分'
const SECOND_UNIT = '秒'

const MONTH_OPTIONS = [
  {
    label: '1月',
    value: 'JAN',
  },
  {
    label: '2月',
    value: 'FEB',
  },
  {
    label: '3月',
    value: 'MAR',
  },
  {
    label: '4月',
    value: 'APR',
  },
  {
    label: '5月',
    value: 'MAY',
  },
  {
    label: '6月',
    value: 'JUN',
  },
  {
    label: '7月',
    value: 'JUL',
  },
  {
    label: '8月',
    value: 'AUG',
  },
  {
    label: '9月',
    value: 'SEP',
  },
  {
    label: '10月',
    value: 'OCT',
  },
  {
    label: '11月',
    value: 'NOV',
  },
  {
    label: '12月',
    value: 'DEC',
  },
]

export {
  SECOND_OPTIONS,
  MINUTE_OPTIONS,
  HOUR_OPTIONS,
  DAY_OPTIONS,
  WEEK_DAY_OPTIONS,
  MONTH_OPTIONS,
  YEAR_OPTIONS,
  MONTH_INTERVAL,
  YEAR_UNIT,
  MONTH_UNIT,
  WEEK_UNIT,
  DAY_UNIT,
  HOUR_UNIT,
  MINUTE_UNIT,
  SECOND_UNIT,
  generateOptions,
  WEEK_OPTIONS,
}

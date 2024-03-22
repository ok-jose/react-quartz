// 创建一个通用的函数来生成选项
function generateOptions(length: number, start: number = 1) {
  return Array.from({ length }, (_, i) => i + start).map((i) => {
    const str = i.toString()
    return { label: str, value: str }
  })
}

// 使用新的函数来生成选项
const SECOND_OPTIONS = generateOptions(60)
const MINUTE_OPTIONS = generateOptions(60)
const DAY_OPTIONS = generateOptions(31)
const WEEK_DAY_OPTIONS = generateOptions(7)
const MONTH_OPTIONS = generateOptions(12)
const YEAR_OPTIONS = generateOptions(80, 2020)

export {
  SECOND_OPTIONS,
  MINUTE_OPTIONS,
  DAY_OPTIONS,
  WEEK_DAY_OPTIONS,
  MONTH_OPTIONS,
  YEAR_OPTIONS,
}

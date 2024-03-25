export type SharedProps = {
  disabled?: boolean
  checked?: boolean
  onSelect?: () => void
}

export declare enum WeekDayCode {
  SUN = 'SUN',
  MON = 'MON',
  TUE = 'TUE',
  WED = 'WED',
  THU = 'THU',
  FRI = 'FRI',
  SAT = 'SAT',
}

export type QuartzProps = {
  onChange?: (value: string) => void
  value?: string
  className?: string
}

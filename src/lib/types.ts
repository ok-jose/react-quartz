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
  disabled?: boolean
  onChange?: (value: string) => void
  value?: string
  className?: string
  size?: 'small' | 'middle' | 'large'
}

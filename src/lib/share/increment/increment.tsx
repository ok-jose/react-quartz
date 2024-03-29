import { Select } from 'antd'
import { SharedProps } from '../../types.ts'
import { useSize } from '../../utils'
import './increment.css'

type IncrementProps = {
  unit?: string
  primaryOptions: {
    label: string | number
    value: string
  }[]
  primaryValue: string
  onPrimaryValueChange: (value: string) => void
  secondaryOptions: {
    label: string | number
    value: string
  }[]
  secondaryValue: string
  onSecondaryValueChange: (value: string) => void
} & SharedProps
const Increment = (props: IncrementProps) => {
  const {
    primaryOptions,
    secondaryOptions,
    primaryValue,
    secondaryValue,
    onSecondaryValueChange,
    onPrimaryValueChange,
    disabled,
    unit,
  } = props

  const size = useSize()
  return (
    <div className={'increment'}>
      从
      <Select
        className={'increment-select'}
        size={size}
        disabled={disabled}
        value={secondaryValue}
        key={'secondary'}
        options={secondaryOptions}
        onSelect={(value) => {
          onSecondaryValueChange(value)
        }}
      />
      {unit}开始，每
      <Select
        className={'increment-select'}
        size={size}
        disabled={disabled}
        value={primaryValue}
        key={'primary'}
        options={primaryOptions}
        onSelect={onPrimaryValueChange}
      />
      {unit}执行
    </div>
  )
}
export { Increment }

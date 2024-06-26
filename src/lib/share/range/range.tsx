import { Select } from 'antd'
import { SharedProps } from '../../types.ts'
import { useSize } from '../../utils'
import './range.css'

type RangeProps = {
  unit?: string
  primaryOptions: {
    label: string
    value: string
  }[]
  primaryValue: string
  onPrimaryValueChange: (value: string) => void
  secondaryOptions: {
    label: string
    value: string
  }[]
  secondaryValue: string
  onSecondaryValueChange: (value: string) => void
} & SharedProps
const RangeComponent = (props: RangeProps) => {
  const {
    unit,
    disabled,
    primaryOptions,
    secondaryOptions,
    primaryValue,
    secondaryValue,
    onSecondaryValueChange,
    onPrimaryValueChange,
  } = props
  const size = useSize()
  return (
    <div className={'range'}>
      在
      <Select
        className={'range-select'}
        size={size}
        disabled={disabled}
        value={primaryValue}
        key={'primary'}
        options={primaryOptions}
        onSelect={onPrimaryValueChange}
      />
      {unit}
      与
      <Select
        className={'range-select'}
        size={size}
        disabled={disabled}
        value={secondaryValue}
        key={'secondary'}
        options={secondaryOptions}
        onSelect={(value) => {
          onSecondaryValueChange(value)
        }}
      />
      {unit}
      之间
    </div>
  )
}
export { RangeComponent }

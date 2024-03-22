import { Select } from 'antd'
import { SharedProps } from '../types.ts'

type RangeProps = {
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
    disabled,
    primaryOptions,
    secondaryOptions,
    primaryValue,
    secondaryValue,
    onSecondaryValueChange,
    onPrimaryValueChange,
  } = props
  return (
    <div style={{ display: 'inline' }}>
      在
      <Select
        disabled={disabled}
        value={primaryValue}
        key={'primary'}
        options={primaryOptions}
        onSelect={onPrimaryValueChange}
      />
      与
      <Select
        disabled={disabled}
        value={secondaryValue}
        key={'secondary'}
        options={secondaryOptions}
        onSelect={(value) => {
          onSecondaryValueChange(value)
        }}
      />
      之间
    </div>
  )
}
export { RangeComponent }

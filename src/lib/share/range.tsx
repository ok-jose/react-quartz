import { Select } from 'antd'
import { SharedProps } from '../types.ts'

type RangeProps = {
  disabledControls?: boolean
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
    primaryOptions,
    secondaryOptions,
    primaryValue,
    secondaryValue,
    onSecondaryValueChange,
    onPrimaryValueChange,
  } = props
  return (
    <div>
      在
      <Select
        value={primaryValue}
        key={'primary'}
        options={primaryOptions}
        onSelect={onPrimaryValueChange}
      />
      与
      <Select
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

import { Select } from 'antd'
import { SharedProps } from '../types.ts'

type IncrementProps = {
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
  } = props
  return (
    <div>
      从
      <Select
        value={secondaryValue}
        key={'secondary'}
        options={secondaryOptions}
        onSelect={(value) => {
          onSecondaryValueChange(value)
        }}
      />
      开始，每
      <Select
        value={primaryValue}
        key={'primary'}
        options={primaryOptions}
        onSelect={onPrimaryValueChange}
      />
    </div>
  )
}
export { Increment }

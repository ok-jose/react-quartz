import { ReactNode } from 'react'
import { Checkbox } from 'antd'
import { SharedProps } from '../types.ts'

type AndComponentProps = {
  label: ReactNode
  options: { label: string; value: string }[]
  isValueSelected: (value: string) => boolean
  onValueChange: (value: string) => void
} & SharedProps

const AndComponent = (props: AndComponentProps) => {
  const { options, isValueSelected, onValueChange } = props
  return (
    <div>
      {options.map((item) => {
        return (
          <Checkbox
            key={item.value}
            checked={isValueSelected(item.value)}
            value={item.value}
            onChange={(e) => onValueChange(e.target.value)}
          >
            {item.label}
          </Checkbox>
        )
      })}
    </div>
  )
}
export { AndComponent }

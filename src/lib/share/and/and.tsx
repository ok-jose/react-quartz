import { ReactNode } from 'react'
import { Checkbox, Row, Col } from 'antd'
import { SharedProps } from '../../types.ts'
import './and.css'

type AndComponentProps = {
  label: ReactNode
  options: { label: string; value: string }[]
  isValueSelected: (value: string) => boolean
  onValueChange: (value: string) => void
} & SharedProps

const AndComponent = (props: AndComponentProps) => {
  const { options, isValueSelected, onValueChange, disabled } = props
  return (
    <Row className={'and'}>
      {options.map((item) => {
        return (
          <Col xs={6} sm={3} md={3} lg={3} xl={2} xxl={1} key={item.value}>
            <Checkbox
              disabled={disabled}
              key={item.value}
              checked={isValueSelected(item.value)}
              value={item.value}
              onChange={(e) => onValueChange(e.target.value)}
            >
              {item.label}
            </Checkbox>
          </Col>
        )
      })}
    </Row>
  )
}
export { AndComponent }

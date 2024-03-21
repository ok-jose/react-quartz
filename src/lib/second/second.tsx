import { useState } from 'react'
import { Radio, Select, Checkbox } from 'antd'
import { Type, Mode } from '@sbzen/cron-core'
import { useApi } from '../utils/hooks/api-context/api-context.ts'

const selectOptions = Array.from({ length: 60 }, (_, i) => i + 1).map((i) => {
  return { label: i, value: i }
})

const Second = () => {
  const secondApi = useApi(Type.SECONDS)
  const [andSeconds, setAndSeconds] = useState<number[]>([])
  const handleOnChange = (e: any) => {
    const value = e.target.value
    switch (value) {
      case Mode.EVERY:
        secondApi!.selectEvery()
        break
      case Mode.INCREMENT:
        break
      case Mode.AND:
        break
      default:
        break
    }
  }
  return (
    <Radio.Group onChange={handleOnChange}>
      <Radio value={Mode.EVERY}>每秒</Radio>
      <Radio value={Mode.INCREMENT}>
        <div>
          每
          <Select key={'every'} options={selectOptions} />
          秒，从
          <Select key={'form'} options={selectOptions} />
          秒开始
        </div>
      </Radio>
      <Radio value={Mode.AND}>
        <div>
          具体秒：
          <Checkbox.Group
            value={andSeconds}
            options={selectOptions}
            onChange={(v) => {
              setAndSeconds(v as number[])
            }}
          />
        </div>
      </Radio>
      <Radio value={Mode.RANGE}>D</Radio>
    </Radio.Group>
  )
}
export { Second }

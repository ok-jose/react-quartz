import { useState } from 'react'
import { Input } from 'antd'
import { Quartz } from '../lib'

export const QuartZ = () => {
  const [value, setValue] = useState<string>('* * * * * *')
  return (
    <div>
      <Input value={value} />
      <Quartz
        size="small"
        value={value}
        onChange={(changedStr) => {
          setValue(changedStr)
        }}
      />
    </div>
  )
}

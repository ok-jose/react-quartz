import { useState } from 'react'
import { Input } from 'antd'
import { Quartz } from '../lib'

export const QuartZ = () => {
  const [value = '* * * 1/28 * ?', setValue] =
    useState<string>('* * * 1/28 * ?')
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

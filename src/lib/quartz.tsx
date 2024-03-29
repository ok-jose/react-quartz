import { useCallback, useEffect, useMemo, useState } from 'react'
import { Tabs } from 'antd'
import {
  CronQuartzUIService,
  getSegmentsList,
  getTypeSegments,
  Type,
} from '@sbzen/cron-core'
import { Second } from './second'
import { Minute } from './minute'
import { Hour } from './hour'
import { ApiProvider } from './utils'
import { Day } from './day'
import { Month } from './month'
import { Year } from './year'
import { QuartzProps } from './types'

const Quartz = (props: QuartzProps) => {
  const { onChange, value = '', className, size, disabled } = props
  const [curTab, setCurTab] = useState<Type>(Type.SECONDS)

  const [service] = useState(new CronQuartzUIService())

  useEffect(() => service.fillFromExpression(value), [service, value])
  const applyChanges = useCallback(() => {
    const str = service.toString()
    if (str !== value && onChange) {
      onChange(str)
    }
  }, [service, value, onChange])

  const listenChanges = useCallback(() => {
    const segments = getSegmentsList()
    return service.listen(segments, (_, segment) => {
      const shouldApply = getTypeSegments(curTab).includes(segment)
      if (shouldApply) {
        applyChanges()
      }
    })
  }, [curTab, service, applyChanges])
  useEffect(() => () => service.destroy(), [service])
  useEffect(() => listenChanges(), [listenChanges])
  useEffect(() => service.setDisabled(disabled), [disabled, service])

  const items = useMemo(() => {
    return [
      {
        key: Type.SECONDS,
        label: '秒',
        children: <Second />,
      },
      {
        key: Type.MINUTES,
        label: '分',
        children: <Minute />,
      },
      {
        key: Type.HOURS,
        label: '时',
        children: <Hour />,
      },
      {
        key: Type.DAY,
        label: '日',
        children: <Day />,
      },
      {
        key: Type.MONTH,
        label: '月',
        children: <Month />,
      },
      {
        key: Type.YEAR,
        label: '年',
        children: <Year />,
      },
    ]
  }, [])
  if (!service) return null
  return (
    <ApiProvider value={{ service, size }}>
      <Tabs
        className={className}
        activeKey={curTab}
        items={items}
        onChange={(tabKey) => setCurTab(tabKey as Type)}
      />
    </ApiProvider>
  )
}
export { Quartz }
export type { QuartzProps }

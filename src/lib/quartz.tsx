import { useEffect, useMemo, useState } from 'react'
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

type QuartzProps = {
  onChange?: (value: string) => void
  value?: string
}

const Quartz = (props: QuartzProps) => {
  const { onChange, value } = props
  const [curTab, setCurTab] = useState<Type>(Type.SECONDS)
  const service = useMemo(() => {
    return new CronQuartzUIService()
  }, [])
  const applyChanges = () => {
    const str = service.toString()
    if (str !== value && onChange) {
      onChange(str)
    }
  }
  const listenChanges = () => {
    const segments = getSegmentsList()
    return service.listen(segments, (_, segment) => {
      const shouldApply = getTypeSegments(curTab).includes(segment)
      if (shouldApply) {
        applyChanges()
      }
    })
  }
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
  useEffect(() => () => service.destroy(), [service])
  useEffect(() => listenChanges())
  return (
    <ApiProvider value={{ service: service }}>
      <Tabs
        activeKey={curTab}
        items={items}
        onChange={(tabKey) => setCurTab(tabKey as Type)}
      />
    </ApiProvider>
  )
}
export { Quartz }

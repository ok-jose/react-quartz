import { createContext, useContext } from 'react'
import { CronQuartzUIService } from '@sbzen/cron-core'

const ApiContext = createContext<{
  service: CronQuartzUIService
  size?: 'small' | 'middle' | 'large'
}>({ service: new CronQuartzUIService() })

const ApiProvider = ApiContext.Provider
const useService = () => {
  return useContext(ApiContext).service
}
const useSize = () => {
  return useContext(ApiContext).size
}
export { ApiContext, ApiProvider, useService, useSize }

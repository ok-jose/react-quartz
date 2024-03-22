import { createContext, useContext } from 'react'
import { CronQuartzUIService, Type } from '@sbzen/cron-core'

const ApiContext = createContext<{
  service: CronQuartzUIService
}>({ service: new CronQuartzUIService() })

const ApiProvider = ApiContext.Provider
const useService = () => {
  return useContext(ApiContext).service
}
const useApi = (type: Type) => {
  const service = useService()
  return service.getApi(type)
}
export { ApiContext, ApiProvider, useService, useApi }

import { createContext, useContext } from 'react'
import { CronQuartzUIService, Type } from '@sbzen/cron-core'

const ApiContext = createContext<{
  service: CronQuartzUIService | null
}>({ service: null })

const ApiProvider = ApiContext.Provider
const useService = () => {
  return useContext(ApiContext).service
}
const useApi = (type: Type) => {
  const service = useService()
  return service?.getApi(type)
}
export { ApiContext, ApiProvider, useService, useApi }

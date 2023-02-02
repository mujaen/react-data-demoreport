import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

import { getEnvConstant } from 'utils/env'

interface ParameterType {
  year: number
  month: number
}

export const useAxiosIdentityDemo = <TResponse, TError>({ year, month }: ParameterType) => {
  return useQuery<TResponse, TError>(
    ['identityRequest'],
    async (): Promise<TResponse> => {
      const data: TResponse = await axios.post(`${getEnvConstant('demoDataApiUrl')}`, {
        search_year: year,
        search_month: month,
      })

      return data
    },
    { enabled: false },
  )
}

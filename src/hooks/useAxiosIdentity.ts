import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

import { getEnvConstant } from 'utils/env'

interface ParameterType {
  year: number
  month: number | string
}

export const useAxiosIdentityDemo = <TResponse, TError>({ year, month }: ParameterType) => {
  let params = {
    search_year: year,
  }

  if (month !== '') {
    Object.assign(params, {
      search_month: month,
    })
  }

  return useQuery<TResponse, TError>(
    ['identityRequest'],
    async (): Promise<TResponse> => {
      const data: TResponse = await axios.post(`${getEnvConstant('demoDataApiUrl')}`, params)

      return data
    },
    { enabled: false },
  )
}

import { AxiosResponse } from 'axios'

export interface DemoDataResponse {
  tokenType: string
  accessToken: string
  expiresIn: number
  name: string
}

/**
 * 광고 정산 데이터 API 의 응답형식
 *
 * @export
 * @interface GetDemoAPIResponse
 */
export interface GetDemoAPIResponse {
  data: AxiosResponse<DemoDataResponse>
}

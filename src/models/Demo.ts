import { AxiosResponse } from 'axios'

export interface DemoDataResponse {
  IsTest: boolean
  Result: boolean
  ResultCode: number
  ResultMsg: string
  Payment: DemoDataPayment
}

export interface DemoDataPayment {
  Revenue: number
  Commission: number
  Complete: number
  Monthly: DemoDataMonthly[]
}

export interface DemoDataMonthly {
  Status: number
  Datetime: Date
  Revenue: number
  Commission: number
  Complete: number
  AppKey: number
  App: DemoDataApp[]
}

export interface DemoDataApp {
  AppName: string
  Revenue: number
  Comission: number
  Complete: number
  AppKey: string
  Campaign: DemoDataCampaign[]
}

export interface DemoDataCampaign {
  CampaignName: string
  Datetime: Date
  Revenue: number
  Commission: number
  Complete: number
  CampaignKey: string
  AppKey: number
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

export interface SettlementData {
  dateTime: Date[]
  status: number[]
}

/**
 * 월별 광고 정산 클래스
 *
 * @export
 * @class DemoSettlement
 */
export class DemoSettlement {
  rawData: DemoDataResponse | null

  constructor(data?: DemoDataResponse) {
    this.rawData = data || null
  }

  asData(): SettlementData {
    if (this.rawData === null) {
      return DemoSettlement.getFixture()
    }

    return {
      dateTime: this.rawData?.Payment.Monthly.map((month) => month.Datetime),
      status: this.rawData?.Payment.Monthly.map((month) => month.Status),
    }
  }

  static getFixture(): SettlementData {
    return {
      dateTime: [],
      status: [],
    }
  }
}

import React, { useEffect, useState } from 'react'

import { useAxiosIdentityDemo } from 'hooks/useAxiosIdentity'
import { GetDemoAPIResponse } from 'models/Demo'

import Container from 'components/AppLayout/Container'
import SectionTitle from 'components/SectionTitle'
import Grid from 'components/Grid'
import Bar from 'components/Charts/Bar'
import Spinner from 'components/Spinner'

function Purchase() {
  const [year] = useState<number>(2022)
  const [month] = useState<number | string>('')
  const [loaded, setLoaded] = useState<boolean>(false)

  const {
    status,
    isLoading,
    isError,
    error,
    data: demoDataResponse,
    refetch: executeDemoApi,
  } = useAxiosIdentityDemo<GetDemoAPIResponse, Error>({ year, month })

  useEffect(() => {
    setLoaded(true)
  }, [demoDataResponse])

  useEffect(() => {
    executeDemoApi()
  }, [year, month])

  return (
    <Container>
      <SectionTitle title="판매관리"></SectionTitle>
      {isError && <div>{error.message}</div>}
      {isLoading && <Spinner />}
      {status == 'success' && loaded && (
        <Grid height="500">
          <Bar
            data={[
              {
                label: '총 수익',
                data: [
                  {
                    primary: new Date('2022-02-01T00:00:00.000Z'),
                    likes: 130,
                  },
                ],
              },
              {
                label: '총 수수료',
                data: [
                  {
                    primary: new Date('2022-02-02T00:00:00.000Z'),
                    likes: 160,
                  },
                ],
              },
              {
                label: '총 캠페인 완료 수',
                data: [
                  {
                    primary: new Date('2022-02-03T00:00:00.000Z'),
                    likes: 170,
                  },
                ],
              },
            ]}
          />
        </Grid>
      )}
    </Container>
  )
}

export default Purchase

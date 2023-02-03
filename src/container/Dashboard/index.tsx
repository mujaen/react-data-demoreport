import React, { useState, useEffect } from 'react'

import { useAxiosIdentityDemo } from 'hooks/useAxiosIdentity'
import { GetDemoAPIResponse } from 'models/Demo'

import Container from 'components/AppLayout/Container'
import SectionTitle from 'components/SectionTitle'

function Dashboard(): JSX.Element {
  const [year, setYear] = useState<number>(2021)
  const [month, setMonth] = useState<number | string>('')
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
    setYear(2021)
    setMonth('')
    setLoaded(true)
  }, [demoDataResponse])

  return (
    <Container>
      <SectionTitle title="대쉬보드">알림</SectionTitle>
      {isError && <div>{error.message}</div>}
      {isLoading && <div>Loading....</div>}
      {status == 'success' && loaded && <div>테이블</div>}
      <button type="button" onClick={() => executeDemoApi()}>
        load
      </button>
    </Container>
  )
}

export default Dashboard

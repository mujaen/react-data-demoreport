import React, { useState, useEffect } from 'react'
import { useAxiosIdentityDemo } from 'hooks/useAxiosIdentity'
import { GetDemoAPIResponse } from 'models/Demo'
import Container from 'components/AppLayout/Container'

function Dashboard() {
  const [year, setYear] = useState<number>(2021)
  const [month, setMonth] = useState<number>(1)
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
    setYear(2022)
    setMonth(2)
    setLoaded(true)
  }, [demoDataResponse])

  return (
    <Container>
      {isError && <div>{error.message}</div>}
      {isLoading && <div>Loading...</div>}
      {status == 'success' && loaded}
      <button type="button" onClick={() => executeDemoApi()}>
        load
      </button>
    </Container>
  )
}

export default Dashboard

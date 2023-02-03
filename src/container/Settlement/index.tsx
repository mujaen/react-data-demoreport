import React, { useState, useEffect } from 'react'

import { useAxiosIdentityDemo } from 'hooks/useAxiosIdentity'
import { GetDemoAPIResponse } from 'models/Demo'

import Container from 'components/AppLayout/Container'
import SectionTitle from 'components/SectionTitle'
import BasicTable from 'components/BasicTable'
import Spinner from 'components/Spinner'

function Settlement() {
  const [year, setYear] = useState<number>(2022)
  const [month] = useState<number | string>('')
  const [loaded, setLoaded] = useState<boolean>(false)
  const searchYears = ['2022', '2021', '2020', '2019', '2018']

  const {
    status,
    isLoading,
    isError,
    error,
    data: demoDataResponse,
    refetch: executeDemoApi,
  } = useAxiosIdentityDemo<GetDemoAPIResponse, Error>({ year, month })

  const handleChangeSelect = (e) => {
    setYear(e.target.value)
  }

  useEffect(() => {
    setLoaded(true)
  }, [demoDataResponse])

  useEffect(() => {
    executeDemoApi()
  }, [year, month])

  return (
    <Container>
      <SectionTitle title="정산관리">
        <select name="" id="" onChange={handleChangeSelect}>
          {searchYears.map((item) => (
            <option key={`Options-${item}`} value={item}>
              {item}
            </option>
          ))}
        </select>
      </SectionTitle>
      {isError && <div>{error.message}</div>}
      {isLoading && <Spinner />}
      {status == 'success' && loaded && <BasicTable />}
    </Container>
  )
}

export default Settlement

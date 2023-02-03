import React, { useMemo } from 'react'
import { AxisOptions, Chart } from 'react-charts'

type DailyStars = {
  primary: Date
  likes: number
}

type Series = {
  label: string
  data: DailyStars[]
}

interface BarProps {
  data: Series[]
}

function Bar({ data }: BarProps) {
  const primaryAxis = useMemo(
    (): AxisOptions<DailyStars> => ({
      getValue: (datum) => datum.primary,
    }),
    [],
  )

  const secondaryAxes = useMemo(
    (): AxisOptions<DailyStars>[] => [
      {
        getValue: (datum) => datum.likes,
        elementType: 'bar',
      },
    ],
    [],
  )

  return (
    <>
      <Chart
        options={{
          data,
          primaryAxis,
          secondaryAxes,
        }}
      />
    </>
  )
}

export default Bar

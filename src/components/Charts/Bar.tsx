import React, { useMemo } from 'react'
import { AxisOptions, Chart } from 'react-charts'

type DailyStars = {
  date: Date
  stars: number
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
      getValue: (datum) => datum.date,
    }),
    [],
  )

  const secondaryAxes = useMemo(
    (): AxisOptions<DailyStars>[] => [
      {
        getValue: (datum) => datum.stars,
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

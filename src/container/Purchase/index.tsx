import React from 'react'

import Container from 'components/AppLayout/Container'
import SectionTitle from 'components/SectionTitle'
import Box from 'components/Charts/Box'
import Bar from 'components/Charts/Bar'

function Purchase() {
  return (
    <Container>
      <SectionTitle title="판매관리" />
      <Box height="400">
        <Bar
          data={[
            {
              label: 'React Charts',
              data: [
                {
                  date: new Date(),
                  stars: 645,
                },
              ],
            },
            {
              label: 'React Query',
              data: [
                {
                  date: new Date(),
                  stars: 1345,
                },
              ],
            },
          ]}
        />
      </Box>
      <Box>2</Box>
    </Container>
  )
}

export default Purchase

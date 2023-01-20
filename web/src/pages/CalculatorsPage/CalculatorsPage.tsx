import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import CalculateRollLengthFromTotalYardage from 'src/components/fn/CalculateRollLengthFromTotalYardage/CalculateRollLengthFromTotalYardage'

const CalculatorsPage = () => {
  return (
    <>
      <MetaTags title="Calculators" description="Calculators page" />

      <CalculateRollLengthFromTotalYardage />
    </>
  )
}

export default CalculatorsPage

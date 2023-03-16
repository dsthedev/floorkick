import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import CalculateRollLengthFromTotalYardage from 'src/components/calc/CalculateRollLengthFromTotalYardage/CalculateRollLengthFromTotalYardage'
import CalcFooter from 'src/components/ui/CalcFooter/CalcFooter'

const TotalyardtorolllengthPage = () => {
  return (
    <>
      <MetaTags
        title="Totalyardtorolllength"
        description="Totalyardtorolllength page"
      />

      <main>
        <div className="columns">
          <div className="column">
            <div className="content">
              <CalculateRollLengthFromTotalYardage></CalculateRollLengthFromTotalYardage>
            </div>
          </div>
        </div>
      </main>

      <CalcFooter></CalcFooter>
    </>
  )
}

export default TotalyardtorolllengthPage

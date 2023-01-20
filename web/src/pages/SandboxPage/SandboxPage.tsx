import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import CalculateRollLengthFromTotalYardage from 'src/components/fn/CalculateRollLengthFromTotalYardage/CalculateRollLengthFromTotalYardage'

const SandboxPage = () => {
  return (
    <>
      <MetaTags title="Sandbox" description="Sandbox page" />

      <div className="segment">
        <header className="segment-header">
          <h2 className="heading">Sandbox</h2>
        </header>

        <p>
          {
            'The sandbox page is where a developer puts features in for quick & loose testing.  Do not rely on anything here as it is a digital playground, where things can and will break.'
          }
        </p>

        <h3>Calculators:</h3>

        <CalculateRollLengthFromTotalYardage />

        <hr />

        <p>Have an idea for a useful calculator? Ask the developer!</p>
      </div>
    </>
  )
}

export default SandboxPage

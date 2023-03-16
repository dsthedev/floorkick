import { MetaTags } from '@redwoodjs/web'

import IsItADrop from 'src/components/calc/IsItADrop/IsItADrop'
import CalcFooter from 'src/components/ui/CalcFooter/CalcFooter'

const IsitadropPage = () => {
  return (
    <>
      <MetaTags title="Isitadrop" description="Isitadrop page" />

      <header>
        <div className="columns">
          <div className="column">
            <h1 className="title">Is it a Drop?</h1>
          </div>
        </div>
      </header>

      <main>
        <hr />
        <IsItADrop></IsItADrop>
        <hr />
      </main>

      <CalcFooter></CalcFooter>
    </>
  )
}

export default IsitadropPage

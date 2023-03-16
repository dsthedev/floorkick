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
        <div className="box">
          <p>
            <strong>What&apos;s a &quot;drop&quot;?</strong>
            <span>
              A <em>drop</em> is a room or area where carpet is going to be
              installed that doesn&apos;t need 2 pieces to be seamed together.
              Typically, this is a small room no wider than the width of a roll
              of carpet; usually 12 or 15 ft wide.
            </span>
          </p>
          <br />
          <p>
            This calculator caps the minimum width to be 1&quot; less than the
            roll width, just in case the original measurement is a little
            short...
          </p>
          <p className="has-text-centered is-size-1">&#129300;</p>
        </div>
      </main>

      <CalcFooter></CalcFooter>
    </>
  )
}

export default IsitadropPage

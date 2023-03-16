import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import PlankIncrementor from 'src/components/calc/PlankIncrementor/PlankIncrementor'
import CalcFooter from 'src/components/ui/CalcFooter/CalcFooter'

const PlankincrementorPage = () => {
  return (
    <>
      <MetaTags title="Plankincrementor" description="Plankincrementor page" />

      <header>
        <div className="columns">
          <div className="column">
            <h1 className="title">Plank Incrementor</h1>
          </div>
        </div>
      </header>

      <main>
        <div className="columns">
          <div className="column">
            <div className="content">
              <PlankIncrementor></PlankIncrementor>
            </div>
          </div>
        </div>
      </main>

      <aside className="is-hidden">
        <div className="columns">
          <div className="column">
            <div className="content">
              <hr />
              <h2 className="is-size-5 mb-6">About the Plank Incrementor</h2>
              <blockquote>
                When laying LVT planks, you need to position the layout so that
                no row is extra thin. Thin pieces can easily shift on glue, be
                shifted afterwards by trim and mouldings, or just look bad.
              </blockquote>
              <p>
                The plank incrementor calculator can be used to check multiple
                distances off of a start-line to determine the remaining widths
                against walls and other checkpoints. Any distance below a given
                threshold will be highlighted in red. Above the threshold should
                range from orange to green.
              </p>
              <p>
                The incrementor functions will let you decide how much to shift
                the start-line, which will alter each measurement accordingly.
                Use the +/- buttons to shift the starting point until all
                measurements pass the threshold.
              </p>
              <h3>Process</h3>
              <ol>
                <li>Set plank width</li>
                <li>Set min-width threshold</li>
                <li>Set initial wall offset +/- (defaults to +plankWidth)</li>
                <li>Enter direction & distance(s) to a wall/door/endpoint</li>
              </ol>
              <h3>Example</h3>
              <ul>
                <li>Plank is 7.25 inches</li>
                <li>Min-width is 2 inches</li>
                <li>Initial wall offset is 7.25 inches</li>
                <li>Distance 1 is 72 inches</li>
                <li>Distance 2 is 140.5 inches</li>
                <li>Distance (door) 3 is -0.75 inches</li>
                <li>Distance 4 is -23.33 inches</li>
              </ul>
              <table>
                <thead>
                  <tr>
                    <th>distance</th>
                    <th>default remainder</th>
                    <th>+4 distance</th>
                    <th>+4 offset remainder</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>72</td>
                    <td>6.74</td>
                    <td>76</td>
                    <td>3.48</td>
                  </tr>
                  <tr>
                    <td>140.5</td>
                    <td>2.75</td>
                    <td>144.5</td>
                    <td>6.74</td>
                  </tr>
                  <tr>
                    <td>0.75</td>
                    <td>0.75</td>
                    <td>-3.25</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>23.33</td>
                    <td>1.6</td>
                    <td>19.33</td>
                    <td>4.86</td>
                  </tr>
                </tbody>
              </table>
              <p>
                From this example, distance 1 & 2 are okay, while 3 & 4 are not.
                An offset of +4 inches will fix this. Shifting the starting line
                by +4 will give good size remainders for all distances.
              </p>
              <p>
                <strong>Note:</strong>Distance 3 that goes back into the door
                has a "remainder" of 4, which is misleading; as in that's what
                will be cut-off, and the "real remainder" on the initial offset
                wall would be 3.25in.
                <br />
                <em>
                  {
                    'A possible fix would be to check: if distance < plank width: show +x dist instead'
                  }
                </em>
              </p>
            </div>
          </div>
        </div>
      </aside>

      <CalcFooter></CalcFooter>
    </>
  )
}

export default PlankincrementorPage

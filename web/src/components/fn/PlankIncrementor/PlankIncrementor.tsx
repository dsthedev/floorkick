import { useEffect, useState } from 'react'

const PlankIncrementor = () => {
  const [plankWidth, setPlankWidth] = useState(7.25)
  const [remainderThreshold, setRemainderThreshold] = useState(2)
  // const [defaultOffset, setDefaultOffset] = useState(7.25)

  const [distanceOne, setDistanceOne] = useState(plankWidth)
  const [distanceOneRemainder, setDistanceOneRemainder] = useState('0')

  const handlePlankWidthChange = (e) => {
    let cleanedNumber = parseFloat(e.target.value).toFixed(3).toString()

    if (isNaN(cleanedNumber)) {
      cleanedNumber = 1
    }
    setPlankWidth(parseFloat(cleanedNumber))
    // setDistanceOneRemainder(calculateDistanceRemainder(distanceOne))
  }

  const handleRemainderThresholdChange = (e) => {
    const cleanedNumber = parseFloat(e.target.value).toFixed(3).toString()

    setRemainderThreshold(parseFloat(cleanedNumber))
  }

  const handleDistanceOneChange = (e) => {
    let cleanedNumber = parseFloat(e.target.value).toFixed(3)

    if (isNaN(cleanedNumber)) {
      cleanedNumber = 0
    }

    setDistanceOne(parseFloat(cleanedNumber))
    // setDistanceOneRemainder(calculateDistanceRemainder(distanceOne))
  }

  const calculateDistanceRemainder = (distance: number) => {
    const distanceDivByPlankWidth = parseFloat(distance) / plankWidth
    const flooredRemainder =
      distanceDivByPlankWidth - Math.floor(distanceDivByPlankWidth)
    const flooredRemainderInInches = flooredRemainder * plankWidth

    return parseFloat(flooredRemainderInInches.toFixed(3))
  }

  useEffect(() => {
    setDistanceOneRemainder(calculateDistanceRemainder(distanceOne))
  }, [distanceOne, plankWidth])

  return (
    <>
      <section className="box">
        <div className="columns">
          <div className="column">
            <div className="field">
              <label htmlFor="plankWidthControl" className="label">
                Plank Width
              </label>
              <div className="control">
                <input
                  name="plankWidthControl"
                  className="input"
                  type="number"
                  min="0"
                  max="72"
                  step="0.01"
                  placeholder="7.25"
                  value={plankWidth}
                  onChange={handlePlankWidthChange}
                />
              </div>
              <p className="help">
                {
                  "Enter the plank's width; in inches as decimal (1/4in == 0.25)."
                }
              </p>
            </div>
          </div>

          <div className="column">
            <div className="field">
              <label htmlFor="remainderThresholdControl" className="label">
                Remainder Threshold
              </label>
              <div className="control">
                <input
                  name="remainderThresholdControl"
                  className="input"
                  type="number"
                  min="0"
                  max="72"
                  step="0.01"
                  placeholder="7.25"
                  value={remainderThreshold}
                  onChange={handleRemainderThresholdChange}
                />
              </div>
              <p className="help">
                {
                  'Enter the minimum acceptable width threshold; in inches as decimal (1/4in == 0.25).'
                }
              </p>
            </div>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <table>
              <thead>
                <tr>
                  <th>Distance</th>
                  <th>Remainder</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="field">
                      <label
                        htmlFor="distanceOneControl"
                        className="label is-hidden"
                      >
                        Distance #1
                      </label>
                      <span className="control">
                        <input
                          name="distanceOneControl"
                          className="input is-large"
                          type="number"
                          min={plankWidth}
                          step="0.01"
                          placeholder="7.25"
                          value={distanceOne}
                          onChange={handleDistanceOneChange}
                        />
                      </span>
                    </span>
                  </td>
                  <td>
                    <h6 className="is-size-2 mb-0">{distanceOneRemainder}"</h6>
                    <small>
                      ({parseFloat(distanceOne / plankWidth).toFixed(3)})
                    </small>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* <div className="columns">
          <div className="column">
            <div className="field">
              <label htmlFor="defaultOffsetControl" className="label">
                Default Offset
              </label>
              <div className="control">
                <input
                  name="defaultOffsetControl"
                  className="input"
                  type="text"
                  value={defaultOffset}
                  readOnly={true}
                  disabled={true}
                />
              </div>
              <p className="help">
                {
                  'Default offset is always the width of the plank off the wall, it is used compare to the new offset.'
                }
              </p>
            </div>
          </div>

          <div className="column">
            <div className="field">
              <label htmlFor="defaultOffsetControl" className="label">
                Default Offset
              </label>
              <div className="control">
                <input
                  name="defaultOffsetControl"
                  className="input"
                  type="text"
                  value={defaultOffset}
                  readOnly={true}
                  disabled={true}
                />
              </div>
              <p className="help">
                {
                  'Default offset is always the width of the plank off the wall, it is used compare to the new offset.'
                }
              </p>
            </div>
          </div>
        </div> */}
      </section>

      <hr />

      <section>
        <h2>{'Plank Incrementor'}</h2>
        <blockquote>
          When laying LVT planks, you need to position the layout so that no row
          is extra thin. Thin pieces can easily shift on glue, be shifted
          afterwards by trim and mouldings, or just look bad.
        </blockquote>
        <p>
          The plank incrementor calculator can be used to check multiple
          distances off of a start-line to determine the remaining widths
          against walls and other checkpoints. Any distance below a given
          threshold will be highlighted in red. Above the threshold should range
          from orange to green.
        </p>
        <p>
          The incrementor functions will let you decide how much to shift the
          start-line, which will alter each measurement accordingly. Use the +/-
          buttons to shift the starting point until all measurements pass the
          threshold.
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
          From this example, distance 1 & 2 are okay, while 3 & 4 are not. An
          offset of +4 inches will fix this. Shifting the starting line by +4
          will give good size remainders for all distances.
        </p>
        <p>
          <strong>Note:</strong>Distance 3 that goes back into the door has a
          "remainder" of 4, which is misleading; as in that's what will be
          cut-off, and the "real remainder" on the initial offset wall would be
          3.25in.
          <br />
          <em>
            {
              'A possible fix would be to check: if distance < plank width: show +x dist instead'
            }
          </em>
        </p>
      </section>
    </>
  )
}

export default PlankIncrementor

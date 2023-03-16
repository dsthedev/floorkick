import { useEffect, useState } from 'react'

const PlankIncrementor = () => {
  const [plankWidth, setPlankWidth] = useState(7.25)
  const [remainderThreshold, setRemainderThreshold] = useState(2)
  // const [defaultOffset, setDefaultOffset] = useState(7.25)

  const [distanceOne, setDistanceOne] = useState(plankWidth * 2)
  const [distanceOneRemainder, setDistanceOneRemainder] = useState('0')
  const [distanceOneRemainderColor, setDistanceOneRemainderColor] = useState(
    'has-background-warning-light'
  )

  const handlePlankWidthChange = (e) => {
    let cleanedNumber = parseFloat(e.target.value).toFixed(3).toString()

    if (isNaN(cleanedNumber)) {
      cleanedNumber = 0
    }

    setPlankWidth(parseFloat(cleanedNumber))
  }

  const handleRemainderThresholdChange = (e) => {
    let cleanedNumber = parseFloat(e.target.value).toFixed(3).toString()

    if (isNaN(cleanedNumber)) {
      cleanedNumber = 0
    }

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
    if (distanceOneRemainder > remainderThreshold) {
      setDistanceOneRemainderColor('has-background-success-light')
    }
    if (distanceOneRemainder < remainderThreshold) {
      setDistanceOneRemainderColor('has-background-danger-light')
    }
    if (
      distanceOneRemainder == 0 ||
      distanceOneRemainder == remainderThreshold
    ) {
      setDistanceOneRemainderColor('has-background-warning-light')
    }

    setDistanceOneRemainder(calculateDistanceRemainder(distanceOne))
  }, [plankWidth, remainderThreshold, distanceOne, distanceOneRemainder])

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
                  className="input is-size-4"
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
                  className="input is-size-4"
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
          <div className="column is-half">
            <div className="field">
              <label htmlFor="distanceOneControl" className="label">
                Check Distance
              </label>
              <div className="control">
                <input
                  name="distanceOneControl"
                  className="input is-size-4"
                  type="number"
                  min={plankWidth}
                  step="0.01"
                  placeholder="7.25"
                  value={distanceOne}
                  onChange={handleDistanceOneChange}
                />
                <p className="help">
                  {
                    'Enter a distance to check in inches as a decimal (1/4in == 0.25).'
                  }
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className={distanceOneRemainderColor + ' box'}>
              <h5 className="is-size-6 mb-0">Remainder:</h5>
              <h6 className="is-size-4 mb-0">{distanceOneRemainder}"</h6>
              <small>({parseFloat(distanceOne / plankWidth).toFixed(3)})</small>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PlankIncrementor

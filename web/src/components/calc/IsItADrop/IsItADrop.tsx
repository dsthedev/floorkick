import { useEffect, useState } from 'react'

const IsItADrop = () => {
  const [roomHasSeam, setRoomHasSeam] = useState(false)
  const [blockquoteColor, setBlockquoteColor] = useState('')

  const [roomWidthFt, setRoomWidthFt] = useState(12)
  const [roomWidthIn, setRoomWidthIn] = useState(4)
  const [roomLengthFt, setRoomLengthFt] = useState(13)
  const [roomLengthIn, setRoomLengthIn] = useState(6)

  const [rollWidth, setRollWidth] = useState(12)

  const cleanInt = (numToClean: number) => {
    let cleanedNumber = parseInt(numToClean).toFixed(0).toString()

    if (isNaN(cleanedNumber)) {
      cleanedNumber = 0
    }

    return cleanedNumber
  }

  const handleRoomWidthFtChange = (e) => {
    const cleanedNumber = cleanInt(e.target.value)

    setRoomWidthFt(parseInt(cleanedNumber))
  }

  const handleRoomWidthInChange = (e) => {
    const cleanedNumber = cleanInt(e.target.value)

    setRoomWidthIn(parseInt(cleanedNumber))
  }

  const handleRoomLengthFtChange = (e) => {
    const cleanedNumber = cleanInt(e.target.value)

    setRoomLengthFt(parseInt(cleanedNumber))
  }

  const handleRoomLengthInChange = (e) => {
    const cleanedNumber = cleanInt(e.target.value)

    setRoomLengthIn(parseInt(cleanedNumber))
  }

  const handleRollWidthChange = (e) => {
    setRollWidth(parseInt(e.target.value))
  }

  useEffect(() => {
    const minSeamRequirement = rollWidth - 1 / 12

    const roomWidth = roomWidthFt + roomWidthIn / 12
    // const roomLength = roomLengthFt + roomLengthIn / 12

    if (roomWidth > minSeamRequirement) {
      setRoomHasSeam(true)
      setBlockquoteColor('has-background-danger-light')
    } else {
      setRoomHasSeam(false)
      setBlockquoteColor('has-background-success-light')
    }
  }, [roomWidthFt, roomWidthIn, roomLengthFt, roomLengthIn, rollWidth])

  return (
    <>
      <div className="has-text-centered">
        <section className="mb-4">
          <h2 className="is-size-6">Room Width</h2>
          <div className="columns is-mobile">
            <div className="column">
              <div className="field-group">
                <label className="label" htmlFor="roomWidthFt">
                  Feet
                </label>
                <input
                  name="roomWidthFt"
                  className="input is-size-4 has-text-centered"
                  type="number"
                  min="0"
                  max="150"
                  step={1}
                  value={roomWidthFt}
                  placeholder="12"
                  onChange={handleRoomWidthFtChange}
                />
              </div>
            </div>
            <div className="column">
              <div className="field-group">
                <label className="label" htmlFor="roomWidthIn">
                  Inches
                </label>
                <input
                  name="roomWidthIn"
                  className="input is-size-4 has-text-centered"
                  type="number"
                  min="0"
                  max="11"
                  step={1}
                  value={roomWidthIn}
                  placeholder="4"
                  onChange={handleRoomWidthInChange}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-4">
          <h2 className="is-size-6">Room Length</h2>
          <div className="columns is-mobile">
            <div className="column">
              <div className="field-group">
                <label className="label" htmlFor="roomLengthFt">
                  Feet
                </label>
                <input
                  name="roomLengthFt"
                  className="input is-size-4 has-text-centered"
                  type="number"
                  min="0"
                  max="150"
                  step={1}
                  value={roomLengthFt}
                  placeholder="13"
                  onChange={handleRoomLengthFtChange}
                />
              </div>
            </div>
            <div className="column">
              <div className="field-group">
                <label className="label" htmlFor="roomLengthIn">
                  Inches
                </label>
                <input
                  name="roomLengthIn"
                  className="input is-size-4 has-text-centered"
                  type="number"
                  min="0"
                  max="11"
                  step={1}
                  value={roomLengthIn}
                  placeholder="6"
                  onChange={handleRoomLengthInChange}
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="columns">
            <div className="column">
              <div className="content">
                <blockquote className={blockquoteColor}>
                  {roomHasSeam ? 'Bring a Seaming Iron!' : 'Its a Drop!'}
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="is-hidden">Change Roll Width</h2>
          <div className="column">
            <div className="field-group">
              <label className="label" htmlFor="forRollWidth" className="label">
                Change Roll Width
              </label>
              <select
                name="forRollWidth"
                value={rollWidth}
                onChange={handleRollWidthChange}
                className="input is-small has-text-centered is-size-4 has-text-centered"
              >
                <option value="12">{"12'"}</option>
                <option value="15">{"15'"}</option>
              </select>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default IsItADrop

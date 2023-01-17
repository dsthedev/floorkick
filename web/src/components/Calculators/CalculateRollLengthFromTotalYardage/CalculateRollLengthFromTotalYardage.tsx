import { useState } from 'react'

const CalculateRollLengthFromTotalYardage = () => {
  const [yardage, setYardage] = useState(0)
  const [rollWidth, setRollWidth] = useState(12)
  const [length, setLength] = useState(0)

  const handleYardageChange = (e) => {
    setYardage(e.target.value)
    setLength((e.target.value * 9) / rollWidth)
  }

  const handleRollWidthChange = (e) => {
    setRollWidth(parseInt(e.target.value))
    setLength((yardage * 9) / e.target.value)
  }

  return (
    <div>
      <header>
        <h4>Estimate Roll Length From Total Yardage</h4>
      </header>

      <section>
        <label className="label">
          Total Yardage
          <input
            className="input"
            type="number"
            value={yardage}
            onChange={handleYardageChange}
            placeholder="100"
          />
        </label>

        <label className="label">
          Roll Width
          <select
            value={rollWidth}
            onChange={handleRollWidthChange}
            className="input"
          >
            <option value="12">12'</option>
            <option value="15">15'</option>
          </select>
        </label>
      </section>

      <br />

      <h5>
        ~ Roll Length: {length}&apos; <small>(feet)</small>
      </h5>
    </div>
  )
}

export default CalculateRollLengthFromTotalYardage

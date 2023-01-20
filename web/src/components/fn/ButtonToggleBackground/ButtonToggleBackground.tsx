const ButtonToggleBackground = () => {
  return (
    <button onClick={() => {
      var bgClass = document.getElementById("svgbg").classList[0]

      if (bgClass === 'adventure') {
        document.getElementById("svgbg").className = 'forest'
      }
      if (bgClass === 'forest') {
        document.getElementById("svgbg").className = 'adventure'
      }
    }}>Toggle Background</button>
  )
}

export default ButtonToggleBackground

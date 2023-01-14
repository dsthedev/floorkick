import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <main>
        <h1>Floorkick</h1>
        <button onClick={() => {
          var bgClass = document.getElementById("svgbg").classList[0]

          if (bgClass === 'adventure') {
            document.getElementById("svgbg").className = 'forest'
          }
          if (bgClass === 'forest') {
            document.getElementById("svgbg").className = 'adventure'
          }
        }}>Toggle Background</button>
      </main>
    </>
  )
}

export default HomePage

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ResourcesPage = () => {
  return (
    <>
      <MetaTags title="Resources" description="Resources page" />
      <header className="columns">
        <h1 className="column title">Resources</h1>
      </header>

      <main className="columns">
        <section className="column">
          <h2>Flooring</h2>
          <div className="content">
            <ul>
              <li>
                <a
                  href="https://carpet-rug.org/"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  CRI - The Carpet and Rug Institute
                </a>
                <ul>
                  <li>
                    <a
                      href="http://cri104.info/"
                      target={'_blank'}
                      rel="noreferrer"
                    >
                      CRI 104 <br />
                      Commercial Carpet Installation Standard
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://cri105.info/"
                      target={'_blank'}
                      rel="noreferrer"
                    >
                      CRI 105 <br />
                      Residential Carpet Installation Standard
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="is-hidden-tablet">
              <hr />
            </div>
          </div>
        </section>
        <section className="column">
          <h2>Design</h2>
          <div className="content">
            <ul>
              <li>
                <a
                  href="https://bulma.io/documentation/"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  Bulma Docs
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}

export default ResourcesPage

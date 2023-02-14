type SimpleLayoutProps = {
  children?: React.ReactNode
}

const SimpleLayout = ({ children }: SimpleLayoutProps) => {
  return (
    <>
      <div id="svgbg" className={'flooring'}></div>

      <div className="container">
        <div className="section">{children}</div>
      </div>
    </>
  )
}

export default SimpleLayout

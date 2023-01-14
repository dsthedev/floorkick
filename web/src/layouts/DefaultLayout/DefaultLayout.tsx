type DefaultLayoutProps = {
  children?: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return <>
    <div id="svgbg" className="adventure"></div>
    {children}
  </>
}

export default DefaultLayout

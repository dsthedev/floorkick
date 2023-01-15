import { useAuth } from '@redwoodjs/auth'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { isAuthenticated } = useAuth()

  const determinedBackground = isAuthenticated ? 'forest' : 'adventure'

  return (
    <>
      <div id="svgbg" className={determinedBackground}></div>

      {children}
    </>
  )
}

export default DefaultLayout

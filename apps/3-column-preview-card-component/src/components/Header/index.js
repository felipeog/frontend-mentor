import m from 'mithril'

import './index.scss'

const Header = ({ children }) => ({
  view: () => <h1 className="Header">{children}</h1>,
})

export default Header

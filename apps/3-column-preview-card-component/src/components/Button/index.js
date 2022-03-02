import m from 'mithril'

import './index.scss'

const Button = ({ children }) => ({
  view: () => <button className="Button">{children}</button>,
})

export default Button

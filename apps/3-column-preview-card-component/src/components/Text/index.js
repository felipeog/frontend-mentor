import m from 'mithril'

import './index.scss'

const Text = ({ children }) => ({
  view: () => <p className="Text">{children}</p>,
})

export default Text

import m from 'mithril'

import * as Icons from './icons'
import './index.scss'

const Icon = ({ attrs: { icon, title } }) => ({
  view: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={title}
      role="img"
      viewBox="0 0 64 40"
      className="Icon"
    >
      {Icons[icon]}
    </svg>
  ),
})

export default Icon

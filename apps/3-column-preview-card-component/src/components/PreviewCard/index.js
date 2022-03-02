import m from 'mithril'

import Icon from '../Icon'
import Header from '../Header'
import Text from '../Text'
import Button from '../Button'
import './index.scss'

const PreviewCard = ({ attrs: { icon, header, text, className } }) => ({
  view: () => (
    <article className={`PreviewCard ${className}`}>
      <Icon icon={icon} title={header} />
      <Header>{header}</Header>
      <Text>{text}</Text>
      <Button>Learn more</Button>
    </article>
  ),
})

export default PreviewCard

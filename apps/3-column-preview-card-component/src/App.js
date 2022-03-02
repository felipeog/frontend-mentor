import m from 'mithril'

import PreviewCard from './components/PreviewCard'
import './App.scss'

const App = () => ({
  oncreate: (vnode) => {
    vnode.dom.classList.add('animate')

    vnode.dom.addEventListener('animationend', () => {
      vnode.dom.classList.remove('animate')
    })
  },
  view: () => {
    const cards = [
      {
        className: 'sedans',
        icon: 'sedans',
        header: 'Sedans',
        text:
          'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
      },
      {
        className: 'suvs',
        icon: 'suvs',
        header: 'SUVs',
        text:
          'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
      },
      {
        className: 'luxury',
        icon: 'luxury',
        header: 'Luxury',
        text:
          'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
      },
    ]

    return (
      <div className="App">
        <main className="container">
          {cards.map((card) => (
            <PreviewCard key={card.header} {...card} />
          ))}
        </main>
      </div>
    )
  },
})

export default App

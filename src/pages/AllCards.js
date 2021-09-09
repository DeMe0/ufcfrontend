import React from 'react'
import Card from '../components/card'

const AllCards = (props) => {
    return props.cards.map((card) => <Card card={card} key={card.id} />)
}

export default AllCards
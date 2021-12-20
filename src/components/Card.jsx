import React from 'react'
import '../static/style/Card.css'

function Card(props) {
    const { src, title, description, price } = props

    return (
        <div className='d-flex card'>
            <img className='card__img' src={src} />
            <div className="card__info">
                <h3>{title}</h3>
                <h6>{description}</h6>
            </div>
        </div>
    )
}

export default Card


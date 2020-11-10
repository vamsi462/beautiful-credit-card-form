import React from 'react'
import {TransitionGroup, SwitchTransition, CSSTransition } from 'react-transition-group'
import img from '../../images/card.jpeg' 
import './styles.scss'

const Card= () => {
    return (
        <div className="card-item">
            <div className="card-item__side">
                <div className="card-item__focus"/>
                    <div className="card-item__cover">
                        <img alt="bg" src={img} className="card-item__bg"/>
                    </div>
            </div>

        </div>
    )   
}


export default Card

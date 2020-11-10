import React from 'react'
import {TransitionGroup, SwitchTransition, CSSTransition } from 'react-transition-group'
import bgImg from '../../images/card.jpeg' 
import chip from '../../images/chip.png'
import type1 from '../../images/mastercard.png'
import type2 from '../../images/visa.png'
import './styles.scss'

const Card= () => {
    return (
      <div className='card-item'>
    {/**************************** front **********************************/}
        <div className='card-item__side -front'>
          <div className='card-item__focus' />
          <div className='card-item__cover'>
            <img alt='bg' src={bgImg} className='card-item__bg' />
          </div>
          <div>
            <div className='card-item__wrapper'>
              <img alt='chip' src={chip} className='card-item__chip' />
            </div>
            <div className='card-item__type'>
              <img alt='type' src={type1} className='card-item__typeImg' />
            </div>
          </div>

          <label>number</label>
          <div className='card-item__content'>
            <label>holder</label>
          </div>
          <div className='card-item__date'>
            <label>expires</label>
            <label>month</label>/<label>year</label>
          </div>
        </div>
        {/********************* back side ***************************/}
        <div className='card-item__side -back'>
          <div className='card-item__cover'>
            <img alt='bg' src={bgImg} />
          </div>
          <div className='card-item__band' />
                <div className="card-item__cvv">
                    <div className="card-item__cvvTitle">CVV</div>
                    <div className="card-item__cvvBand">
                        zoom effect
                    </div>
                    <div className="card-item__type">
                        <img alt="type2" src={type2}/>
                    </div>
                </div>
        </div>
      </div>
    );   
}


export default Card

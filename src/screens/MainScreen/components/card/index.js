import React, { useState, useEffect } from 'react'
import {TransitionGroup, SwitchTransition, CSSTransition } from 'react-transition-group'
import bgImg from '../../images/blackbg.jpg' 
import chip from '../../images/chip.png'
import type1 from '../../images/mastercard.png'
import type2 from '../../images/visa.png'
import './styles.scss'


const CARDS = {
  visa: '^4',
  amex: '^(34|37)',
  mastercard: '^5[1-5]',
  discover: '^6011',
  unionpay: '^62',
  troy: '^9792',
  diners: '^(30[0-5]|36)'
};

const Card = ({
    cardHolder,
    cardNumber,
    cardMonth,
    cardYear,
    cardCvv,
    isCardFlipped,
    currentFocusedElm,
    onCardElementClick,
    cardHolderRef
  }) => {
    
 const [style, setStyle] = useState(null);

  

    const outlineElementStyle = (element) => {
      return element ?
        {
          width: `${element.offsetWidth}px`,
          height: `${element.offsetHeight}px`,
          transform: `translateX(${element.offsetLeft}px) translateY(${element.offsetTop}px)`
        } :
        null;
    };


  useEffect(()=>{
    if(currentFocusedElm){
        const style =  outlineElementStyle(currentFocusedElm.current)
        setStyle(style)
    }
  },[currentFocusedElm])
  
  
  
  
  
  
  
  
  
  
  
  return (
      <div className={'card-item'+(isCardFlipped ? '-active':'')}>

        {/**************************** front **********************************/}
        <div className='card-item__side -front'>
         <div className={`card-item__focus ${currentFocusedElm ? `-active` : ``}`}
                    style={style}
          />
          <div className='card-item__cover'>
            <img alt='bg' src={bgImg} className='card-item__bg' />
          </div>
          <div>
            <div className='card-item__wrapper'>
              <div className='card-item__top'>
                <img alt='chip' src={chip} className='card-item__chip' />
              </div>
              <div className='card-item__type'>
                <img alt='type' src={type1} className='card-item__typeImg' />
              </div>

              <label>number</label>
              <div className='card-item__content'>
                <label
                 className = "card-item__info"
                 onClick={() => onCardElementClick('cardHolder')}
                            ref={cardHolderRef}>

                   <div className="card-item__holder">Card Holder</div>
                   <div className="card-item__name">
                 
                   </div>
                  </label>
              </div>
              <div className='card-item__date'>
                <label>expires</label>
                <label>month</label>
                /
                <label>year</label>
                
              </div>
            </div>
          </div>
        </div>
        {/********************* back side ***************************/}
         <div className='card-item__side -back'>
          <div className='card-item__cover'>
            <img alt='bg' src={bgImg} />
          </div>
          <div className='card-item__band' />
          <div className='card-item__cvv'>
            <div className='card-item__cvvTitle'>CVV</div>
            <div className='card-item__cvvBand'>zoom effect</div>
            <div className='card-item__type'>
              <img alt='type2' src={type2} />
            </div>
          </div>
        </div>
      </div>
    );   
}


export default Card

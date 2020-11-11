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
    cardHolderRef,
    cardDateRef
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
                ref={cardHolderRef}
                >

                   <div className="card-item__holder">Card Holder</div>
                   <div className="card-item__name">
                    <TransitionGroup
                        component="div"
                    >
                    {
                      cardHolder === 'FULL NAME'? 
                      (
                        <CSSTransition timeout={200}>
                          <div>FULL NAME</div>
                        </CSSTransition>
                      ):(
                        cardHolder 
                          .split('')
                          .map((val,index)=>(
                            <CSSTransition 
                                timeout={250}
                                 key={index}
                            >
                            <span className="card-item__nameItem">{val}</span>
                            </CSSTransition>
                          ))
                      )
                    }
                    </TransitionGroup>
                   </div>
                  </label>
              </div>
               <div
                      className="card-item__date"
                            onClick={() => onCardElementClick('cardDate')}
                            ref={cardDateRef}
                        >
                            <label className="card-item__dateTitle">
                                Expires
                            </label>
                            <label className="card-item__dateItem">
                                <SwitchTransition in-out>
                                    <CSSTransition
                                        classNames="slide-fade-up"
                                        timeout={200}
                                        key={cardMonth}
                                    >
                                        <span>
                                            {!cardMonth ? 'MM' : cardMonth}{' '}
                                        </span>
                                    </CSSTransition>
                                </SwitchTransition>
                            </label>
                            /
                            <label
                                htmlFor="cardYear"
                                className="card-item__dateItem"
                            >
                                <SwitchTransition out-in>
                                    <CSSTransition
                                        classNames="slide-fade-up"
                                        timeout={250}
                                        key={cardYear}
                                    >
                                        <span>
                                            {!cardYear
                                                ? 'YY'
                                                : cardYear
                                                      .toString()
                                                      .substr(-2)}
                                        </span>
                                    </CSSTransition>
                                </SwitchTransition>
                            </label>
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

/** @format */

import React, {useState} from "react";



const monthsArr = Array.from({length:12},(x,i)=>{
    const month = i+1
    return month<=9 ? '0'+month :month
})


function CForm({
  cardMonth,
  cardYear,
  onUpdateState,
  cardNumbeRef,
  cardHolderRef,
  cardDateRef,
  onCardInputFocus,
  children,
}) {
  const [cardNumber, setCardNumber] = useState("");

  const handleFormChange = e => {
    const {name, value} = e.target;
  };
  return (
    <div className='card-form'>
      <div className='card-list'></div>
      <div className='card-form__inner'>
        <div className='card-input'>
          <label className='card-input__label'>Card Number</label>
          <input
            type='tel'
            autoComplete='off'
            maxLength='19'
            className='card-input__input'
            value={cardNumber}
          />
        </div>
        <div className='card-input'>
          <label className='card-input__label'>Card Holder</label>
          <input
            type='text'
            autoComplete='off'
            className='card-input__input'
            ref={cardHolderRef}
            name='cardHolder'
            onChange={handleFormChange}
            onFocus={e => onCardInputFocus(e, "cardHolder")}
          />
        </div>
        <div className='card-form__row'>
          <div className='card-form__col'>
            <div className='card-form__group'>
              <label className='card-input__label'>Expiration Date</label>
              <select
                className='card-input__input -select'
                value={cardMonth}
                ref={cardDateRef}
                name='cardMonth'
                onChange={handleFormChange}
                onFocus={e => onCardInputFocus(e, "cardDate")}
              >
                <option value="" disabled>Month</option>
                {monthsArr.map((val, index) => (
                  <option key={index} value={val}>
                    {val}
                  </option>
                ))}
              </select>
              <select>
                <option>Year</option>
              </select>
            </div>
          </div>
          <div className='card-form__col -cvv'>
            <div className='card-input'>
              <label>CVV</label>
              <input
                type='tel'
                className='card-input__input'
                maxLength='4'
                autoComplete='off'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CForm;

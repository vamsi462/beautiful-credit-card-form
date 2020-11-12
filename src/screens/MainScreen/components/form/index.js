/** @format */

import React, { useState } from "react";

const monthsArr = Array.from({ length: 12 }, (x, i) => {
  const month = i + 1;
  return month <= 9 ? "0" + month : month;
});

const currentYear = new Date().getFullYear();
const yearsArr = Array.from({ length: 9 }, (y, i) => currentYear + i);

function CForm({
  cardMonth,
  cardYear,
  onUpdateState,
  cardNumberRef,
  cardHolderRef,
  cardDateRef,
  onCardInputFocus,
  cardCvv,
  children,
  cardNumber
}) {
  
  const handleFormChange = e => {
    const { name, value } = e.target;
    onUpdateState(name, value);
  };
  const onCvvFocus = event => {
    onUpdateState("isCardFlipped", true);
  };
  const onCvvBlur = event => {
    onUpdateState("isCardFlipped", false);
  };
  return (
    <div className='card-form'>
      <div className='card-list'>{children}</div>
      <div className='card-form__inner'>
        <div className='card-input'>
          <label htmlFor='cardNumber' className='card-input__label'>
            Card Number
          </label>
          <input
            type='tel'
            name='cardNumber'
            className='card-input__input'
            autoComplete='off'
            onChange={handleFormChange}
            maxLength='19'
            ref={cardNumberRef}
            onFocus={e => onCardInputFocus(e, "cardNumber")}
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
                <option value='' disabled>
                  Month
                </option>
                {monthsArr.map((val, index) => (
                  <option key={index} value={val}>
                    {val}
                  </option>
                ))}
              </select>
              <select
                className='card-input__input -select'
                value={cardYear}
                ref={cardDateRef}
                name='cardYear'
                onChange={handleFormChange}
                onFocus={e => onCardInputFocus(e, "cardDate")}
              >
                <option value='' disabled>
                  Year
                </option>

                {yearsArr.map((val, index) => (
                  <option key={index} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='card-form__col -cvv'>
            <div className='card-input'>
              <label className='card-input__label'> CVV </label>
              <input
                type='tel'
                className='card-input__input'
                maxLength='4'
                autoComplete='off'
                name='cardCvv'
                onChange={handleFormChange}
                onFocus={onCvvFocus}
                onBlur={onCvvBlur}
                ref={cardCvv}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CForm;

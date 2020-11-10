/** @format */

import React, { useState } from "react";

function CForm() {

  const [cardNumber,setCardNumber]= useState('')

  const handleFormChange =(e)=>{
    const {name,value} = e.target
    
        
  }
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
          <label className='card-input__label'> Card Holder</label>
          <input
            type='text'
            autoComplete='off'
            maxLength='19'
            className='card-input__input'
            value=''
            name='cardHolder'
            onChange={handleFormChange}
          />
        </div>
        <div className='card-form__row'>
          <div className='card-form__col'>
            <div className='card-form__group'>
              <label>Expiration Date</label>
              <select>
                <option>Month</option>
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

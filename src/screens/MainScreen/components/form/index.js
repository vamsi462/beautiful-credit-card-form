import React from 'react'
import Card from '../card'

function CForm() {
    return (
       <div className="card-form">
           <div className="card-list"></div>
            <div className="card-form__inner">
                <div className="card-input">
                    <label className="card-input__label">
                        Card Number
                    </label>
                </div>

            </div>
       </div>
    )
}

export default CForm

import React, { useState } from 'react'
import CForm from './components/form'
import Card from './components/card'

const initialState = {
  cardNumber:"#### #### #### ####",
  cardName:"FULL NAME",
  cardMonth:"",
  cardYear: '',
  cardCvv: '',
  isCardFlipped: false
}

const MainScreen = () => {
    const [state,setState] = useState(initialState)
    const [currentFocusedForm,setCurrentFocusedForm]= useState(null)

    return (
      <div>
        <Card />
        <CForm />
      </div>
    );
}

export default MainScreen

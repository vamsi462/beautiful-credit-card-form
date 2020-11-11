import React, { useState, useRef } from 'react'
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

    const updateStateValues = (keyName,value)=>{
      setState({
        ...state,
        [keyName]:value || initialState[keyName]
      })
    }

    //form input references used to focus on corresponding input fields
    let formFieldsRefObj = {
      cardNumber: useRef(),
      cardHolder: useRef(),
      cardDate: useRef(),
      cardCvv: useRef(),
    };

    let focusFormFieldByKey = (key)=>{
      formFieldsRefObj[key].current.focus();
    }

    return (
      <div>
        <Card />
        <CForm />
      </div>
    );
}

export default MainScreen

/** @format */

import React, {useState, useRef, useCallback} from "react";
import CForm from "./components/form";
import Card from "./components/card";

const initialState = {
  cardNumber: "#### #### #### ####",
  cardHolder: 'FULL NAME',
  cardMonth: "",
  cardYear: "",
  cardCvv: "",
  isCardFlipped: false,
};

const MainScreen = () => {
  const [state, setState] = useState(initialState);
  const [currentFocusedElm, setCurrentFocusedElm] = useState(null);

    const updateStateValues = useCallback(
      (keyName, value) => {
        setState({
          ...state,
          [keyName]: value || initialState[keyName]
        });
      },
      [state]
    );
  //form input references used to focus on corresponding input fields
  let formFieldsRefObj = {
    cardNumber: useRef(),
    cardHolder: useRef(),
    cardDate: useRef(),
    cardCvv: useRef(),
  };


  //focuses form filed based on the key 
  let focusFormFieldByKey = key => {
    formFieldsRefObj[key].current.focus();
  };
   // This are the references for the Card DIV elements.
   let cardElementsRef = {
     cardNumber: useRef(),
     cardHolder: useRef(),
     cardDate: useRef()
   };

  let onCardFormInputFocus = (_event, inputName)=>{
    const refByName = cardElementsRef[inputName];
    setCurrentFocusedElm(refByName);
  }

  return (
    <div className='wrapper'>
   
      <CForm
        cardMonth={state.cardMonth}
        cardYear={state.cardYear}
        onUpdateState={updateStateValues}
        cardNumberRef={formFieldsRefObj.cardNumber}
        cardHolderRef={formFieldsRefObj.cardHolder}
        cardDateRef={formFieldsRefObj.cardDate}
        onCardInputFocus={onCardFormInputFocus}
      >   <Card
        cardNumber={state.cardNumber}
        cardHolder={state.cardHolder}
        cardMonth={state.cardMonth}
        cardYear={state.cardYear}
        cardCvv={state.cardCvv}
        isCardFlipped={state.isCardFlipped}
        cardNumberRef={cardElementsRef.cardNumber}
        cardHolderRef={cardElementsRef.cardHolder}
        cardDateRef={cardElementsRef.cardDate}
        currentFocusedElm={currentFocusedElm}
        onCardElementClick={focusFormFieldByKey}
      /></CForm>
    </div>
  );
};

export default MainScreen;

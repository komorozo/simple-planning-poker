import { useState} from "react";
import React from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../lib/init-firebase';
const CreateNewUserPanel = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    // const tableColRef = collection(db, 'Tables');


    const handleSubmit = (e) => {
        e.preventDefault()
        if(!inputValue) {
            setShowErrorMessage(true)
            setErrorMessage('Please put you name')
            return
        } 
        const docRef =  addDoc(
            collection(db, "Tables", props.gameId, "CurentUsers"),
            {
              name: inputValue,
            }
          );
        // addDoc(tableColRef, { name: inputValue })
        //     .then((res) => {
        //         navigate(res.id);
        //     })
        //     .catch((err) => console.log(err));
    }
    const handleInputValue = (e) => {
        console.log(e.target.value)
        setInputValue(e.target.value)
    }
    return ( 
        <div className="new-user-panel">
            <form id="create-new-game-form" onSubmit={handleSubmit}>
                <label htmlFor="user-name">Put your name</label>
                {showErrorMessage && <span className='errorMsg'> {errorMessage}</span>}
                <input type='text' id='game-name' onChange={(e) => handleInputValue(e)} value={inputValue} className={showErrorMessage ? 'error' : null}></input>
                <button type='submit'>Join Game</button>
            </form>
        </div>
    );
}
 
export default CreateNewUserPanel;
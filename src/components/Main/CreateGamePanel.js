import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './CreateGamePanel.css';

const CreateGamePanel = () => {
    const [inputValue, setInputValue] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputValue)
        if(!inputValue) {
            setShowErrorMessage(true)
            setErrorMessage('Please put name of new game')
            return
        } else if (inputValue.length < 3) {
            setErrorMessage('Name of table sholud be at least 3 signs')
            setShowErrorMessage(true)
            return
        }
        navigate(inputValue)
    }
    const handleInputValue = (e) => {
        console.log(e.target.value)
        setInputValue(e.target.value)
    }
    return ( 
        <div className="new-game-panel">
            <form id="create-new-game-form" onSubmit={handleSubmit}>
                <label htmlFor="game-name">Put name of the room</label>
                {showErrorMessage && <span className='errorMsg'> {errorMessage}</span>}
                <input type='text' id='game-name' onChange={(e) => handleInputValue(e)} value={inputValue} className={showErrorMessage ? 'error' : null}></input>
                <button type='submit'>Create New Game</button>
            </form>
        </div>
     );
}
 
export default CreateGamePanel;
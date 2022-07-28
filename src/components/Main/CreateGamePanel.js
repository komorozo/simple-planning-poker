import { useState } from 'react';
import './CreateGamePanel.css';

const CreateGamePanel = () => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputValue)

    }
    const handleInputValue = (e) => {
        console.log(e.target.value)
        setInputValue(e.target.value)
    }
    return ( 
        <div className="new-game-panel">
            <form id="create-new-game-form" onSubmit={handleSubmit}>
                <label htmlFor="game-name">Put name of the room</label>
                <input type='text' id='game-name' onChange={(e) => handleInputValue(e)} value={inputValue}></input>
                <button type='submit'>Create New Game</button>
            </form>
        </div>
     );
}
 
export default CreateGamePanel;
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateGamePanel.css';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../lib/init-firebase';
import TableNameContext from '../../contexts/tableNameContext';

const CreateGamePanel = () => {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();
    const tableColRef = collection(db, 'Tables');
    const {setTableName} = useContext(TableNameContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTableName(inputValue);
        addDoc(tableColRef, { name: inputValue })
            .then((res) => {
                navigate(res.id);
            })
            .catch((err) => console.log(err));
    };
    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    };
    return (
        <div className='new-game-panel'>
            <form id='create-new-game-form' onSubmit={handleSubmit}>
                <label htmlFor='game-name'>Put name of the room</label>
                <input
                    type='text'
                    id='game-name'
                    onChange={(e) => handleInputValue(e)}
                    value={inputValue}
                ></input>
                <button type='submit'>Create New Game</button>
            </form>
        </div>
    );
};

export default CreateGamePanel;

import React, { useContext } from 'react';
import './GameRoom.css';
import TableNameContext from '../../contexts/tableNameContext';

const GameRoom = () => {
    const { tableName } = useContext(TableNameContext);
    return (
        <div className='game-table-container'>
            <div className='table-left'>
                <div className='table-top'> </div>
                <div className='table-center'> text</div>
                <div className='table-bottom'> </div>
            </div>
            <div className='table-middle'>
                <div className='table-top'> text</div>
                <div className='table-center table'> text</div>
                <div className='table-bottom'> text</div>
            </div>
            <div className='table-right'>
                <div className='table-top'> </div>
                <div className='table-center'> text</div>
                <div className='table-bottom'> </div>
            </div>
        </div>
    );
};

export default GameRoom;

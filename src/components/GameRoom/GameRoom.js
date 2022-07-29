import React, { useContext } from 'react';
import './GameRoom.css';
import TableNameContext from '../../contexts/tableNameContext';

const GameRoom = () => {
    const { tableName } = useContext(TableNameContext);
    return (
        <div className='game-table'>
            welcome to game room on table name: {tableName}
        </div>
    );
};

export default GameRoom;

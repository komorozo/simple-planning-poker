import React from 'react';
import { useParams } from 'react-router-dom';
import './GameRoom.css'

const GameRoom = () => {
    const {id} = useParams()
    return ( 
        <div className='game-table'>`welcome to game room on table name: {id}`</div>
     );
}
 
export default GameRoom;
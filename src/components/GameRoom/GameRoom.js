// import React, { useContext } from 'react';
import './GameRoom.css';
import { useParams } from 'react-router-dom'
// import TableNameContext from '../../contexts/tableNameContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../lib/init-firebase';
import { useState } from 'react';
import CreateNewUserPanel from '../Users/CreateNewUser';

const GameRoom = () => {
    const { id } = useParams();
    const [tableName, setTableName] = useState();

    const docRef = doc(db, "Tables", id);
    getDoc(docRef).then(
        res => setTableName(res.data().name)
    ).catch()

    return (
        <>
            <CreateNewUserPanel gameId={id}/>

            <div className='game-table-container'>
                <div className='table-left'>
                    <div className='table-top'> </div>
                    <div className='table-center'> text</div>
                    <div className='table-bottom'> </div>
                </div>
                <div className='table-middle'>
                    <div className='table-top'> text</div>
                    <div className='table-center table'> {tableName}</div>
                    <div className='table-bottom'> text</div>
                </div>
                <div className='table-right'>
                    <div className='table-top'> </div>
                    <div className='table-center'> text</div>
                    <div className='table-bottom'> </div>
                </div>
            </div></>
    );
};

export default GameRoom;

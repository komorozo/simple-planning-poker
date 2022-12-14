import './Main.css';
import CreateGamePanel from './CreateGamePanel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameRoom from '../GameRoom/GameRoom';

const Main = () => {
    return (
        <div className='main'>
            <Router>
                <Routes>
                    <Route exact path='/' element={<CreateGamePanel />}></Route>
                    <Route path='/:id' element={<GameRoom />}></Route>
                </Routes>
            </Router>
        </div>
    );
};

export default Main;

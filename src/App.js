import './App.css';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import { TableNameContextProvider } from '../src/contexts/tableNameContext';

function App() {
    return (
        <div className='App'>
            <Nav />
            <TableNameContextProvider>
                <Main />
            </TableNameContextProvider>
            <Footer />
        </div>
    );
}

export default App;

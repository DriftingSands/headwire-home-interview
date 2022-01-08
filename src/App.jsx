import './App.scss';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
return (
    <div className="App">
        <Navbar/>
        <Home/>
        <div style={{height: '200vh'}}>test</div>
    </div>
);
}

export default App;

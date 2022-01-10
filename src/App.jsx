import './App.scss';
import Footer from './components/Footer/Footer';
import GoToTopButton from './components/GoToTopButton/GoToTopButton';
import Home from './pages/Home/Home';

function App() {
return (
    <div className="App">
        <Home/>
        <Footer/>
        <GoToTopButton />
    </div>
);
}

export default App;

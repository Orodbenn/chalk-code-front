import './App.css';
import background from "./background.jpg"
import Sidebar from "./Components/Sidebar/Sidebar.js";
import Navbar from './Components/Navbar/Navbar.js';

function App() {
    localStorage.setItem('role', "Admin")
    console.log(localStorage)
    return (
        <div>
            <img id="background-image" src={background} alt=""/>
            <Navbar />
            <Sidebar />
            <div id="main-body-container"></div>
        </div>
    );
}

export default App;

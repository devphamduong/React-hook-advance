import reactLogo from '../../assets/react.svg';
import viteLogo from '../../assets/vite.svg';

const NavBar = (props) => {

    return (
        <div className="navbar-container">
            <header>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                <span>Vite + React</span>
            </header>
        </div>
    )
}

export default NavBar;
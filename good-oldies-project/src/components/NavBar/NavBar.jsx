import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


export const NavBar = () => {
    return (
        <>
        <header>
            <nav className="navbar navbar-expand-lg custom-navbar">
                <div className="container-fluid">
                    <Link className="navbar-brand custom-navbar nav-link" to="/">
                    <img src="../assets/Logo.png" alt="Logo" width="70" height="70" className="d-inline-block align-text-top"/></Link>
                </div>
                <nav className="navbar navbar-expand-lg custom-navbar">
                    <div className="container-fluid">
                        <Link className="navbar-brand custom-navbar nav-link" to="/">Home</Link>
                        <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link custom-navbar" to="/category/Rock">Rock</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link custom-navbar" to="/category/Jazz">Jazz</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link custom-navbar" to="/category/Pop">Pop</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link custom-navbar" to="/cart"><CartWidget /></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </nav>
        </header>
        </>
    )
}
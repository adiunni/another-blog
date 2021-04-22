
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
//import {MDBNavbar} from 'mdbreact'

function Navbar(){
    return (
        <div className="navbar navbar-dark bg-success navbar-expand-xl portfolio-navbar">
            <div className="container-fluid">
                <a className="text-white text-uppercase flex logo float-start font-weight-bold">Aditya's blog</a><button data-bs-toggle="collapse" className="navbar-toggler navbar-dark text-white" type="button" data-bs-target="#navbarNav"><span className="navbar-toggler-icon navbar-dark"></span></button>
                <div className='collapse navbar-collapse' id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item text-right"><a className="nav-link">A link</a></li>
                        <li className="nav-item text-right"><a className="nav-link">Another link</a></li>
                        <li className="nav-item text-right"><a className="nav-link">Third link</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
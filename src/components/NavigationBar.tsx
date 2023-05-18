import Bolt from "../assets/images/bolt-logo.png"


function NavigationBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">
                <img src={Bolt} width="75" height="45" alt="bolt logo" />
            </a>
            <div className="d-flex">
                <a className="btn text-white rounded-pill py-1 px-4 d-flex d-lg-none text-justify shadow">Log in</a>
                <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto w-50 justify-content-between">
                    <li className="nav-item active flex-fill">
                        <a className="nav-link" href="#">Ride <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item  flex-fill">
                        <a className="nav-link" href="#">Become a driver</a>
                    </li>
                    <li className="nav-item flex-fill">
                        <a className="nav-link" href="#">Fleet</a>
                    </li>
                    <li className="nav-item flex-fill">
                        <a className="nav-link" href="#">Business</a>
                    </li>
                    <li className="nav-item flex-fill">
                        <a className="nav-link" href="#">Scooters</a>
                    </li>
                    <li className="nav-item flex-fill">
                        <a className="nav-link" href="#">Drive</a>
                    </li>
                    <li className="nav-item flex-fill">
                        <a className="nav-link" href="#">Food</a>
                    </li>
                    <li className="nav-item flex-fill">
                        <a className="nav-link" href="#">Cities</a>
                    </li>
                </ul>
                <a className="btn text-white rounded-pill py-1 px-4 d-none d-lg-flex text-justify shadow">Log in</a>
            </div>

        </nav>
    )
}

export default NavigationBar
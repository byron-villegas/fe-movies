import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark mb-3">
          <div className="container-fluid">
          <a className="navbar-brand" href="#"><strong>Movies</strong></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#"><strong>HOME</strong></a>
                </li>
              </ul>
              <div className="d-flex">
                <i className="fa fa-search" aria-hidden="true" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" title="Buscar Productos"></i>
              </div>
            </div>
          </div>
        </nav>  
    );
}

export default Navbar;
const Nav = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="http://localhost:3000">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="http://localhost:3000">Home <span class="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="http://localhost:3000">Features</a>
                    <a className="nav-item nav-link" href="http://localhost:3000">Pricing</a>
                    <a className="nav-item nav-link disabled" href="http://localhost:3000">Disabled</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav

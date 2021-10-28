import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div>
            <nav>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/upload">Upload</Link>
                    </li>
                    <li>
                    <Link to="convert">Convert</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
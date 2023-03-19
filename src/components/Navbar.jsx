import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
import { GiCakeSlice } from "react-icons/gi"

export default function Navigation () {
    return (
        <Navbar bg="danger">
            <Container className="justify-content-start my-2 ms-5">
                <Link to="/" className="text-decoration-none text-white px-2"><FcHome className="mb-1"/>Home</Link>
                <Link to="/contact" className="text-decoration-none text-white px-2"><FcContacts className="mb-1"/>Contacto</Link>
            </Container>
            <Container className="justify-content-end me-5">
                <Link to="/" className="text-decoration-none text-white px-2 ms-"><GiCakeSlice className="mb-1"/>Happy Cake</Link>
            </Container>
        </Navbar>
    );
}
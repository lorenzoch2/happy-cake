import { Container } from "react-bootstrap";

const Home = () => {
    return (
        <Container className="text-center p-5">
            <h1>Bienvenido a <span className="fw-bold">Happy Cake</span></h1>
            <p>El lugar de los pasteles felices.</p>
            <p className="cake">🎂</p>
        </Container>
    )
}

export default Home;
import { Container } from "react-bootstrap";
import { useState } from "react";
import { Alert } from "react-bootstrap";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [alertMostrar, setAlertMostrar] = useState(false);
    const [alertType, setAlertType] = useState("success");
    const [alertMessage, setAlertMessage] = useState("");

    const enviarFormulario = (e) => {
        e.preventDefault();
        if (name === "" || email === "" || message === "") {
            setAlertMostrar(true);
            setAlertType("danger");
            setAlertMessage("Todos los campos son obligatorios");
            return;
        } else {
            setAlertMostrar(true);
            setAlertType("success");
            setAlertMessage("Mensaje enviado correctamente");
            setName("");
            setEmail("");
            setMessage("");
            return;
        }
    }

    const capturarName = (e) => {
        setName(e.target.value);
    }

    const capturarEmail = (e) => {
        setEmail(e.target.value);
    }

    const capturarMessage = (e) => {
        setMessage(e.target.value);
    }

    return (
        <Container className="text-center p-5">
            <h1>Cuéntanos, ¿en qué te podemos ayudar?</h1>
            <Alert show={alertMostrar} variant={alertType}>
                <Alert.Heading>{alertMessage}</Alert.Heading>
            </Alert>
            <form onSubmit={enviarFormulario}>
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" className="form-control" id="name" placeholder="Nombre" value={name} onChange={capturarName} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Email" value={email} onChange={capturarEmail} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensaje</label>
                    <textarea className="form-control" id="message" rows="5" value={message} onChange={capturarMessage}></textarea>
                </div>
                <button type="submit" className="btn btn-danger m-1">Enviar</button>
            </form>
        </Container>
    )
}

export default Contact;
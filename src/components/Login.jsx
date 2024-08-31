import { useState } from 'react'

const Login = () => {
    const [input, setInput] = useState("");

    const handleForm = (e) => {
        e.preventDefault();
        if (input.includes(' ') || input.trim() == '') { //validamos para que no se pueda registrar usuarios con espacios en blanco
            alert("Usuario inválido para registrarse");
            return;
        }
        alert("Usuario registrado correctamente");
        setInput('');
    }

    const handleInput = (e) => {
        const value = e.target.value;
        if (value.includes('o') || value.includes('O')) {
            alert("Por favor, ¡Nombres de usuario sin la letra o!");
            return;
        }
        setInput(value);
    };
    return (
        <>
            <form onSubmit={handleForm}>
                <label htmlFor="">Nombre de Usuario: </label>
                <input type="text" value={input} onChange={handleInput} />
                <button type='submit'>Registrarse</button>
                <p>{input}</p>
            </form>
        </>
    )
}


export default Login
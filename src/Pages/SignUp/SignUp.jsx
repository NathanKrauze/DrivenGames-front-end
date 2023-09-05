import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import styled from "styled-components"
import axios from "axios"
import LogoDrivenGames from "../../Assets/LogoDrivenGames.png"
export default function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const navigate = useNavigate();

    function signUp(e) {

        e.preventDefault();

        if (password !== confPassword) return alert("Password must be equal!");

        axios.post(`${import.meta.env.VITE_API_URL}/sign-up`, { name, email, password })
            .then(() => navigate("/"))
            .catch((err) => alert(err.message))

    }
    return (
        <SignUpContainer>
            <Form onSubmit={signUp}>
                <Img src={LogoDrivenGames} />
                <Input placeholder="Nome" type="text" value={name} onChange={e => setName(e.target.value)} required />
                <Input placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                <Input placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                <Input placeholder="Confirme a senha" type="password" value={confPassword} onChange={e => setConfPassword(e.target.value)} required />
                <Button>Cadastrar</Button>
            </Form>

            <Link to={"/home"}>
                <p> Já tem uma conta? Entre agora! </p>
            </Link>
        </SignUpContainer>
    )
}

const SignUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin-top: 40px;
    font-family: 'Rajdhani', sans-serif;
    color: white;
    text-decoration: none;
  }
`
const Form = styled.form`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        width: 50%;
        border-radius: 5px;
`

const Input = styled.input`
        font-size: 20px;
        width: calc(50% - 30px);
        border-radius: 5px;
        outline: none;
        border: 1px solid #ccc;
        padding: 15px;
        margin: 1px;
        font-family: 'Rajdhani', sans-serif;
            :focus {
                border: 2px solid #ffb6b6;
                margin: 0px;
            }

`
const Button = styled.button`

        outline: none;
        border: none;
        border-radius: 5px;
        background-color: #CA24B6;
        font-size: 20px;
        font-weight: 600;
        color: #fff;
        cursor: pointer;
        width: 50%;
        padding: 12px;
        font-family: 'Rajdhani', sans-serif;

`

const Img = styled.img`

        width: 200px;
        height: 200px;


`
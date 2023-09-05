import { styled } from "styled-components"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { useState, useContext, useRef, useEffect} from "react"
import LogoDrivenGames from "../../Assets/LogoDrivenGames.png"
import tokenContext from "../../contexts/TokenContext"


export default function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useContext(tokenContext);
    const navigate = useNavigate();
    const inputReference = useRef(null);

    
       const click = () => {
        inputReference.current.backgroundColor = "lightblue";
       }

    function handleToken(dbToken) {

        const newToken = dbToken;
        setToken(newToken);
        localStorage.setItem('token', newToken);
        navigate('/home');

        
    }

    function signIn(e) {

        e.preventDefault();

        axios.post(`${import.meta.env.VITE_API_URL}/sign-in`, { email, password })
            .then((res) => {
                handleToken(res.data)
            })
            .catch((err) => alert(err.message))

    }


    return (
        <SignInContainer>
            <Form onSubmit={signIn}>
                <Img src={LogoDrivenGames} />
                <Input placeholder="E-mail" type="email" ref={inputReference} onClick={click} value={email} onChange={e => setEmail(e.target.value)} required />
                <Input placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                <Button>Entrar</Button>
            </Form>

            <Link to={'/cadastro'}>
                <p> Primeira vez? Cadastre-se! </p>
            </Link>
        </SignInContainer>
    )
}

const SignInContainer = styled.section`
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
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { styled } from "styled-components"



export default function PayForm({ setStatus, pay }) {

    const navigate = useNavigate()

    const [form, setForm] = useState({ cardName: "", cardNumber: "", securityNumber: "", expirationDate: "" })

    function cancel() { 
        setStatus("abled")
    }

    function finishBuy(e) {
        e.preventDefault()

        const config = {
            headers: {
                Authorization: `Bearer "12fd56c6-ba57-45d0-b924-cb2c05d038ea"`
            }
        }

        const URL = axios.post(`${import.meta.env.VITE_API_URL}cart`, form)
            .then(() => {
                //alert("Muito Obrigado pela sua compra, o seu jogo está liberado aproveite-o!")
                //navigate('/home')
                console.log("OK")
            })
            .catch((erro) =>
                console.log("erro no catch")
            )

    }

    return (
        <Container>

            <PayContainer>
                <ion-icon name="close-outline" onClick={() => cancel()}></ion-icon>
                <p>{pay}</p>

                <form onSubmit={finishBuy}>
                    <input
                        type="text"
                        placeholder="   Nome impresso no cartão"
                        value={form.cardName}
                        onChange={(e) => setForm({ ...form, cardName: e.target.value })}
                        required
                    />
                    <input
                        type="text"
                        placeholder="   Digitos do cartão"
                        value={form.cardNumber}
                        onChange={(e) => setForm({ ...form, cardNumber: e.target.value })}
                        required
                    />

                    <SegurançaCartao>
                        <input
                            type="text"
                            placeholder="   Código de segurança"
                            value={form.securityNumber}
                            onChange={(e) => setForm({ ...form, securityNumber: e.target.value })}
                            required
                        />
                        <input
                            type="text"
                            placeholder="   Validade"
                            value={form.expirationDate}
                            onChange={(e) => setForm({ ...form, expirationDate: e.target.value })}
                            required
                        />
                    </SegurançaCartao>

                    <button type="submit" > ASSINAR</button>
                </form>

            </PayContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
`

const PayContainer = styled.div`
    
    width: 400px;
    height: 350px;

    
    position: absolute;

    background-color: #616161;


    ion-icon{
    
        width: 28px;
        height: 28px;

        left: 350px;

        margin-top: 10px;
        position: relative;

        border-radius: 5px;
        background-color: #e7e4e4;
        color:  black;
    }

    input{
    display: flex;
    width: 300px;
    height: 52px;

    border-radius: 8px;
    border: 1px solid #e7e4e4;
    background-color: #faf2f2;

    margin-bottom: 6px;
    }

    button{
        width: 305px;
        height: 52px;

        background-color: #F94097;
        border: 1px solid #F94097;
        border-radius: 8px;

        color: #FFFFFF;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        margin-top: 40px;
    }
`

const SegurançaCartao = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 30px;

    margin-right: 5px;
    input{
        width: 145px;
        margin-left: 5px;
    }
`

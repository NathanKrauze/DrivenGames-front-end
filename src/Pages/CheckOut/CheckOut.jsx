import { styled } from "styled-components"
import { useContext, useEffect, useState } from "react"
import PayForm from "./PayForm"
import axios from "axios"
import tokenContext from "../../contexts/TokenContext"
import { useNavigate } from "react-router-dom"

export default function CheckOut() {

    const [status, setStatus] = useState("abled")
    const [pay, setPay] = useState("")
    const [userBuy, setUserBuy] = useState([])
    const [token] = useContext(tokenContext)

    const navigate = useNavigate()

    function payForm(e) {

        setStatus("disabled")
        setPay(e)
    }

    useEffect(() => {

        if(!token) return navigate("/")

        const config = {
            headers: {
                authorization: `Bearer ${token}`
            }
        }

        axios.get(`${import.meta.env.VITE_API_URL}/cart`, config)
            .then((res) => setUserBuy(res.data))
            .catch((erro) => console.log(erro.error))
    }, [])

    function sumTotal() {
        const newSum = gamesSelected.map(game => sum + game.price);
        const newDiscount = gamesSelected.map(game => discount + (game.price * game.promotion));
        setSum(newSum.reduce((acc, cur) => acc + cur, 0));
        setDiscount(newDiscount.reduce((acc, cur) => acc + cur, 0));
        descontoSomado = setSum - setDiscount;
    }

    return (

        <>
            {
                status === "abled" ?
                    <Container>

                        <div className="containerPay">
                            <br />
                            <p>Escolha sua forma de pagamento:</p>

                            <ButtonContainer>

                                <button onClick={() => payForm("Cartão de Crédito")}> Cartão de Crédito</button>
                                <button onClick={() => payForm("Cartão de Débito")}> Cartão de Débito</button>

                            </ButtonContainer>
                        </div>

                        <div className="productInformation">
                            <br />
                            <p>RESUMO DO PEDIDO</p> <br />
                            <img src="https://www.esports.net/br/wp-content/uploads/sites/3/2022/08/codigo-gta-san-andreas.jpeg " /><br />
                            <p>GTA San Andres</p> <br />

                            <p className="prices">Preço: R$ 200,00</p>
                            <p className="prices">Desconto: R$ 45,00</p><br />
                            <p className="line"></p><br />
                            <p className="prices">Total: R$ 155,00</p>
                        </div>

                    </Container>

                    :

                    <Container>

                        <div className="containerPay">
                            <br />
                            <p>Escolha sua forma de pagamento:</p>

                            <ButtonContainer>

                                <button onClick={() => payForm("Cartão de Crédito")}> Cartão de Crédito</button>
                                <button onClick={() => payForm("Cartão de Débito")}> Cartão de Débito</button>

                            </ButtonContainer>

                            <PayForm
                                pay={pay}
                                setStatus={setStatus}
                            />

                        </div>
                       
                            <div className="productInformation">
                                <br />
                                <p>RESUMO DO PEDIDO</p> <br />



                                <img src="https://www.esports.net/br/wp-content/uploads/sites/3/2022/08/codigo-gta-san-andreas.jpeg " /><br />
                                <p>GTA San Andres</p> <br />

                                <p className="prices">Preço: R$ 200,00</p>
                                <p className="prices">Desconto: R$ 45,00</p><br />
                                <p className="line"></p><br />
                                <p className="prices">Total: R$ 155,00</p>

                            </div>
                        
                    </Container>


            }

        </>
    )
}
const Container = styled.div`

    display: flex;
    justify-content: space-between;
    
    margin: 0px auto;
    width: 900px;


    background-color:  #2A2A2A;

    p{
        color: white;
        text-align: center;
    }

   

    .productInformation{

        display: flex;
        flex-direction: column;
        
        width: 300px;
        height: 500px;

        background-color:  #616161;
        overflow-y: visible;
        
        
    }

    img{
        width: 250px;
        
        border-radius: 10px;

        margin: 0px auto;
    }

    .prices{
        display: flex;
        justify-content: flex-start;

        margin-left: 10px;
    }

    .line{
        width: 90%;
        display: flex;
        
        margin: 0px auto ;
        border: 1px solid #b8aeae;
        
    }

    .containerPay{

        display: flex;
        flex-direction: column;
        
        width: 600px;
        
    }
   
`
const ButtonContainer = styled.div`

    display: flex;
    justify-content: center;
    

    button{
        
        width:100px;
        height: 40px;

        margin: 30px 10px;

        text-align: center;

        color: #FFFFFF;
        background-color: #F94097;

        border-radius: 5px;
        border: 1px solid #F94097;

    }

    button:hover{
        width: 102px;
       
    }
`


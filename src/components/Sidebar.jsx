import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export default function Sidebar(props){

    const {gameselected, setgameselected} = props
    const navigate = useNavigate();
    console.log(gameselected)

    function checkOut(){

        const config = {
            headers:{
                authorization: `Bearer ${"teste"}`
            }
        }

        axios.post(`${import.meta.env.VITE_API_URL}/game-selected`, gameselected, config)
            .then(navigate("/cart"))
            .catch(err => alert(err.response.data))
    }

    function deleteGame(selected){
        alert(`clicou no ${selected.name}`)
        const arrayDelete = gameselected.filter( del => del.name !== selected.name)
        console.log(arrayDelete)
        setgameselected(arrayDelete)
    }


    return(
        <>
            <Lista> 
                {gameselected.length===0 ? 
                    <p>Não há itens no carrinho</p> 
                : 
                    <>
                        <ul>
                            {gameselected.map( selected => 
                                <li>
                                    <p>{selected.name} - {selected.price}</p>
                                    <button onClick={()=>deleteGame(selected)}>x</button>
                                </li>
                            )}
                        </ul>
                        <ButtonCart onClick={checkOut}>Ir para o carrinho</ButtonCart>
                    </>
                }
            </Lista>
        </>
    )
}

const Lista = styled.div`
    top: 0px;
    right: 0;
    width:300px;
    height: 100%;
    position: absolute;
    font-size: 25px;
    border-radius: 2px; 
    background-color: #2A2A2A;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    li{
        width: 280px;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        button{
            background-color: #F94097;
            border: none;
            border-radius: 2px;
            font-family: 'Rajdhani', sans-serif;
            font-size: 15px;
        }
    }
`
const ButtonCart = styled.button`
    width: 150px;
    height: 60px;
    margin-top: 5px;
    background-color: #F94097;
    border: none;
    border-radius: 2px;
    font-family: 'Rajdhani', sans-serif;
    font-size: 25px;
    text-align: center;
`
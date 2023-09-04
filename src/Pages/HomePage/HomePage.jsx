import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components"

export default function HomePage(){

    const games = ["fifa","fallguys","mario","lol","ff",]

    const [gameSelected, setGameSelected] = useState([])
    const navigate = useNavigate();

    function addGame(game){
        alert(`clicou no ${game}`)
        const arrayGameSelected = [...gameSelected,game]
        setGameSelected(arrayGameSelected)
       
    } console.log(gameSelected)
    return(
        <>
            <Sidebar>{!gameSelected && "Não há itens no carrinho" } </Sidebar>
            <ul>
                {games.map( games => <Lista onClick={()=>addGame(games)}>{games}</Lista>)}
                
            </ul>
        </>
    )
}

const Lista = styled.div`
    margin:100px;
    width:50px;
    height:50px;
    border: 2px solid black;
`
const Sidebar = styled.div`
    width:300px;
    height:300px;
    background-color: aqua;
`
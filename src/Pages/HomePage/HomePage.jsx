import styled from "styled-components"
import NavBar from "../../components/Navbar";
import Game from "../../components/Game";
import { useContext, useEffect } from "react";
import GamesContext from "../../contexts/GamesContext";
import tokenContext from "../../contexts/TokenContext";
import axios from "axios";

export default function HomePage() {

    const {games, setGames} = useContext(GamesContext);
    const {token} = useContext(tokenContext);
    //mudar para o token do context
    const config = {
        headers:{
            authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/games`, config)
            .then(res => setGames(res.data))
            .catch(err => alert(err.response.data))
    }, [])

    return (
        <>
            <NavBar />
            <ContentContainer>
                <GamesContainer>
                    <h1>Jogos</h1>
                    <ul>
                        {games.map(game => <Game game={game}/>)}
                    </ul>
                </GamesContainer>

            </ContentContainer>
        </>
    )
}

const ContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const GamesContainer = styled.div`
    padding: 0 40px;
    width: 100%;
    h1{
        font-size: 45px;
        padding-bottom: 5px;
    }
    ul{
        display: flex;
        flex-wrap: wrap;
        padding: 20px;
        border-top: 2px solid #2A2A2A;
    }
`;

const FilterContainer = styled.div``;

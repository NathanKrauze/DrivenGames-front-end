import styled from "styled-components"
import NavBar from "../../components/Navbar";
import Game from "../../components/Game";
import Sidebar from "../../components/Sidebar";
import { useContext, useEffect, useState } from "react";
import GamesContext from "../../contexts/GamesContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function HomePage() {

    //const {games, setGames} = useContext(GamesContext);
    const games = [
        {
          "_id": "64f5dca2e88c2abf31f57904",
          "name": "fortnite",
          "image": "https://cdn2.unrealengine.com/social-image-chapter4-s3-3840x2160-d35912cc25ad.jpg%E2%80%9D",
          "description": "Um jogo massivo de combate entre 100 jogadores da Epic Games que combina saque, criação, tiroteio e caos.",
          "categories": [
            "action",
            "battle royale"
          ],
          "price": 57.97,
          "havePromotion": true,
          "promotion": 0.45
        },
        {
          "_id": "64f5ece3e88c2abf31f57905",
          "name": "scape from tarkov",
          "image": "https://desapegogames.com.br/assets/site/imagens/anuncios/2023/03/18/5d263377af149a29186fdb10958d7a3f.jpg",
          "description": "Escape from Tarkov is a hardcore and realistic online first-person action RPG/Simulator with MMO features and a story-driven walkthrough.",
          "categories": [
            "action",
            "rpg"
          ],
          "price": 570.96,
          "havePromotion": true,
          "promotion": 0.7
        },
        {
          "_id": "64f5ecfce88c2abf31f57906",
          "name": "rocket league",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Rocket_League_coverart.jpg/640px-Rocket_League_coverart.jpg",
          "description": "Este é o Rocket League! Bem-vindo ao jogo de alta potência, estilo arcade de futebol e caos automobilístico!",
          "categories": [
            "sports"
          ],
          "price": 34.6,
          "havePromotion": false,
          "promotion": 0
        },
        {
          "_id": "64f5ed14e88c2abf31f57907",
          "name": "Counter Strike Global Offensive",
          "image": "https://s2-techtudo.glbimg.com/9hLtG2DbMA9l11iMODEnBHv94iU=/0x0:1200x603/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/i/b/ETfVe9TSWL7BL6NLQZYQ/1535723475188-fb-image.png",
          "description": "Counter-Strike: Global Offensive é um jogo online desenvolvido pela Valve Corporation e pela Hidden Path Entertainment.",
          "categories": [
            "action",
            "fps"
          ],
          "price": 45.99,
          "havePromotion": false,
          "promotion": 0
        },
        {
          "_id": "64f5ed24e88c2abf31f57908",
          "name": "Minecraft",
          "image": "https://s2-techtudo.glbimg.com/9hLtG2DbMA9l11iMODEnBHv94iU=/0x0:1200x603/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/i/b/ETfVe9TSWL7BL6NLQZYQ/1535723475188-fb-image.png",
          "description": "Minecraft é um jogo de construção, aventura e sobrevivência do gênero sandbox.",
          "categories": [
            "survival",
            "sandbox"
          ],
          "price": 77,
          "havePromotion": true,
          "promotion": 0.15
        }
      ]
    const [gameselected, setgameselected] = useState([])

    const navigate = useNavigate();

    //mudar para o token do context
    const config = {
        headers:{
            authorization: `Bearer ${"teste"}`
        }
    }

    //useEffect(() => {
    //    axios.get(`${import.meta.env.VITE_API_URL}/games`, config)
    //        .then(res => setGames(res.data))
    //        .catch(err => alert(err.response.data))
    //}, [])
    
    return (
        <>
            <NavBar />
            <ContentContainer>
                <GamesContainer>
                    <h1>Jogos</h1>
                    <ul>
                        {games.map(game => <Game game={game} gameselected={gameselected} setgameselected={setgameselected}/>)}
                    </ul>
                </GamesContainer>

            </ContentContainer>
            <Sidebar gameselected={gameselected} setgameselected={setgameselected} ></Sidebar>
            </>
    )
}

const ContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const GamesContainer = styled.div`
    padding: 0 40px;
    margin-right: 300px;
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
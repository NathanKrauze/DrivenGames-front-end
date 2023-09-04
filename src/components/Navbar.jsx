import { styled } from "styled-components";
import LogoDrivenGames from "../Assets/LogoDrivenGames.png"

export default function NavBar() {
    return (
        <NavBarContainer>
            <img src={LogoDrivenGames} />
            <div>
                <h1>LOJA</h1>
                <h1>CARRINHO</h1>
            </div>
        </NavBarContainer>
    )
}

const NavBarContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 8px 15px;
    background-color: #2A2A2A;
    margin-bottom: 35px;
    img{
        width: 25px;
        height: auto;
        margin-right: 10px;
    }
    div{
        display: flex;
        h1{
            margin-left: 20px;
            &:hover{
                cursor: pointer;
            }
        }
    }
`;
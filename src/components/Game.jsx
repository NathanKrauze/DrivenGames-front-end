import { styled } from "styled-components";

export default function Game({ game, gameselected, setgameselected }) {
    const { name, image, price, havePromotion, promotion } = game


    function addGame(game){

        const arrayGameSelected = [...gameselected,game]
        setgameselected(arrayGameSelected)

    } 
    //console.log(gameselected)
    return (
        <>
            <GameContainer onClick={()=>addGame(game)}>
                <img src={image} alt="imgJogo" />
                <TitleStyle>{name}</TitleStyle>
                {havePromotion ? (
                    <PriceContainer>
                        <h3>{promotion.toString().replace('0.', '')}%</h3>
                        <div>
                            <OldPriceStyle>R$ {price.toFixed(2).toString().replace('.', ',')}</OldPriceStyle>
                            <PriceStyle>R$ {(price * promotion).toFixed(2).toString().replace('.', ',')}</PriceStyle>
                        </div>
                    </PriceContainer>
                ) : <PriceStyle>R$ {price.toFixed(2).toString().replace('.', ',')}</PriceStyle>}
            </GameContainer>
        </>
    )
}

const GameContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 400px; 
    margin-right: 42px;
    img{
        width: 200px;
        height: 270px;
        object-fit: cover;
        border-radius: 5px;
    }
`;

const TitleStyle = styled.span`
    font-size: 24px;
    margin-top: 12px;
    margin-bottom: 16px;
`;


const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    h3{
        display:flex;
        justify-content: center;
        align-items: center;
        width: 55px;
        height: 28px;
        background-color: #F94097;
        border-radius: 5px;
        font-weight: 600;
    }  
`;

const OldPriceStyle = styled.h2`
    text-decoration: line-through;
    color: #757173;
    font-size: 20px;
`;

const PriceStyle = styled.h2`
    font-size: 20px;
`;

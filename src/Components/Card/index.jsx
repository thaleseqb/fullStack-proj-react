import styled from "styled-components"
import { BigTitle } from "../Title"

const CardContainer = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%;  
`

const Button = styled.button`
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;
    &:hover {
        cursor: pointer;
    }
`

const Description = styled.p`
    max-width: 300px;
`

const Subtitle = styled.h4`
    color: #002F52;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`

const Image = styled.img`
    width: 150px;
`

const Card = ({title, subtitle, description, image}) => {
    return (
        <CardContainer>
            <div>
                <BigTitle sizeFont="16px" color="#eb9b00" alignment="left">
                    Talvez você tenha interesse por
                </BigTitle>
                <Subtitle>{subtitle}</Subtitle>
                <Description>{description}</Description>
            </div>
            <div>
                <Image src={image} alt={`Card title: ${title}`} />
                <Button>Saiba mais</Button>
            </div>
        </CardContainer>
    )
}

export default Card;
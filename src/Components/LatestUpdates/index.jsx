import Card from "../Card"
import { BigTitle } from "../Title"
import {books} from "./DataLastUpdates"
import styled from "styled-components"
import bookImage from "../../assets/livro2.png"

const LastUpContainer = styled.section`
        background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const DivContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

const LastUpdates = () => {
    return (
        <LastUpContainer>
            <BigTitle 
                color="#EB9B00"
                sizeFont="36px"
                alignment="center"
            >
                ÚLTIMOS LANÇAMENTOS
            </BigTitle>
            <DivContainer>
                {books.map(book => {
                    return (
                        <img src={book.src} alt={`o id é ${book.id}`} />
                    )
                })}
            </DivContainer>
            <Card 
                image={bookImage}
                title={"Talvez você se interesse por"}
                subtitle={"Angular 11"}
                description={"Construindo uma aplicação integrada com a plataforma google"}
            />
        </LastUpContainer>
        
    )
}

export default LastUpdates;
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getBooks } from "../../Services/books";

const Input = styled.input`
    order: 1px solid #FFF;
    background: transparent;
    border: 1px solid #FFF;
    padding: 20px 140px;
    border-radius: 50px;
    width: 200px;
    color: #FFF;
    font-size: 16px;
    margin-bottom: 10px;

    &::placeholder {
        color: #FFF;
        font-size: 16px;
    }
`

const SectionContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`
const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const SubTitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const SearchResult = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

const Search = ({placeholder, type}) => {

    const [searchedBooks, setSearchedBooks] = useState([]);
    const [books, setBooks] = useState([]);

    useEffect(() => {fetchBooks()}, []);

    async function fetchBooks() {
        const apiBooks = await getBooks();
        setBooks(apiBooks);
    }

    return (
        <SectionContainer>
            <Title>Já sabe por onde começar ?</Title>
            <SubTitle>Encontre seu livro em nossa estante</SubTitle>
            <Input 
                placeholder={placeholder} 
                type={type}
                onBlur={(event) => {
                    const wroteText = event.target.value;

                    if (! (wroteText.trim() === "")) {
                        const searchResult = books.filter(book => {

                            return book.
                                nome.
                                toLocaleLowerCase().
                                includes(wroteText.toLocaleLowerCase())  
                        });
                        
                        setSearchedBooks(searchResult);
                    } else {
                        setSearchedBooks([]);
                    }
                }}
            />

            {searchedBooks.map(book => {
                return (
                    <SearchResult key={book.nome} >
                        <img src={book.src} alt={`livro cujo id é ${book.id}`} />
                        <p>{book.nome}</p>
                    </SearchResult>
                )
            })}
            
        </SectionContainer>
    )
}

export default Search;
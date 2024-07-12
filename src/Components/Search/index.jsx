import styled from "styled-components";

const Input = styled.input`
    border-radius: 4rem;
    border: none;
`

const Search = ({placeholder, type}) => {

    return (
        <section>
            <h2>Já sabe por onde começar ?</h2>
            <h3>Encontre seu livro em nossa estante</h3>
            <Input placeholder={placeholder} type={type} />
        </section>
    )
}

export default Search;
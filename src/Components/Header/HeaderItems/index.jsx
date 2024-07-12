import styled from "styled-components";

const Items = styled.li`
    min-width: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 0.45rem;
    font-size: 1rem;
    cursor: pointer;
`

const HeaderItems = ({name}) => {
    return (
        <Items>
            <p>{name}</p>
        </Items>
    )
}

export default HeaderItems;
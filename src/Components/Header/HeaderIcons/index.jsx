import styled from "styled-components";

const Icons = styled.li`
    display: flex;
    width: 1.5rem;
    margin-right: 2.5rem;
    cursor: pointer;
`

const HeaderIcons = ({image, description}) => {
    return (
        <Icons>
            <img src={image} alt={description} />
        </Icons>
    )
}

export default HeaderIcons;
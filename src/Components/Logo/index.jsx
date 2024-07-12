import logo from "../../assets/logo.svg"
import styled from "styled-components"

const LogoContainer = styled.div`
    display: flex;
    font-size: 1.8rem;
`

const Image = styled.img`
    margin-right: 0.75rem;
`

const Logo = () => {
    return (
        <LogoContainer>
            <Image src={logo} alt="logo da empresa" />
            <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    )
}

export default Logo;
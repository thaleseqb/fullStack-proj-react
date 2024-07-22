import Logo from "../Logo";
import HeaderItems from "./HeaderItems";
import bag from "../../assets/sacola.svg"
import profile from "../../assets/perfil.svg"
import HeaderIcons from "./HeaderIcons";
import styled from "styled-components";
import { Link } from "react-router-dom";


const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    background-color: #FFF;
`

const ListOptionsContainer = styled.ul`
    display: flex;
    align-items: center;
`

const IconsContainer = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Header = () => {

    const options = [
        "CATEGORIAS",
        "ESTANTE",
        "FAVORITOS"
    ]

    const icons = [
        {
            image: profile,
            description: "profile icon"
        },
        {
            image: bag,
            description: "shopping bag icon"
        }
    ]

    return (
        <HeaderContainer>
            <Link
                style={
                    {
                        textDecoration: "none",
                        color:"black"
                    }
                } 
                to="/" >
                <Logo/>
            </Link>

            <ListOptionsContainer>
                {options.map(option => {
                        return (
                            <HeaderItems key={option} name={option} />
                        )
                    })}
            </ListOptionsContainer>

            <IconsContainer>
                {icons.map(icon => {
                        return (
                            <HeaderIcons
                                key={icon.description} 
                                image={icon.image}
                                description={icon.description}
                            />
                        )
                    })}
            </IconsContainer>

        </HeaderContainer>
    )
}

export default Header;
import "./Header.css"
import Logo from "../Logo";
import HeaderItems from "./HeaderItems";
import bag from "../../assets/sacola.svg"
import profile from "../../assets/perfil.svg"
import HeaderIcons from "./HeaderIcons";

const Header = () => {

    const options = [
        "CATEGORIAS",
        "MINHA ESTANTE",
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
        <header className="header">
            <Logo/>
            <ul className="list">
                {options.map(option => {
                    return (
                        <HeaderItems name={option} />
                    )
                })}
            </ul>

            <ul className="icons" >
                {icons.map(icon => {
                    return (
                        <HeaderIcons 
                            image={icon.image}
                            description={icon.description}
                        />
                    )
                })}
            </ul>
        </header>
    )
}

export default Header;
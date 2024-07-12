import "./HeaderIcons.css"

const HeaderIcons = ({image, description}) => {
    return (
        <li className="icon">
            <img src={image} alt={description} />
        </li>
    )
}

export default HeaderIcons;
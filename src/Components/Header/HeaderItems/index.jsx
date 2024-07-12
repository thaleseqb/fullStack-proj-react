import "./HeaderItems.css"

const HeaderItems = ({name}) => {
    return (
        <li className="option">
            <p>{name}</p>
        </li>
    )
}

export default HeaderItems;
import "./Logo.css"
import logo from "../../assets/logo.svg"
import seclogo from "../../assets/livro.png"

const Logo = () => {
    return (
        <>
            <div className="logo">
                <img src={logo} alt="logo da empresa" />
                <p><strong>Alura</strong>Books</p>
            </div>
        </>
        
    )
}

export default Logo;
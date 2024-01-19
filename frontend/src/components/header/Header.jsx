import "./Header.css";
import Logo from "../../assets/logo.svg";
import Button from "@mui/material/Button";

function Header() {
    return (
        <div className="containerHeader">
            <img className="logo" src={Logo} alt="Logo pag" />
            <Button className="bton" sx={{ fontSize: 25 }} variant="contained">Mis Reservas</Button>
        </div>
    )
}

export default Header


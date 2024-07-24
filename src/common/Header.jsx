import "./Header.css"
import Button from "./Button";

function Header() {
    return (
        <div className = "header_maincont">
            <div className = "header_btnscont">
                <Button className = "header_btns">Games</Button>
                <Button className = "header_btns">Column</Button>
                <Button className = "header_btns">Calender</Button>
                <Button className = "header_btns">Contact</Button>
            </div>
            <div className = "header_menubtncont">
            </div>
        </div>
    );
  }
  
  export default Header;
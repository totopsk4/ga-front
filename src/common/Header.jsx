import "./Header.css"
import Button from "./Button";

function Header() {
    return (
        <div className = "header-maincont">
            <div className = "header-btnscont">
                <Button className = "header-btns">News</Button>
                <Button className = "header-btns">Column</Button>
                <Button className = "header-btns">Calender</Button>
                <Button className = "header-btns">Contact</Button>
            </div>
            <div className = "header-menubtncont">
            </div>
        </div>
    );
  }
  
  export default Header;
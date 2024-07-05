import "./Header.css"
import Button from "./Button";

function Header() {
    return (
        <div className = "header-maincont">
            <Button className = "header-btns">記事一覧</Button>
            <Button className = "header-btns">特集</Button>
            <Button className = "header-btns">掲載依頼</Button>
        </div>
    );
  }
  
  export default Header;
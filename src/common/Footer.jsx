import "./Footer.css"
import Button from "./Button";

function Footer() {
    return (
        <div className = "footer-maincont">
            <div className = "footer-linkscont">
                <Button className = "footer-links">お問い合わせ</Button>
                <Button className = "footer-links">このサイトについて</Button>
                <Button className = "footer-links">プライバシ・ポリシー</Button>
            </div>
        </div>
    );
  }
  
  export default Footer;
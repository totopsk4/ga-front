import "./Footer.css"
import Button from "./Button";

function Footer() {
    return (
        <div className = "footer_maincont">
            <div className = "footer_linkscont">
                <Button className = "footer_links">お問い合わせ</Button>
                <Button className = "footer_links">このサイトについて</Button>
                <Button className = "footer_links">プライバシ・ポリシー</Button>
            </div>
        </div>
    );
  }
  
  export default Footer;
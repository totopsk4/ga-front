import "./Tag.css"

import Button from "./Button";
import delbtnimg from "../icon/icon-delbtn.svg";

function Tag() {
    return (
        <div className = "tag_maincont">
                <Button className = "tag_delbtn">
                    <img className = "tag_delbtnimg" src = {delbtnimg} alt = "delete btn"></img>
                </Button>
                <p className = "tag_txt">
                    RPG
                </p>
        </div>
    );
  }
  
  export default Tag;
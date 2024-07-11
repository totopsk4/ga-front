import "./Tag.css"

import Button from "./Button";
import delbtnimg from "../icon/icon-delbtn.svg";

function Tag() {
    return (
        <div className = "tag-maincont">
                <Button className = "tag-delbtn">
                    <img className = "tag-delbtnimg" src = {delbtnimg} alt = "delete btn"></img>
                </Button>
                <p className = "tag-txt">
                    RPG
                </p>
        </div>
    );
  }
  
  export default Tag;
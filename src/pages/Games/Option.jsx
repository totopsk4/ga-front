import Button from "../../common/Button";
import Tag from "../../common/Tag";
import "./Option.css"
import addbtnimg from "../../icon/icon-delbtn.svg";

function Option() {
    return (
        <div className = "option-maincont">
            <div className = "option-genrecont">
                <div className = "option-genretxt">
                    genre
                </div>
                <p className = "option-genretags">
                    <Tag></Tag>
                </p>
                <Button className = "option-addbtn">
                    <img className = "option-addbtnimg" src = {addbtnimg}  alt = "add btn"></img>
                </Button>
            </div>
            <div className = "option-sortcont">
                <p className = "option-sorttxt">
                    sort
                </p>
                <div className = "option-sorttags">
                    <Tag></Tag>
                </div>
                <Button className = "option-addbtn">
                    <img className = "option-addbtnimg" src = {addbtnimg}  alt = "add btn"></img>
                </Button>
            </div>
        </div>
    );
  }
  
  export default Option;
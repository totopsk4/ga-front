import Button from "../../../common/Button";
import Tag from "../../../common/Tag"
import "./Option.css"
import addbtnimg from "../../../icon/icon-delbtn.svg";

function Option() {
    return (
        <div className = "option_maincont">
            <div className = "option_genrecont">
                <div className = "option_genretxt">
                    genre
                </div>
                <p className = "option_genretags">
                    <Tag></Tag>
                </p>
                <Button className = "option_addbtn">
                    <img className = "option_addbtnimg" src = {addbtnimg}  alt = "add btn"></img>
                </Button>
            </div>
            <div className = "option_sortcont">
                <p className = "option_sorttxt">
                    sort
                </p>
                <div className = "option_sorttags">
                    <Tag></Tag>
                </div>
                <Button className = "option_addbtn">
                    <img className = "option_addbtnimg" src = {addbtnimg}  alt = "add btn"></img>
                </Button>
            </div>
        </div>
    );
  }
  
  export default Option;
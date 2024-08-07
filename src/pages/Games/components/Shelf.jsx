import Button from "../../../common/Button";
import "./Shelf.css";

function Shelf() {
    return (
        <div className = "shelf-maincont">
            <div className = "shelf_gamecont">
                <Button className = "shelf_gamefront">
                    表
                    {/* <div className = "shelf_price">
                        ¥,1300
                    </div> */}
                </Button>
                {/* <Button className = "shelf_gameback">
                    裏
                </Button> */}
            </div>
        </div>
    );
  }
  
  export default Shelf;
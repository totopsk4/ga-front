import Button from "../../../common/Button";
import "./Shelf.css";

function Shelf() {
    return (
        <div className = "shelf-maincont">
            <Button id = "testA" className = "shelf_gamecontbtn">
                <div className = "shelf_gamethumnail">
                    <div className = "shelf_price">
                        ¥,1300
                    </div>
                </div>
            </Button>
            <Button id = "testA" className = "shelf_gamecontbtn">
                <div className = "shelf_gamethumnail">
                    <div className = "shelf_price">
                        ¥,1300
                    </div>
                </div>
            </Button>
            <Button id = "testA" className = "shelf_gamecontbtn">
                <div className = "shelf_gamethumnail">
                    <div className = "shelf_price">
                        ¥,1300
                    </div>
                </div>
            </Button>
            <Button id = "testA" className = "shelf_gamecontbtn">
                <div className = "shelf_gamethumnail">
                    <div className = "shelf_price">
                        ¥,1300
                    </div>
                </div>
            </Button>
        </div>
    );
  }
  
  export default Shelf;
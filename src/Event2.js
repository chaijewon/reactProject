import React,{Component} from "react";

class Event2 extends Component{
    constructor(props){
        super(props)
        this.clickHandler=this.clickHandler.bind(this)
    }
    clickHandler(){
        alert("Click 3")
    }

    render() {
        return (
            <div>
                <input type={"button"} value={"click"} onClick={this.clickHandler}/>
            </div>
        )
    }
}
export default Event2
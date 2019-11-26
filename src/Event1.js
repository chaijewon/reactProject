// Event 처리
import React,{Component} from 'react'

class Event1 extends Component{
    render(){
        /*const clickHandler=(e)=>{
            alert("버튼 클릭")
        }*/
        const clickHandler=function (e) {
            alert("버튼 클릭2")
        }
        return (
            <div>
                <input type={"button"} value={"클릭"} onClick={clickHandler}/>
            </div>
        )
    }
}
export default Event1;
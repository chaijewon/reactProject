import React,{Component} from 'react'
import {Table,Button,Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap'
import Draggable from "react-draggable";
/*
   return 에서 조건문 만들기
   <li>Applesauce</li>
    { !baby && <li>Pizza</li> }
    { age > 15 && <li>Brussels Sprouts</li> }
    { age > 20 && <li>Oysters</li> }
    { age > 25 && <li>Grappa</li> }

 */
class App extends Component{
    constructor(props) {
        super(props)
        this.state={
            modal:false,
            mu:{}
        }
        //this.titleClick=this.titleClick.bind(this)
        this.modelEnd=this.modelEnd.bind(this);
    }
    modelEnd(){
        //alert("종료")
        this.setState({modal:false})
    }
    titleClick(mu){
        this.setState({modal:true,mu:mu})
    }
  render(){
      const html=this.props.music.map((m)=>
        <tr>
            <td><img src={m.poster} width={"35"} height={"35"} className={"img-round"}/></td>
            <td>
                {
                    m.state==="상승" &&
                    <span style={{"color":"red"}}>▲ {m.id}</span>
                }
                {
                    m.state==="하강" &&
                    <span style={{"color":"blue"}}>▼ {m.id}</span>
                }
                {
                    m.state==="유지" &&
                    <span style={{"color":"gray"}}>- </span>
                }
            </td>
            <td onClick={this.titleClick.bind(this,m)}>{m.title}</td>
            <td>{m.singer}</td>
        </tr>
      )
     return (
         <div className={"container"}>
             <h1 className={"text-center"}>최신 차트 Top50</h1>
                 <Table dark>
                     <thead>
                     <tr>
                         <th></th>
                         <th></th>
                         <th>노래명</th>
                         <th>가수명</th>
                     </tr>
                     </thead>
                     <tbody>
                     {html}
                     </tbody>
                 </Table>
                 <ModalExam music={this.state.mu} mo={this.state.modal} onEnd={this.modelEnd}/>
         </div>
     )
  }
}
class ModalExam extends Component{

    render(){
        return (
            <Draggable
                axis={"both"}
                handle={".handle"}
                defaultPosition={{x:0,y:0}}
                position={null}
                grid={[25,25]}
                scale={1}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}
            >
            <Modal isOpen={this.props.mo}>
                <ModalHeader className={"handle"}>{this.props.music.title}</ModalHeader>
                <ModalBody>
                    <iframe src={"http://youtube.com/embed/"+this.props.music.key} width={"450"} height={"300"}/>
                </ModalBody>
                <ModalFooter>
                    <Button color={"primary"} onClick={this.props.onEnd}>확인</Button>
                </ModalFooter>
            </Modal>
            </Draggable>
        )
    }
}
export default App;

import React,{Component} from 'react'

class App2 extends Component{
    constructor(props){
        super(props)
        this.state={
            data:''
        }
        this.textChange=this.textChange.bind(this);
    }
    textChange(e)
    {
        this.setState({data:e.target.value})
    }

    render() {
        return (
           <div>
               <input type={"text"} size={"20"} onChange={this.textChange}/>
               <br/>
               <div>{this.state.data}</div>
           </div>
        )
    }
}

export default App2;
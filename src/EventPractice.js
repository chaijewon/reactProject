import React, {Component} from 'react';
/*
   [e.targer.name]를 한것은

    e.targer.name은 주소값의 객체가 아니기에

   ["username"]

 */
class EventPractice extends Component {

    constructor(){
        super();
        this.state = {
            message: '',
            username : '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }


    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    handleClick(){
        alert("이름:"+this.state.username + '\n메세지:'+this.state.message);
        this.setState({
            message:'',
            username:''
        });
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력"
                    value={this.state.message}
                    onChange={this.handleChange} />
                <br/>
                <input
                    type="text"
                    name="username"
                    placeholder="유저명"
                    value={this.state.username}
                    onChange={this.handleChange} />

                <button onClick={this.handleClick}>
                    state 확인
                </button>
            </div>
        )

    }
}
export default EventPractice;

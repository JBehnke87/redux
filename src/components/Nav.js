import { Component } from "react";
import {updateMessage} from "../actions/updateMessage";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
    


class Nav extends Component{

    state = {localMessage: "not set yet"}

    updateLocalWord = (e) => {
        this.setState({localMessage: e.target.value})
        console.log(this.state.localMessage)
    }

    sendToRedux = (e) => {
        e.preventDefault();
        this.props.updateMessage(this.state.localMessage)
    }

    
    render(){
        return(
            <div className='nav'>
                <h1>Phones</h1>
                 <h5>All state in this app is managed by Redux.</h5>
                 <input onChange={this.updateLocalWord}/>
                 <button onClick={this.sendToRedux}>submit</button>
            </div>
            )
    }
}


const mapDispatchToProps = dispatch => bindActionCreators({updateMessage}, dispatch)

export default connect(
    null,
    mapDispatchToProps
  )(Nav);
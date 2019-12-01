import React from "react";
import { connect } from 'react-redux';
import * as actionCreator from '../redux/actions/actions'
import logo from '../logo.svg'



class A extends React.Component{
    // state = {
    //     age: 21
    // }
    // handleClick(event, type){
    //     if (type === 'up'){
    //         this.setState({
    //             age: ++this.state.age
    //         })
            
    //     } else if (type ==='down'){
    //         this.setState({
    //             age: --this.state.age
    //         })
    //     }
    // }
    render(){
        let element = <div>hello</div>
        if (this.props.loading){
            element = <img src={logo} className="App-logo"/>
        } else {
            element = <ul>
            {
                this.props.history.map((event, index) => (
                    <li key={index} onClick={(e,key=index) => this.props.onDelItem(e, key)}>Age: {event.age}</li>
                ))
            }
        </ul>
        }
        return (
            <div className='App'>
                <div>Age: <span>{this.props.age}</span></div>
                <button onClick={this.props.onAgeUp}>Age UP</button>
                <button onClick={this.props.onAgeDown}>Age Down</button>
                <div>History</div>
                {element}
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return{
        age: store.reducer.age,
        history: store.reducer.history,
        loading: store.reducer.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onAgeUp: () => dispatch(actionCreator.ageUp(1)),
        onAgeDown: () => dispatch(actionCreator.ageDown(1)),
        onDelItem: (event, key) => dispatch(actionCreator.delItem(key))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(A);
import React from "react";
import { connect } from 'react-redux';



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
        return (
            <div className='App'>
                <div>Age: <span>{this.props.age}</span></div>
                <button onClick={this.props.onAgeUp}>Age UP</button>
                <button onClick={this.props.onAgeDown}>Age Down</button>
                <div>History</div>
                <ul>
                    {
                        this.props.history.map((event, index) => (
                            <li key={index} onClick={(e,key=index) => this.props.onDelItem(e, key)}>Age: {event.age}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return{
        age: store.age,
        history: store.history
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onAgeUp: () => dispatch({type: 'AGE_UP', value: 1}),
        onAgeDown: () => dispatch({type: 'AGE_DOWN', value: 1}),
        onDelItem: (event, key) => dispatch({type: 'DEL_ITEM', key})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(A);
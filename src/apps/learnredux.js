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
            <div>
                <div>Age: <span>{this.props.age}</span></div>
                <button onClick={(e) => this.props.onAgeUp(e)}>Age UP</button>
                <button onClick={(e) => this.props.onAgeDown(e)}>Age Down</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        age: state.age
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onAgeUp: () => dispatch({type: 'AGE_UP'}),
        onAgeDown: () => dispatch({type: 'AGE_DOWN'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(A);
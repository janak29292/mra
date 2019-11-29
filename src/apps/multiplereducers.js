import React from "react";
import { connect } from 'react-redux';


class Appl extends React.Component{
    render(){
        return(
        <div className="App">
            <div className="col">
                <div><span>A:</span>{this.props.a}</div>
                <button onClick={() => this.props.updateA(this.props.b)}>Update A</button>
            </div>
            <div className="col">
                <div><span>B:</span>{this.props.b}</div>
                <button onClick={() => this.props.updateB(this.props.a)}>Update B</button>
            </div>

        </div>)
    }
}

const mapStoreToProps = (store) => {
    return{
        a : store.reducerA.a,
        b : store.reducerB.b
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateA: (b) => dispatch({type: 'UPDATE_A', b}),
        updateB: (a) => dispatch({type: 'UPDATE_B', a})
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(Appl)
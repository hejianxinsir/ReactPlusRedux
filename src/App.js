import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		 return (
   		 <div className="App">
	 		 	你点击了<span>{this.props.n}</span>次
	 		 	<div>
	 		 		<button id="add1" onClick={()=>this.props.add1()}>+1</button>
	 		 		<button id="add2" onClick={()=>this.props.add2()}>+2</button>
	 		 		<button id="addIfOdd" onClick={()=>this.props.addIfOdd()}>单数加1</button>
	 		 		<button id="add1After2Sec">两秒后+1</button>
	 		 	</div>
   		 </div>
  	);
	}
}

function getPartialStore(state){	// 这里是个函数
 	return {
		n: state.n
	}
}

const actionCreator = {		// 这里要是一个对象！
	add1: ()=>{
		return {type: 'add', payload: 1}
	},
	add2: ()=>{
		return {type: 'add', payload: 2}
	},
	addIfOdd: ()=>{
		if(){
		
		}
		return {type: 'add', payload: 1}
	}
}

export default connect(getPartialStore, actionCreator)(App);

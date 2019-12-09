import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
	constructor(props){
		super(props)
	}

	add1(){
		this.props.store.dispatch({type: 'add', payload: 1})
	}
	add2(){
		this.props.store.dispatch({type: 'add', payload: 2})
	}
	addIfOdd(){
		if(this.props.store.getState() % 2 === 1){
			this.props.store.dispatch({type: 'add', payload: 1})
		}
	}
	add4(){
		let store = this.props.store
		setTimeout(function(){
			store.dispatch({type: 'add',payload: 1})
		},2000)
	}

	render(){
		 return (
   		 <div className="App">
	 		 	你点击了<span id="times">{this.props.value}</span>次
	 		 	<div>
	 		 		<button id="add1" onClick={this.add1.bind(this)}>+1</button>
	 		 		<button id="add2" onClick={this.add2.bind(this)}>+2</button>
	 		 		<button id="addIfOdd" onClick={this.addIfOdd.bind(this)}>单数加1</button>
	 		 		<button id="add1After2Sec" onClick={this.add4.bind(this)}>两秒后+1</button>
	 		 	</div>
   		 </div>
  	);
	
	}
 }

export default App;

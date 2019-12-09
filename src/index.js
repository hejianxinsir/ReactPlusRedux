import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';

const stateChanger = (state, action)=>{
	if(state === undefined){
		return 0
	}else{
		if(action.type === 'add'){
			var newState = state + action.payload
			return newState
		}else{
			return state
		}
	}

	return newState
}
const store = createStore(stateChanger)
store.subscribe(()=>{
	render()
})

render()

function add3(){
	if(store.getState() % 2 === 1){
		store.dispatch({type: 'add', payload: 1})
	}
}
function add4(){
	setTimeout(function(){
		store.dispatch({type: 'add', payload: 1})
	},2000)
}

function render(){
ReactDOM.render(<App value={store.getState()} store={store}  
/>, document.getElementById('root'));
}


serviceWorker.unregister();

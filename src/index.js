import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

const stateChanger = (state, action)=>{
	if(state === undefined){
		return {n: 0}
	}else{
		if(action.type === 'add'){
			var newState = {n: state.n + action.payload}
			return newState
		}else{
			return state
		}
	}
}

const store = createStore(stateChanger)

ReactDOM.render(
	<Provider store={store}> /*Provider 拿到 store ，然后传到 Provider 里面的东西，如App */
		<App />
	</Provider>,
	document.getElementById('root')

);

//store.subscribe(()=>{
//	render()
//})
//
//render()
//
//function add3(){
//	if(store.getState() % 2 === 1){
//		store.dispatch({type: 'add', payload: 1})
//	}
//}
//function add4(){
//	setTimeout(function(){
//		store.dispatch({type: 'add', payload: 1})
//	},2000)
//}




serviceWorker.unregister();

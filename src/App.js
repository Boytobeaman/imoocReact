import React from 'react';


class App extends React.Component{
	render(){
		const store = this.props.store;
		const num = store.getState();
		const addGun = this.props.addGun;
		const removeGun = this.props.removeGun;
		const addGunAsync = this.props.addGunAsync;
		return (
			<div>
				<h1>now we have {num} gun(s)</h1>
				<button onClick={()=>store.dispatch(addGun())}>apply for arm</button>
				<button onClick={()=>store.dispatch(removeGun())}>remove arm</button>
				<button onClick={()=>store.dispatch(addGunAsync())}>delay arm</button>
			</div>
		) 
	}
}

export default App
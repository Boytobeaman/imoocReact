import React from 'react';
import { connect } from 'react-redux';
import { addGun, removeGun, addGunAsync } from './index.redux';


// App = connect(mapStatetoProps, actionCreators)(App);
@connect(
	state =>({num: state}),
    { addGun, removeGun, addGunAsync }
    )
class App extends React.Component{
	render(){
		const num = this.props.num;

		return (
			<div>
				<h1>now we have {num} gun(s)</h1>
				<button onClick={this.props.addGun}>apply for arm</button>
				<button onClick={this.props.removeGun}>remove arm</button>
				<button onClick={this.props.addGunAsync}>delay arm</button>
			</div>
		)
	}
}


export default App
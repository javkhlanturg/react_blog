import React from 'react';

class Stateful extends React.Component{
		constructor() {
	super();

	this.state = {
	datas:
	[
	{
		"id":1,
		"name":"Foo",
		"age":"20"
	},
	{
		"id":2,
		"name":"Bar",
		"age":"30"
	},
	{
		"id":2,
		"name":"Bar",
		"age":"30"
	}
		
	]
	}


}
	
	render(){
		return(
		<div>
		<Header/>
		<table>
			<tbody>
			{this.state.datas.map((ppp, i) => <TableRow key = {i} data = {ppp} />)}
			</tbody>
		</table>
		</div>
		);

	}

}
class Header extends React.Component{
	render(){
	return(
	<div>
	<h1>header !!!!!</h1>
	</div>
	);
	}
}
class TableRow extends React.Component{
	render(){
	return (
	<tr>

		<td> {this.props.data.id}</td>
		<td>{this.props.data.name}</td>
		<td>{this.props.data.age}</td>
	</tr>
	);
	}
}



export default Stateful;
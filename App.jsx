import React from 'react';

class App extends React.Component {
   render() {
   	var i = 1;
   	var mystyle = {
   		fontsize: 100,
  		color: '#FF0000'

  		   		}
      return (
         <div>
         	<Header/>
         	<Content/>

            <h1 style = {mystyle} > Header</h1>
            <h2>Content</h2>
            <p data-myattribute = "somevalue">this is the content</p>
            <h2>{1+1}</h2>
            <h1>{ i == 1 ? 'true' : 'false'} </h1>


         </div>
      );
   }
}
class Header extends React.Component{
	render(){
	return(
		<div>
		<h1>Header</h1>
		<p> the header ...</p>
		</div>
	);
	}
}
class Content extends React.Component{
	render(){
	return(
		<div>
		<h2>Content vdvd</h2>
		<p> The contect text !!! </p>
		</div>
	);
	}
}
export default App;
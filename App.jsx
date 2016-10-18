import React from 'react';

class App extends React.Component{
  render() {
    return (
      <div>
      <Header/>

      </div>
    );
  }
}

class Header extends React.Component{
  render(){
    return(

    <div>

        <div className="navbar-header page-scroll">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                Menu <i className="fa fa-bars"></i>
            </button>
            <a className="navbar-brand" href="index.html">Start Bootstrap</a>
        </div>


        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <a href="index.html">Home</a>
                </li>
                <li>
                    <a href="about.html">About</a>
                </li>
                <li>
                    <a href="post.html">Sample Post</a>
                </li>
                <li>
                    <a href="contact.html">Contact</a>
                </li>
            </ul>
        </div>

    </div>

    );
  }
}

export default App;

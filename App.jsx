import React from 'react';

class App extends React.Component{
  render() {
    return (
      <div>
      <Header/>
      <Content/>
      <Footer/>
      </div>
    );
  }
}

class Header extends React.Component{
  render(){
    return(

    <div class="container-fluid">

        <div class="navbar-header page-scroll">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                Menu <i class="fa fa-bars"></i>
            </button>
            <a class="navbar-brand" href="index.html">Start Bootstrap</a>
        </div>


        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
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

    )
  }
}

export default App;

import './App.css';
import './Slider.css';
import React from 'react';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state= {apiResponse:""};
  }


  fetchData=  ()=> {
    setTimeout( ()=>{
    fetch('http://localhost:9000/testapi')
    .then(res=>res.text())
    .then(res=>this.setState({apiResponse:res}));
  },);
  }

  dontfetchData=  ()=> {
    setTimeout( ()=>{
      fetch('http://localhost:9000/users')
      .then(res=>res.text())
      .then(res=>this.setState({apiResponse:res}));
    },);

  }

  handleButtonClick= ()=> {
    this.fetchData();
  }
  
  handleButtonOut= ()=> {
    this.dontfetchData();
  }
  
  

  
  render(){
    return (
      <>
    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
    <div class="container-fluid" >
    <a class="navbar-brand" href="#">Welcome!!</a>
       <button style={{ backgroundColor: "black" , borderColor: "black"}}
    className="btn btn-primary"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasRight"
    aria-controls="offcanvasRight"
    >
     <span class="navbar-toggler-icon" style={{ backgroundColor: "black" }}></span>
  </button>
  <div
    className="offcanvas offcanvas-end"
    tabIndex={-1}
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div className="offcanvas-header">
      <h5 id="offcanvasRightLabel">Choose where you've to go...</h5>
      <button
        type="button"
        className="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div className="offcanvas-body" >
      <a href="#"><li style= {{padding: '5px', }} type='none'/> First</a>
       <a href='#'> <li style= {{padding: '5px', }} type='none' /> Second </a>
       <a href='#'><li style= {{padding: '5px', }} type='none'/> Third</a> 

    </div>
  </div>
</div>
</nav>

  <div className="blank">
    <h1 style={{ padding: 10 }}>Shrey Shah</h1>
  </div>
  <br />
  <p style= {{paddingLeft:10, margin: -4}}>
  <button onMouseOver={this.handleButtonClick
  } onMouseOut={this.handleButtonOut} style={{ color: 'red'}}>   Hover me once and then leave
    <p style={{ color: 'black'}}>{this.state.apiResponse}</p>
     
      </button>
  </p>
</>
  )
}
}


export default App;

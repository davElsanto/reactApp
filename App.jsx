import React from 'react';

class App extends React.Component{
  render(){
    var i = 2;
    return(
      <div>
        <h1>Header</h1>
        <h2>subheader</h2>
        <p data-myatribute="sometext">
          Hola mundo, osea jelou, deja el chou!!!
        </p>
        <p>{1+1}</p>
        <p>{ i== 1 ? 'igual a 1':'2' }</p>
      </div>
    );
  }
}

export default App;

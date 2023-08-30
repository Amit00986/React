import './App.css';

function App() {

  let name = 'react app'
  let className = 'App-header'
  console.log('App')
  return (
    <div className="App">
      <div className={className}>
        {/* <h1>Hello world</h1> */name}
        <Demo></Demo>
      </div>
    </div>
  );
}

function Demo() {
  return (
    <div className="App">
      <h1>Demo world</h1>
    </div>
  );
}

export default App;

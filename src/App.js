
import './App.css';
import Fras from './Fras';

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
      <form onSubmit >
        <label style={{color : "green" }}>name :</label>
        <input  type ="text"  placeholder="enter your name"  id="1" value=""/>
        <label style={{ color : "red"}}> last name :</label>
        <input type ="text" placeholder=" enter your last name" id="2" value=""/>

        <button style={{backgroundColor : "yellow"}}> submite </button>
      </form>
      </header>
      <Fras />
    </div>
  );
}

export default App;

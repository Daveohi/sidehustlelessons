
import './App.css';
import Card from './Components/Card';

function App() {

const fetchPost = async ()=> {
  const response = await fetch("http://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  console.log(response)
}

fetchPost()

  return (
    <div className="App">
      <h1> SideHustle </h1>

      <Card />

    </div>
  );
}

export default App;

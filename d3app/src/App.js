import logo from "./logo.svg";
import "./App.css";
import Barra from "./components/Barra";
let data = [];

(async function fetchData() {
  const response = await fetch(
    "https://gist.githubusercontent.com/josejbocanegra/d3b9e9775ec3a646603f49bc8d3fb90f/raw/3a39300c2a2ff8644a52e22228e900251ec5880a/population.json"
  );
  const responseJson = await response.json();
  const retreivedData = await responseJson;
  for (let i in retreivedData) {
    data.push(retreivedData[i]);
  }
})();

function App() {
  return (
    <div>
      <Barra
        data={data}
        width={1000}
        height={500}
        top={20}
        bottom={30}
        left={300}
        right={0}
      />
    </div>
  );
}

export default App;

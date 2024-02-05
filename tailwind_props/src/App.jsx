import "./App.css";
import Cards from "./components/Cards";

function App() {
  let myObj = {
    username: "Raviraj Kumar",
    age: 21
  }
    return (
        <>
            <h1 className="text-4xl font-bold text-black bg-sky-700 rounded mb-4">
                Twailwind & Props
        </h1>
        <Cards  someObj={myObj} />
        <Cards naam="Kuchh_bhi 2" someObj={myObj} />
        <Cards naam="chai_aur_code" someObj={myObj} />
        </>
    );
}

export default App;

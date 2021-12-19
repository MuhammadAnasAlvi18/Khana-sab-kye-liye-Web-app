import './App.css';
import {BrowserRouter as Router} from "react-router-dom"
import RouteConfig from "./Components/RouteConfig/RouteConfig"
function App() {
  return (
    <Router>
       <div className="my-app">
          <RouteConfig/>
       </div>

    </Router>
  );
}

export default App;

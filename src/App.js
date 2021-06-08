import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Logincomponent from "./components/Logincomponent";
import Homecomponent from "./components/Homecomponent";
import Createcomponent from "./Tablecomponents/Createcomponent";
import Resetpassword from "./Tablecomponents/Resetpassword";
import Profilecomponent from  "./components/Profilecomponent"
import Editcomponent from  "./components/Editcomponent"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homecomponent}></Route>
          <Route exact path="/login" component={Logincomponent}></Route>
          <Route exact path="/create" component={Createcomponent}></Route>
          <Route exact path="/reset" component={Resetpassword}></Route>
          <Route exact path="/profile" component={Profilecomponent}></Route>
          <Route exact path="/edit" component={Editcomponent}></Route>
        </Switch>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>
  );
}

export default App;

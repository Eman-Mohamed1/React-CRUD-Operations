import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import UsersList from "./ui/Screens/getUsers";
import CreateUser from "./ui/Screens/addUser";
import UpdateUser from "./ui/Screens/updateUser";
function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
                <Switch>
                  <Route  path={'/'} component={ UsersList} exact={true}/>
                  <Route  path={'/user'} component={ CreateUser}exact={true}/>
                  <Route  path={'/user/:id'} component={ UpdateUser}exact={true}/> 
                </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

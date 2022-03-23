

import {BrowserRouter as Router, Swicth, Route, Switch} from 'react-router-dom'
import axios from "axios";

import LoginPage from './pages/admin/LoginPage';
import AdminOrders from "./pages/admin/AdminOrders";
import AdminPage from "./pages/admin/AdminPage";
import AdminPrivateRoute from "./AdminPrivateRoute";
import AdminDashbord from "./pages/admin/AdminDashbord";


axios.defaults.baseURL=process.env.REACT_APP_BASE_URL;

axios.defaults.headers.post['Content-Type']='application/json';
axios.defaults.headers.post['Accept']='application/json';
axios.defaults.withCredentials=true;

axios.interceptors.request.use(function (config){
    const token=localStorage.getItem('token');
    config.headers.authorization=token ? 'Bearer '+token:'';
    return config;
});
function App() {
  return (
      <Router>
        <Switch>

          <Route exact path="/" component={LoginPage}/>
            <AdminPrivateRoute  path="/Dash" component={AdminDashbord}/>
            <AdminPrivateRoute  path="/Order" component={AdminOrders}/>
            <AdminPrivateRoute  path="/Prodct" component={AdminPage}/>

            <AdminPrivateRoute  path="/adminDashboard" component={AdminDashbord}/>



        </Switch>
      </Router>
  );
}

export default App;

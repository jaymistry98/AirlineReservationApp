import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';


import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import AdminPage from './components/AdminPage';
import UserPage from './components/UserPage';
import OwnerPage from './components/OwnerPage';
import UpdateOffer from './components/UpdateOffer';
import UpdateFlight from './components/UpdateFlight';
import ForgotPassword from './components/ForgotPassword';
import EndPage from './components/EndPage';
import UpdatePromotion from './components/UpdatePromotion';




function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/register" component={RegistrationPage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/userpage" component={UserPage}/>
            <Route path="/adminpage" component={AdminPage}/>
            <Route path="/ownerpage" component={OwnerPage}/>
            <Route path="/forgotpassword" component={ForgotPassword}/>
            <Route path="/offer/:id" component={UpdateOffer}/>
            <Route path="/flight/:id" component={UpdateFlight}/>
            <Route path="/promotion/:id" component={UpdatePromotion}/>
            <Route path="/endpage" component={EndPage}/>
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;

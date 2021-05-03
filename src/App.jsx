import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import MainLoader from "./components/layouts/partials/MainLoader";
//files
import "./App.css";

// layouts
import Dashboard from './components/layouts/Dashboard'

// context
import AuthState from "./context/auth/authState";
import UserState from "./context/user/userState";
import CountryState from './context/country/countryState'
import ServiceState from "./context/service/serviceState";

// pages :: lazyload
const Homepage = React.lazy(() => import("./components/pages/Home"));
const Contact = React.lazy(() => import("./components/pages/Contact"));
const SignIn = React.lazy(() => import("./components/auth/SignIn"));
const SignUp = React.lazy(() => import("./components/auth/SignUp"));
const AccountActivation = React.lazy(() => import("./components/auth/AccountActivation"));
const AuthMessage = React.lazy(() => import("./components/auth/AuthMessage"));
const ForgotPassword = React.lazy(() => import("./components/auth/ForgotPassword"));
const MailSent = React.lazy(() => import("./components/auth/MailSent"));
const ChangePassword = React.lazy(() => import("./components/auth/ChangePassword"));
const PasswordChanged = React.lazy(() => import("./components/auth/PasswordChanged"));
// const GoogleAuth = React.lazy(() => import("./components/auth/GoogleAuth"));
// const AccountVerification = React.lazy(() => import("./components/auth/AccountVerification"));

const Services= React.lazy(() => import("./components/dashboard/services/Services"));
const DashboardHome = React.lazy(() => import("./components/dashboard/Home"));
const Projects = React.lazy(() => import("./components/dashboard/projects/Projects"));

const CreateProject = React.lazy(() => import("./components/pages/CreateProject"));


const App = () => {
  return (
    
    <Router>
      <AuthState>
       
          <UserState>

          <CountryState>

              <ServiceState>

                <Suspense fallback={MainLoader()}>
              <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/signin' component={SignIn} />
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/success' component={AuthMessage} />
                <Route exact path='/mailSent' component={MailSent}/>
                <Route exact path='/forgotpassword' component={ForgotPassword}/>
                <Route exact path='/reset-password/:resetToken' component={ChangePassword}/>
                <Route exact path='/passwordchanged' component={PasswordChanged}/>
                {/* <Route exact path='/googleauth' component={GoogleAuth}/> */}
                {/* <Route exact path='/accountverify' component={AccountVerification}/> */}
                <Route exact path='/activate/:activateToken' component={AccountActivation}/>
                <Route exact path='/projects/create' component={Services}/>
                <Route exact path='/dashboard' component={Dashboard(DashboardHome, 'Dashboard')}/>
                <Route exact path='/dashboard/projects' component={Dashboard(Projects, 'My Projects')}/>
                
                <Route exact path='*' component={Homepage} />
              </Switch>
            </Suspense>
            
            </ServiceState>
        
        </CountryState>

        </UserState> 
        
      </AuthState>
    </Router>
   
          
  );
};

export default App;

import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import MainLoader from "./components/layouts/partials/MainLoader";
//files
import "./App.css";

// context
import AuthState from "./context/auth/authState";
import CountryState from './context/country/countryState'
import ServiceState from "./context/service/serviceState";

// pages :: lazyload
const Homepage = React.lazy(() => import("./components/pages/Home"));
const Contact = React.lazy(() => import("./components/pages/Contact"));
const SignIn = React.lazy(() => import("./components/auth/SignIn"));
const SignUp = React.lazy(() => import("./components/auth/SignUp"));
const AuthMessage = React.lazy(() => import("./components/auth/AuthMessage"));
const ForgotPassword = React.lazy(() => import("./components/auth/ForgotPassword"));
const MailSent = React.lazy(() => import("./components/auth/MailSent"));
const ChangePassword = React.lazy(() => import("./components/auth/ChangePassword"));
const AccountActivation = React.lazy(() => import("./components/auth/AccountActivation"));
const PasswordChanged = React.lazy(() => import("./components/auth/PasswordChanged"));
// const AccountVerification = React.lazy(() => import("./components/auth/AccountVerification"));

const Services= React.lazy(() => import("./components/pages/Services"));

const CreateProject = React.lazy(() => import("./components/pages/CreateProject"));


const App = () => {
  return (
    <Router>
    <AuthState>
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
          <Route exact path='/activate/:activateToken' component={AccountActivation}/>
          <Route exact path='/passwordchanged' component={PasswordChanged}/>
          {/* <Route exact path='/accountverify' component={AccountVerification}/> */}

          <Route exact path='/services' component={Services}/>
{/* 
           <Route exact path='/createproject' component={CreateProject}/>
           <Route exact path ='/userdash' component={Dashboard(UserDash)} /> */}
          <Route exact path='*' component={Homepage} />
        </Switch>
      </Suspense>  
      </ServiceState> 
      </CountryState>
      </AuthState>
    </Router>
          
  );
};

export default App;

import { Switch, Route } from "react-router-dom";
import CompanyDetail from "./CompanyDetail";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import SignUp from "./SignUp";
import Login from "./Login";
import { UserContext } from "./Context";
import { useContext } from "react";
import HomePage from "./Homepage";
import Profile from "./Profile";

const Routes = () => {



    return (
        <Switch>
            <Route exact path="/jobs">
                <JobList/>
            </Route>
            <Route exact path="/login">
                <Login/>
            </Route>
            <Route exact path="/signup">
                <SignUp/>
            </Route>  
            <Route exact path="/profile">
                <Profile/>
            </Route>          
            <Route exact path="/companies/:handle">
                <CompanyDetail/>
            </Route>
            <Route exact path="/companies">
                <CompanyList/>
            </Route>
            <Route exact path="/">
                <HomePage/>
            </Route>
        </Switch>
    )
};

export default Routes;
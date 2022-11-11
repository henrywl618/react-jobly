import { Switch, Route } from "react-router-dom";
import CompanyDetail from "./CompanyDetail";
import CompanyList from "./CompanyList";
import JobList from "./JobList";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/jobs">
                <JobList/>
            </Route>
            <Route exact path="/login">

            </Route>
            <Route exact path="/signup">

            </Route>  
            <Route exact path="/profile">

            </Route>          
            <Route exact path="/companies/:handle">
                <CompanyDetail/>
            </Route>
            <Route exact path="/companies">
                <CompanyList/>
            </Route>
            <Route exact path="/">
            <h1>HomePage</h1>
            </Route>
        </Switch>
    )
};

export default Routes;
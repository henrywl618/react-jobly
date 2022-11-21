import { Container } from "reactstrap";
import CompanyCard from "./CompanyCard";
import { JoblyApi } from "./api";
import { useContext, useEffect, useState } from "react";
import { useForm } from "./hooks";
import JobCard from "./JobCard";
import { UserContext } from "./Context";
import { useHistory } from "react-router-dom";

const JobList = () => {

    const { user } = useContext(UserContext);
    const history = useHistory();

    const updateJobs = async (searchTerms) => {
        let newJobs = await JoblyApi.getJobs(searchTerms);
        setJobs(newJobs);
    };

    const [ jobs, setJobs ] = useState([]);
    const { formData, handleSubmit, handleChange } = useForm(updateJobs,{ title:"" });

    useEffect( () => {
        //redirect user if they are not logged in
        if(!user) history.push("/")
        updateJobs();
    }, [] );

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <input name="title" placeholder="Search by title" value={formData.title} onChange={handleChange}></input>
                <button type="submit">Submit</button>
            </form>
            {jobs.length === 0 ? <p>Sorry, no results were found!</p> : null}
            {jobs.map(job => <JobCard job={job}/>)}
        </Container>
    )
};

export default JobList;
import { Container } from "reactstrap";
import CompanyCard from "./CompanyCard";
import { JoblyApi } from "./api";
import { useEffect, useState } from "react";
import { useForm } from "./hooks";
import JobCard from "./JobCard";

const JobList = () => {

    const updateJobs = async (searchTerms) => {
        let newJobs = await JoblyApi.getJobs(searchTerms);
        setJobs(newJobs);
    };

    const [ jobs, setJobs ] = useState([]);
    const { formData, handleSubmit, handleChange } = useForm(updateJobs,{ title:"" });

    useEffect( () => {
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
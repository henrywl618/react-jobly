import { Container } from "reactstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { JoblyApi } from "./api";
import JobCard from "./JobCard";


const CompanyDetail = () => {

    const { handle } = useParams();
    const [ company, setCompany ] = useState({});

    useEffect(() => {
        const fetchCompany = async (handle) => {
            const newCompany = await JoblyApi.getCompany(handle)
            setCompany(newCompany);
        };
        fetchCompany(handle);
    },[]);

    return(
        <Container>
            <h1>{company?.name}</h1>
            <p>{company.description}</p>
            <h4> Jobs </h4>
            {company.jobs?.map( job => <JobCard job={job}/>)}
        </Container>
    )
};

export default CompanyDetail;
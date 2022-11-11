import { Container } from "reactstrap";
import CompanyCard from "./CompanyCard";
import { JoblyApi } from "./api";
import { useEffect, useState } from "react";
import { useForm } from "./hooks";

const CompanyList = () => {

    const updateCompanies = async (searchTerms) => {
        let newCompanies = await JoblyApi.getCompanies(searchTerms);
        setCompanies(newCompanies);
    };

    const [ companies, setCompanies ] = useState([]);
    const { formData, handleSubmit, handleChange } = useForm(updateCompanies,{ name:"" });

    useEffect( () => {
        updateCompanies();
    }, [] );

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Search by name" value={formData.name} onChange={handleChange}></input>
                <button type="submit">Submit</button>
            </form>
            {companies.length === 0 ? <p>Sorry, no results were found!</p> : null}
            {companies.map(company => <CompanyCard company={company}/>)}
        </Container>
    )
};

export default CompanyList;
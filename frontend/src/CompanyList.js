import { Container } from "reactstrap";
import CompanyCard from "./CompanyCard";
import { JoblyApi } from "./api";
import { useContext, useEffect, useState } from "react";
import { useForm } from "./hooks";
import { UserContext } from "./Context";
import { useHistory } from "react-router-dom";

const CompanyList = () => {

    const {user} = useContext(UserContext);
    const history = useHistory();

    const updateCompanies = async (searchTerms) => {
        let newCompanies = await JoblyApi.getCompanies(searchTerms);
        setCompanies(newCompanies);
    };

    const [ companies, setCompanies ] = useState([]);
    const { formData, handleSubmit, handleChange } = useForm(updateCompanies,{ name:"" });

    useEffect( () => {
        //redirect user if they are not logged in
        if(!user) history.push("/");
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
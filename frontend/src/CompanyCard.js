import { Card, CardBody, CardHeader } from "reactstrap";
import { Link } from "react-router-dom";
import "./CompanyCard.css";

//{ handle, name, description, numEmployees, logoUrl }

const CompanyCard = ( {company: {name: companyName, description, logoUrl, handle}} ) => {
    return (
        <Link to={`/companies/${handle}`} className="company-card-link" key={handle}>
            <Card className="text-dark">
                <CardHeader>{companyName} <img src={logoUrl} className="float-right ml-5"></img></CardHeader>
                <CardBody>
                    <p>{description}</p>
                </CardBody>
            </Card>
        </Link>
    )
};

export default CompanyCard;
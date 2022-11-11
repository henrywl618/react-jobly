import { Card, CardBody, CardHeader } from "reactstrap";

const JobCard = ( { job:{ id, title, salary, equity, companyName } })=> {
    return (
        <Card key={id}>
            <CardHeader>{title}</CardHeader>
            <CardBody>
                <p>{`Salary: ${salary}`}</p>
                {companyName ? <p>{`Company: ${companyName}`}</p>: null}
                <p>{`Equity: ${equity === null ? "" : equity}`}</p>
            </CardBody>
        </Card>
    )
};

export default JobCard;
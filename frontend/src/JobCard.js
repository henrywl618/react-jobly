import { useContext } from "react";
import { Button, Card, CardBody, CardFooter, CardHeader } from "reactstrap";
import { JoblyApi } from "./api";
import { UserContext } from "./Context";

const JobCard = ( { job:{ id, title, salary, equity, companyName } })=> {

    const {user, application, setApplication} = useContext(UserContext)

    const handleClick = async ()=> {
        let res = await JoblyApi.apply(id, user.username);
        setApplication( application => [...application, res.applied]);
    };

    return (
        <Card key={id}>
            <CardHeader>{title}</CardHeader>
            <CardBody>
                <p>{`Salary: ${salary}`}</p>
                {companyName ? <p>{`Company: ${companyName}`}</p>: null}
                <p>{`Equity: ${equity === null ? "" : equity}`}</p>
            </CardBody>
            <CardFooter>
                {application.includes(id) 
                    ? <Button className="bg-primary disabled">Applied</Button>
                    : <Button className="bg-primary" onClick={handleClick}>Apply</Button>}
            </CardFooter>
        </Card>
    )
};

export default JobCard;
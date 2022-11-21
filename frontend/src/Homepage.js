import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";
import { UserContext } from "./Context";

const HomePage = () => {
    const {user} = useContext(UserContext);
    return(
        <Container>
            <h1 className="fw-bold my-4">Jobly</h1>
            <p> All the jobs in one, convenient place.</p>
            {
                user ?
                <p>Welcome back {user}!</p>
                :
                <div>
                    <Link to="/login">
                        <Button className="mx-2">Login</Button>
                    </Link>
                    <Link to="/signup">
                        <Button className="mx-2">Signup</Button>
                    </Link>
                </div>
            }


        </Container>
    )
};

export default HomePage;
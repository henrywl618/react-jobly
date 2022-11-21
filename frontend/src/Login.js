import { useForm } from "./hooks";
import { JoblyApi } from "./api";
import { Button, Card, CardBody, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { UserContext } from "./Context";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

//{ username, password, firstName, lastName, email }
const Login = () => {
    const {login} = useContext(UserContext);
    const initialData = { username:"", password:"" };
    const history = useHistory();

    const handleLogin = (loginInfo) => {
        login(loginInfo);
        history.push("/");
    };

    const {formData, handleChange, handleSubmit} = useForm(handleLogin, initialData)

    return (
        <Container className="col-2">
            <h1>Login</h1>
            <Card>
                <CardBody>
                    <Form onSubmit={handleSubmit} className="m-1">
                        <FormGroup>
                            <Label for="username" className="fw-bold">Username</Label>
                            <Input 
                                onChange={handleChange}
                                id="username"
                                name="username"
                                type="text"
                                value={formData.username}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password" className="fw-bold">Password</Label>
                            <Input 
                                onChange={handleChange}
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}/>
                        </FormGroup>
                        <Button className="">Submit</Button>
                    </Form>
                </CardBody>
            </Card>
        </Container>
    )
};

export default Login;
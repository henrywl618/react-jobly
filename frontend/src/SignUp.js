import { useForm } from "./hooks";
import { JoblyApi } from "./api";
import { UserContext } from "./Context";
import { Form, FormGroup, Input, Label, Container, CardBody, Card, Button } from "reactstrap";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

//{ username, password, firstName, lastName, email }
const SignUp = ()=>{
    const {login} = useContext(UserContext);
    const initialData = { username:"", password:"", firstName:"", lastName:"", email:""  };
    const history = useHistory();
    const registerAndUpdateUser = async (formData) => {
        try{
            await JoblyApi.registerUser(formData);
            login(formData);
            history.push("/");
        } catch (err) {
            console.log(err)
        }
    };
    const {formData, handleChange, handleSubmit} = useForm(registerAndUpdateUser, initialData)

    return (
        <Container className="col-3">
            <h1>Signup</h1>
            <Card>
                <CardBody>
                    <Form onSubmit={handleSubmit} className="mx-1">
                        <FormGroup>
                            <Label for="firstName" className="fw-bold">First Name</Label>
                            <Input 
                                onChange={handleChange}
                                id="firstName"
                                name="firstName"
                                type="text"
                                className="form-control"
                                value={formData.firstName}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="lastName" className="fw-bold">Last Name</Label>
                            <Input 
                                onChange={handleChange}
                                id="lastName"
                                name="lastName"
                                type="text"
                                value={formData.lastName}/>
                        </FormGroup>
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
                        <FormGroup>
                            <Label for="email" className="fw-bold">Email</Label>
                            <Input 
                                onChange={handleChange}
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}/>
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </CardBody>
            </Card>

        </Container>
    )
};

export default SignUp;
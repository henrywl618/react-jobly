import { useContext, useEffect } from "react";
import { JoblyApi } from "./api";
import { UserContext } from "./Context";
import { useForm } from "./hooks";
import { Card, CardBody, Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import { useHistory } from "react-router-dom";

const Profile = () => {
    const { user } = useContext(UserContext);
    const history = useHistory();
    const updateUser = async (userInfo) => {
        let user = await JoblyApi.updateUser(userInfo);
        history.push("/");
    };
    const { formData, setFormData, handleSubmit, handleChange } = useForm(updateUser, {});

    useEffect( () => {
        if(!user) history.push("/");
        const getUserInfo = async (user) => {
            const userInfo = await JoblyApi.getUser(user.username);
            const {username, firstName, lastName, email} = userInfo;
            setFormData({username, firstName, lastName, email, password:""});
        }
        getUserInfo(user);
    },[user]);

    return (
        <Container className="col-4">
            <h1>Profile</h1>
            <Card>
                <CardBody>
                    <Form onSubmit={handleSubmit} className="mx-1">
                        <FormGroup>
                            <Label className="fw-bold">Username</Label>
                            <p>{formData.username}</p>
                        </FormGroup>
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
                            <Label for="email" className="fw-bold">Email</Label>
                            <Input 
                                onChange={handleChange}
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password" className="fw-bold">Confirm password to make changes:</Label>
                            <Input 
                                onChange={handleChange}
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}/>
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </CardBody>
            </Card>  
        </Container>

    )
};

export default Profile;
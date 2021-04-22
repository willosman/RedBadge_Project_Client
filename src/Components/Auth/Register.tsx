import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';


const Register = (props: string) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] =useState('');
    const [lastName, setLastName] = useState('');
    const [role, setRole] = useState('');
    const [visible, setVisible] =useState(false);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        fetch('http://localhost:3000/user/register', {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    email: email,
                    password: password, 
                    firstName: firstName,
                    lastName: lastName,
                    role: role
                },
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            setEmail('');
            setPassword('');
            setFirstName('');
            setLastName('');
            setRole('');
            if (!data.sessionToken) {
                setVisible(true);
            } else {
                props.updateToken(data.sessionToken, data.user.firstName)
            }
        })
        .catch((err) => console.log(err));
    };
    return (
        <div>
            <h1>Sign up now!</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                <Label htmlFor='firstName'>First Name</Label>
                <Input onChange={(e) => setFirstName(e.target.value)}
                name="firstName"
                value={firstName}
                minLength={1}
                required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='lastName'>Last Name</Label>
                    <Input onChange={(e) => setLastName(e.target.value)}
                    name="lastName"
                    value={lastName}
                    minLength={1}
                    required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='email'>Email Address</Label>
                    <Input onChange={(e) => setEmail(e.target.value)}
                    name='email'
                    type='email'
                    placeholder='email@test.com'
                    value={email}
                    required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='password'>Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)}
                    name='password'
                    type='password'
                    minLength={5}
                    placeholder='password'
                    value={password}
                    required />
                </FormGroup>
                <Button primary type='submit'>
                    Register
                </Button>
            </Form>
        </div>
    )
}

export default Register;
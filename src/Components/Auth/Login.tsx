import React, {useState} from 'react';
import { FormGroup, Button, Label, Input, Form } from 'reactstrap';


const Login = (props: String | Boolean) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [visibile, setVisible] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();
        fetch('http://localhost:3000/user/login', {
            method: 'POST',
            body: JSON.stringify({
                user: {email: email, password: password},
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            setPassword('');
            setEmail('');
            if (!data.sessionToken) {
                setVisible(true);
            } else {
               props.updateToken(data.sessionToken, data.user.firstName);
            }
        });
    };

    return (
        <div>
            <h1>Welcome Back!</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor='email'>Email Address</Label>
                    <Input onChange ={(e) => setEmail(e.target.value)}
                    name='email'
                    value={email}
                    required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='password'>Password</Label>
                    <Input onChange ={(e) => setPassword(e.target.value)}
                    name="password"
                    value={password}
                    type='password'
                    required />
                </FormGroup>
                <Button primary type='submit'>
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default Login;
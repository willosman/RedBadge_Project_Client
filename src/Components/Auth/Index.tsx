import React, {useState, FC} from 'react';
import Register from './Register'
import Login from './Login'
import {Button, Container} from 'reactstrap'

const Auth: FC = (props) => {
    const [loggingIn, setLoggingIn] = useState(false);
    const toggleLoggingIn = () => {
        setLoggingIn(!loggingIn);
    };

    return (
        <div>
            <Container>
                <Container>
                    <h1>Card House</h1>
                    <h2>A place for Magic: The Gathering Players</h2>
                    <Container>
                <Login />
                <Register />
                    </Container>
                </Container>
            </Container>
        </div>
    )
}

export default Auth;
import React, { Component } from 'react';
import './Login.css';
import Header from '../../common/header/Header.js';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

class Login extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className="cardStyle">

                <Card >
                    <CardContent>

                        <Typography variant ="h6">LOGIN</Typography>
                        <FormControl required>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <Input id="username" type="text" />
                        </FormControl><br />

                         <FormControl required>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="password" />
                        </FormControl>

                    </CardContent>

                </Card>

                
                
                </div>

                

            </div>



        )
    }
}

export default Login;
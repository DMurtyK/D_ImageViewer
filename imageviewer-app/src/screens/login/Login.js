import React, { Component } from 'react';
import './Login.css';
import Header from '../../common/header/Header.js';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';

class Login extends Component {

    constructor(){
        super();
        this.state={
            usernameRequired:"dispNone",
            passwordRequired:"dispNone",
            username:"",
            password:""
        }
    }

    loginClickHandler = () => {
        this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) :
            this.setState({ usernameRequired: "dispNone" });
        this.state.password === "" ? this.setState({ passwordRequired: "dispBlock" }) :
            this.setState({ passwordRequired: "dispNone" });
    }

    inputUsernameChangeHandler = (e) => {
        this.setState({ username: e.target.value })
    }
    inputPasswordChangeHandler = (e) => {
        this.setState({ password: e.target.value });
    }


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
                            <Input id="username" type="text" username = {this.state.username} onChange = {this.inputUsernameChangeHandler}/>
                            <FormHelperText className={this.state.usernameRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br />

                         <FormControl required>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="password" password = {this.state.password} onChange = {this.inputPasswordChangeHandler}/>
                            <FormHelperText className={this.state.passwordRequired}><span className="red">required</span></FormHelperText>
                        </FormControl>

                        <br /><br />
                        <Button variant="contained" color="primary" onClick = {this.loginClickHandler}>LOGIN</Button>

                    </CardContent>

                </Card>

                
                
                </div>

                

            </div>



        )
    }
}

export default Login;
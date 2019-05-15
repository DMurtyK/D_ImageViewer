import React, { Component } from 'react';
import './Login.css';
import Header from '../../common/header/Header.js';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class Login extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className="cardStyle">

                <Card >
                    <CardContent>

                        <span>LOGIN</span>

                    </CardContent>

                </Card>

                
                
                </div>

                

            </div>



        )
    }
}

export default Login;
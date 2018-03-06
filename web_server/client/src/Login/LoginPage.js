import LoginForm from './LoginForm';
import React from 'react';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: {},
            user: {
                email: '',
                password: ''
            }
        };
    }

    // submit form
    processForm(event) {
        event.preventDefault();

        const email = this.state.user.email;
        const password = this.state.user.password;

        console.log('email:', email);
        console.log('password:', password);

        // TODO: post login data.
    }

    // update while user input
    changeUser(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({
            user : user
        });
    }

    render() {
        return (
            <LoginForm
                onSubmit = {(event) => this.processForm(event)}
                onChange = {(event) => this.changeUser(event)}
                errors = {this.state.errors}
                user = {this.state.user} />
        );
    }
}

export default LoginPage;
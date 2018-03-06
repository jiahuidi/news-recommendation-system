import './Login.css';
import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {},
        }
    }

    onSubmit() {

    }

    onChange() {

    }

    render() {
        return(
            <div className="container">
                <div className="card-panel login-panel">
                    <form className="col s12" action="/" onSubmit={this.onSubmit}>
                        <h4 className="center-align">Login</h4>
                        {this.state.errors.summary && <div className="row"><p className="error-message">{this.state.errors.summary}</p></div>}
                        <div className="row">
                            <div className="input-field col s12">
                                <input className="validate" id="email" type="email" name="email" onChange={this.onChange}/>
                                <label htmlFor='email'>Email</label>
                            </div>
                        </div>
                        {this.state.errors.email && <div className="row"><p className="error-message">{this.state.errors.email}</p></div>}
                        <div className="row">
                            <div className="input-field col s12">
                                <input className="validate" id="password" type="password" name="password" onChange={this.onChange}/>
                                <label htmlFor='password'>Password</label>
                            </div>
                        </div>
                        {this.state.errors.password && <div className="row"><p className="error-message">{this.state.errors.password}</p></div>}
                        <div className="row right-align">
                            <input type="submit" className="waves-effect waves-light btn indigo lighten-1" value='Log in'/>
                        </div>
                        <div className="row">
                            <p className="right-align"> New to Tap News?  <a href="/signup">Sign Up</a></p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;
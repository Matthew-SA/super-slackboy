import React from 'react';
class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.demoLogin = this.demoLogin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  demoLogin(e) {
    e.preventDefault();
    const guest = ({ email: 'guest@guest.com', password: 'guest12345' });
    this.props.processForm(guest)
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }



  render() {
    let formTitle = this.props.formType === "Log in" ? "Log in to Super Slackboy" : "Sign up for Super Slackboy"
    let demobutton = this.props.formType === "Log in" ? <button className="purple-button" style={{ width: "80%", height: "44px", fontSize: "18px" }} onClick={this.demoLogin}>Login as Guest</button> : ""

    return (
      <div className="login-body">
        <div className="login-card">
          <form onSubmit={this.handleSubmit} className="login-form">
            <h1 className="signin_header">{formTitle}</h1>
            <p className="subtitle">Instant message board service</p>
            <br />
            Enter your email address and password.
              <br />
                <input type="email"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="login-input"
                  placeholder="you@example.com"
                />
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input extra-margin"
                  placeholder="password"
                />
              <br />
              <button className="green-button" type="submit" style={{ width: "80%", height: "44px", fontSize: "18px", marginBottom: "10px" }} value={this.props.formType}>
                <span>{this.props.formType}</span>
              </button>
            {demobutton}
            <div className="errors">{this.renderErrors()}</div>
          </form>
        </div>
      </div>
    );
  }
}

export default SessionForm;

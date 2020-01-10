import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
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

  renderErrors() {
    return (
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }



  render() {
    let formTitle = this.props.formType === "Sign in" ? "Sign in to Slack" : "Sign up for Slack"

    return (
      <div className="login-card">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h1 class="signin_header">{formTitle}</h1>
          <p className="subtitle">Slack Clone</p>
          <br />
          Enter your email address and password.
          <div className="login-form">
            <br />
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                placeholder="you@example.com"
              />
            <br />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input extra-margin"
                placeholder="password"
              />
            <br />
            {/* <input className="session-submit" type="submit" value={this.props.formType} /> */}
            <button className="session-submit" type="submit" value={this.props.formType}>
              <span>{this.props.formType}</span>
            </button>
          </div>
          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default SessionForm;

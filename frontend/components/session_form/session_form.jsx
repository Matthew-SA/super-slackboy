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
    return (
      <div className="login-card">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h1 class="signin_header">Sign in to Slack</h1>
          <p>Full Stack Clone</p>
          {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
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
                className="login-input"
                placeholder="password"
              />
            <br />
            {/* <input className="session-submit" type="submit" value={this.props.formType} /> */}
            <button className="session-submit" type="submit">
              <span>{this.props.formType}</span>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;

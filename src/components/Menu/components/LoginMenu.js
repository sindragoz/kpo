import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ModalRegister from "./Register/ModalRegister";
import ModalLogin from "./LoginModal";
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { userInfo } from 'os';
import { inherits } from 'util';

const styles = {
  root: {

  },
  menu: {
    height: 40,
    color: "white",
    width: "100%",
    paddingTop: 50,
    paddingRight: 50,
    fontSize: 16,
    fontFamily: "sans-serif",
  },
  gridMenuItem: {
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline"
    }
  }
};

class LoginMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRegisterDialog: false,
      showLoginDialog: false,
      errorInField: "ok",
      loginField: {
        login: "",
        password: ""
      },
      registerField: {
        login: "",
        password: "",
        repeatPassword: "",
        email: ""
      }
    }
  }

  onFieldChange = (modal, field, value) => {
    this.setState(prevState => ({
      ...prevState,
      [modal + "Field"]: {
        ...prevState[modal + "Field"],
        [field]: value
      }
    })
    )
  }

  regNewUser = () => {
    console.log("reg validate res->", this.validateFields())
    this.setState({ errorInField: this.validateFields() });
  }

  validateFields = () => {
    const { login, password, repeatPassword, email } = this.state.registerField;
    if (!password && !repeatPassword || password !== repeatPassword) {
      return "password";
    }
    if (!login) {
      return "login";
    }
    if (!email || email.indexOf("@") == -1) {
      return "email";
    }
    return "ok";
  }

  onLogin = () => {
    this.props.onLogin(this.state.loginField.login, this.state.loginField.password);
  }
  render() {
    console.log("loginProps:", this.props);
    const { classes } = this.props;
    return (

      <React.Fragment>
        <Grid container
          justify={"flex-end"}
          alignItems={"center"}
          direction={"row"}
          className={classes.menu}
          spacing={24}>
          <Grid item
            className={classes.gridMenuItem}>
            {this.props.user.login ? (<span><Link to="/cabinet" style={{ color: "inherit", textDecoration: "inherit" }}>{this.props.user.login}</Link></span>) : (<span onClick={() => { this.setState({ showLoginDialog: true }) }}>{"Вход"}</span>)}
          </Grid>
          <Grid item
            className={classes.gridMenuItem}>
            <span onClick={this.props.user.login ? () => this.props.Unauthorize() : () => { this.setState({ showRegisterDialog: true }) }}>
              {this.props.user.login ? "Выход" : "Регистрация"}
            </span>
          </Grid>
        </Grid>
        <ModalRegister
          showRegisterDialog={this.state.showRegisterDialog}
          onCloseModalRegister={() => { this.setState({ showRegisterDialog: false }) }}
          onFieldChange={this.onFieldChange}
          register={this.state.registerField}
          regNewUser={this.regNewUser}
          errorInField={this.state.errorInField}
        />
        <ModalLogin
          showLoginDialog={!this.props.isAuthorized && this.state.showLoginDialog}
          onCloseModalLogin={() => { this.setState({ showLoginDialog: false }) }}
          onFieldChange={this.onFieldChange}
          login={this.state.loginField}
          onLogin={this.onLogin}
        />
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(LoginMenu);
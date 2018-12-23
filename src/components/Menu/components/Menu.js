import React, { Component } from 'react';

import LoginMenu from "./LoginMenu";
import MainMenu from "./MainMenu";
import Popup from "../../Popup/Popup";
import Progress from '../../Progress';


class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Popup: {
        open: false,
        message: "Успех!",
        variant: "success"
      }
    }
  }

  componentDidMount() {
    this.props.getUser();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.fetching && this.props.isAuthorized) {
      this.props.getUser();
    }
    if (prevProps.fetching && !this.props.fetching) {
      if (this.props.gettingTokenError) {
        this.setState({
          Popup: {
            open: true,
            message: "Запрос не выполнен!",
            variant: "error"
          }
        }, () => setTimeout(() => this.setState({
          Popup: {
            open: false,
            message: "Запрос не выполнен!",
            variant: "error"
          }
        }), 2000));
      }
      else {
        this.setState({
          Popup: {
            open: true,
            message: "Успех",
            variant: "success"
          }
        }, () => setTimeout(() => this.setState({
          Popup: {
            open: false,
            message: "Успех",
            variant: "success"
          }
        }), 2000));
      }
    }
  }
  handleClose = () => {
    this.setState({ PopupOpen: false })
  }
  render() {
    return (
      <React.Fragment>
        <Progress show={!!this.props.fetching} />
        <LoginMenu onLogin={this.props.tryLogin} isAuthorized={this.props.isAuthorized} user={this.props.user} Unauthorize={this.props.Unauthorize} />
        <MainMenu />
        <Popup open={this.state.Popup.open} onClose={this.handleClose} variant={this.state.Popup.variant} message={this.state.Popup.message} />
      </React.Fragment>
    )
  }
}

export default Menu;
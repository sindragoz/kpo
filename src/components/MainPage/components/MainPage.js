import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Menu from "../../Menu";
import Register from "../..//Menu/components/Register/Register";
import Cards from "./Cards";
import Footer from "./Footer";

import classNames from 'classnames';

import "../styles.css";


const styles = {
  root: {
    position: "relative"
  },
  menu: {
    height: 100,
  },
  gridMenuBlock: {
    fontSize: 24,
    color: "lightBlue",
    textTransform: "uppercase",
    fontFamily: "sans-serif"
  },
  gridMenuItem: {
    "&:hover": {
      color: "aquamarine",
      cursor: "pointer"
    }
  },
  logo: {
    marginTop: 40
  },
  logoPic: {
    width: 135,
    height: 120,
    cursor: "pointer"
  }
};


class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.getUser();
  }
  componentDidUpdate(prevProps) {
    
  }
  tryLogin = (login, password) => {
    this.props.tryLogin(login, password);
  }
  render() {
    const { classes } = this.props;
    //console.log("FETCH PROPS->", this.props);
    return (
      <div className={classNames(classes.root, "main-bg")}>
        
        <Menu />
        <div style={{ textAlign: "center", color: "white", fontFamily: "sans-serif", marginTop: 100, marginLeft: 55 }}><h1>ЦЕНТР ПОПУЛЯРИЗАЦИИ ЕСТЕСТВЕННО-НАУЧНЫХ ЗНАНИЙ</h1><br />
          <h3>Ульяновский планетарий</h3></div>
        <Register />
        <div style={{ textAlign: "center", color: "white", fontFamily: "sans-serif", marginTop: 550, marginLeft: 55, textTransform: "uppercase" }}><h1>Исследуй бескрайний космос</h1><br />
          <span style={{ display: "inline-block", width: "500px", textTransform: "none" }}>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях.</span></div>
        <Cards />
        <Footer />
      </div>
    )
  }
}

export default withStyles(styles)(MainPage);

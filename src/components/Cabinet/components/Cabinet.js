import React from 'react';
import Menu from "../../Menu";
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import UserInfo from "./UserInfo";
import Orders from "./Orders";
import CreateShedule from "./CreateShedule";
import Popup from "../../Popup/Popup";

import classNames from 'classnames';



const styles = {
  root: {
    background: "black"
  },
  souvenirTable: {
    marginTop: 50,
    width: "100%"
  },
  firstTimeItem: {
    paddingLeft: 90
  },
  userInfoItem: {
    color: "black",
    fontSize: 20
  },
  ordersContainer: {
    borderRadius: 0,
    margin: 100
  },
  paperTabs: {
    padding: 2,
    marginTop: 100,
    borderRadius: 0,
    backgound: "lightBlue"
  },
  orderValue:{
    display:"inline-block",
    fontSize:"16px",
    width:"33%",

  },
  timeTextField:{
    background:"white",
      color:"white",
      marginBottom:50,
      marginLeft:55,
      width:125,
      "&:nth-child(1)":{
        marginTop:50
      }
  }
};

class Cabinet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day_id: 1,
      tabIndex: 0,
      Popup: {
        open: false,
        message: "Успех!",
        variant: "success"
      }

    }
  }

  componentDidMount() {
    this.props.getOrders(this.props.user.id);
    //this.props.getSouvenirList();
  }

  componentDidUpdate(prevProps) {
    // if(!prevProps.user.login&&this.props.user.login&&!this.props.orders){
    //   this.props.getOrders(this.props.user.id);
    // }
    // if (prevProps.gettingBuySouvenir && !this.props.gettingBuySouvenir) {
    //   console.log("souvenir error", this.props);
    //   if (this.props.buySouvenirError) {
    //     this.setState({
    //       Popup: {
    //         open: true,
    //         message: "Запрос не выполнен!",
    //         variant: "error"
    //       }
    //     }, () => setTimeout(() => this.setState({
    //       Popup: {
    //         open: false,
    //         message: "Запрос не выполнен!",
    //         variant: "error"
    //       }
    //     }), 2000))
    //   }
    //   else {
    //     this.setState({
    //       Popup: {
    //         open: true,
    //         message: "Успех",
    //         variant: "success"
    //       }
    //     }, () => setTimeout(() => this.setState({
    //       Popup: {
    //         open: false,
    //         message: "Успех",
    //         variant: "success"
    //       }
    //     }), 2000));

    //   }
    // }
  }
  handleItemMenuChange = (e, value) => {
    console.log("value", value);
    //const value=e.target.value;
    this.setState({ tabIndex: value });
  }
  render() {
    console.log("cabinet props->", this.props);

    const { classes, user, orders } = this.props;
    const { tabIndex } = this.state;
    if (!user.login) {
      return (
        <Redirect to="/" />
      )
    }
    return (
      <div>
        <Menu />

        <Paper className={classes.paperTabs}>
          <Tabs
            value={tabIndex}
            onChange={this.handleItemMenuChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Личная информация" />
            <Tab label="Ваши заказы" />
            {user.role == 0 ? <Tab label="Создание расписания" /> : <div />}
          </Tabs>
        </Paper>
        {tabIndex === 0 && <UserInfo user={user} classes={classes} />}
        {tabIndex === 1 && <div><Orders classes={classes} orders={orders} /></div>}
        {tabIndex === 2 && <div><CreateShedule classes={classes} createShedule={this.props.createShedule} creatingShedule={this.props.creatingShedule}
        creatingSheduleError={this.props.creatingSheduleError} /></div>}
        <Grid container
          justify={"center"}
          alignItems={"center"}
          direction={"row"}
          className={classNames(classes.souvenirTable, classes.firstTimeItem)}
          spacing={40}>
        </Grid>


        <Popup open={this.state.Popup.open} onClose={this.handleClose} variant={this.state.Popup.variant} message={this.state.Popup.message} />
      </div >
    )
  }
}

export default withStyles(styles)(Cabinet);

//<Button variant="contained" color="primary" className={classes.confirmButton} onClick={() => this.buySeat(0)}>Купить</Button><br />
//<Button variant="contained" color="primary" className={classes.confirmButton}>Забронировать</Button>
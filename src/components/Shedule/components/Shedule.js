import React from 'react';
import Menu from "../../Menu";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import TimeItem from "./TimeItem";
import Popup from "../../Popup/Popup";
import classNames from 'classnames';



import "../styles.css";




const styles = {
  root: {
    background: "black"
  },
  dataSelect: {
    background: "white",
    width: 120,
    marginLeft: 55,
    padding: 2
  },
  timeTable: {
    marginTop: 50,
    width: "100%"
  },
  sheduleContainer: {
    marginTop: 200,
    textAlign: "center"
  },
  timeItem: {
    background: "rgb(240,240,240)",
    padding: 10,
    border: "2px solid lightBlue",
    "&:hover": {
      cursor: "pointer",
      background: "white"
    }
  },
  firstTimeItem: {
    paddingLeft: 90
  },
  timeSpan: {
    fontSize: 20,
    lineHeight: "30px",
    fontWeight: "bold"
  },
  confirmButton: {
    marginTop: 50,
    marginBottom: "-20px",
    width: 150,
    marginLeft: 55
  },
  timeSelected: {
    background: "rgb(240,240,240)",
    padding: 10,
    border: "4px solid green",
    "&:hover": {
      cursor: "pointer",
      background: "white"
    }

  }
};

class Shedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day_id: 1,
      Popup: {
        open: false,
        message:"Успех!",
        variant:"success"
      }

    }
  }

  componentDidMount() {
    this.getSheduleByDayId(this.state.day_id);
  }

  componentDidUpdate(prevProps){
    if(prevProps.gettingBuySeat&&!this.props.gettingBuySeat){
      if(this.props.buySeatError){
        this.setState({Popup:{
          open:true,
          message:"Запрос не выполнен!",
          variant:"error"
        }},()=>setTimeout(()=>this.setState({Popup:{
          open:false,
          message:"Запрос не выполнен!",
          variant:"error"
        }}),2000))
      }
      else{
        this.setState({Popup:{
          open:true,
          message:"Успех",
          variant:"success"
        }},()=>setTimeout(()=>this.setState({Popup:{
          open:false,
          message:"Успех",
          variant:"success"
        }}),2000));
        
      }
    }
  }

  getSheduleByDayId = (day_id) => {
    this.setState({ day_id }, this.props.getShedule(day_id));
  }

  onSelect = (timeItem) => {
    this.props.selectTimeItem(timeItem);
  }
  handleClose = () => {
    this.setState({ PopupOpen: false })
  }
  buySeat = (booking) => {
    const { id, day_id } = this.props.selectedTimeItem;
    this.props.buySeat(booking, id, this.props.user.id);
  }
  render() {
    console.log("shedule props->", this.props);
    console.log("shedule state->", this.state);
    const { classes, shedule } = this.props;
    const today = new Date();
    const days = [];
    let dateStr = today.getDate() + "." + today.getMonth() + "." + today.getFullYear();
    days.push(dateStr);
    today.setDate(today.getDate() + 1);
    dateStr = today.getDate() + "." + today.getMonth() + "." + today.getFullYear();
    days.push(dateStr);
    today.setDate(today.getDate() + 1);
    dateStr = today.getDate() + "." + today.getMonth() + "." + today.getFullYear();
    days.push(dateStr);


    return (
      <div>
        <Menu />
        <div className={classes.sheduleContainer}>
          <Select
            native
            className={classes.dataSelect}
            value={this.state.day_id}
            onChange={(e) => this.getSheduleByDayId(e.target.value)}
          >
            <option value={1}>{days[0]}</option>
            <option value={2}>{days[1]}</option>
            <option value={3}>{days[2]}</option>
          </Select>
          <Grid container
            justify={"center"}
            alignItems={"center"}
            direction={"row"}
            className={classNames(classes.timeTable, classes.firstTimeItem)}
            spacing={40}>
            {
              shedule ? shedule.map(item => (<TimeItem classes={classes} isSelected={!!this.props.selectedTimeItem && item.id === this.props.selectedTimeItem.id} timeItem={item} onSelect={this.onSelect} />)) : <Grid item />
            }
          </Grid>
          <Button variant="contained" color="primary" className={classes.confirmButton} onClick={() => this.buySeat(0)}>Купить</Button><br />
          <Button variant="contained" color="primary" className={classes.confirmButton}>Забронировать</Button>
        </div>
        <Popup open={this.state.Popup.open} onClose={this.handleClose} variant={this.state.Popup.variant} message={this.state.Popup.message} />
      </div>
    )
  }
}

export default withStyles(styles)(Shedule);

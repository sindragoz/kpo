import React from 'react';
import Menu from "../../Menu";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import SouvenirItem from "./SouvenirItem";
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
  souvenirListContainer: {
    marginTop: 200,
    textAlign: "center"
  },
  souvenirItem: {
    background: "rgb(240,240,240)",
    padding: 10,
    border: "2px solid lightBlue",
    "&:hover": {
      cursor: "pointer",
      border: "2px solid blue",
    },
    width:150,
    height:220
  },
  buyButton: {
    width: 150,
    
  }
};

class Souvenirs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day_id: 1,
      Popup: {
        open: false,
        message: "Успех!",
        variant: "success"
      }

    }
  }

  componentDidMount() {
    this.props.getSouvenirList();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.gettingBuySouvenir&&!this.props.gettingBuySouvenir){
      console.log("souvenir error",this.props);
      if(this.props.buySouvenirError){
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
  buySouvenir = (id) => {
    const today = new Date();
    let dateStr = today.getFullYear()+"-"+today.getMonth() + "-" + today.getDate();
    this.props.buySouvenir(id, dateStr, this.props.user.id);
  }
  render() {
    console.log("souvenir props->",this.props);
    
    const { classes, souvenirList } = this.props;
    return (
      <div>
        <Menu />
        <div className={classes.sheduleContainer}>
          <Grid container
            justify={"center"}
            alignItems={"center"}
            direction={"row"}
            className={classNames(classes.souvenirTable, classes.firstTimeItem)}
            spacing={40}>
            {
              souvenirList ? souvenirList.map(item => (<SouvenirItem classes={classes} souvenir={item} onBuyClick={this.buySouvenir} />)) : <Grid item />
            }
          </Grid>

        </div>
        <Popup open={this.state.Popup.open} onClose={this.handleClose} variant={this.state.Popup.variant} message={this.state.Popup.message} />
      </div>
    )
  }
}

export default withStyles(styles)(Souvenirs);

//<Button variant="contained" color="primary" className={classes.confirmButton} onClick={() => this.buySeat(0)}>Купить</Button><br />
//<Button variant="contained" color="primary" className={classes.confirmButton}>Забронировать</Button>
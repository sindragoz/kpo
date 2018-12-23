import React from 'react';

import { withStyles } from "@material-ui/core";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import classNames from 'classnames';


const styles = {

    dialogTitle:{
      textAlign:"center",
      textTransform:"uppercase",
      background:"rgb(102,102,255)",
      padding:15
    },
    dialogTitleText:{
      color:"white !important",
      fontSize:20,
     fontWeight:600 
    },
    dialogContent:{
      background:"black",
      textAlign:"center",
      padding:"0 50px"
    },
    textField:{
      background:"white",
      color:"white",
  
      marginBottom:50,
      width:200,
      "&:nth-child(1)":{
        marginTop:50
      }
    },
    submit:{
      marginBottom:20
    }
  };

export default withStyles(styles)((props)=>{
    const {classes}=props;
    return (
        <Dialog
          open={props.showLoginDialog}
          onClose={props.onCloseModalLogin}
        >
          <DialogTitle  className={classes.dialogTitle}><p className={classes.dialogTitleText}>Вход</p></DialogTitle>
          <DialogContent className={classes.dialogContent}>
         <TextField
          className={classes.textField}
          placeholder="Логин"
          value={props.login.login}
          onChange={(e)=>props.onFieldChange("login","login",e.target.value)}
          inputProps={{
            style:{padding:10},
            
          }}
          
        /><br/>
         <TextField
          type="password"
          className={classes.textField}
          placeholder="Пароль"
          value={props.login.password}
          onChange={(e)=>props.onFieldChange("login","password",e.target.value)}
          inputProps={{
            style:{padding:10},
            
          }}
        /><br/>
        <Button onClick={props.onLogin} variant="contained" color="primary" className={classes.submit}>
              Войти
            </Button>
          </DialogContent>
        </Dialog>
    )
})
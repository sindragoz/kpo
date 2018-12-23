import React from 'react';

import { withStyles } from "@material-ui/core";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
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
      padding:"0 100px"
    },
    textField:{
      background:"white",
      color:"white",
  
      marginBottom:50,
      width:250,
      "&:nth-child(1)":{
        marginTop:50
      }
    },
    submit:{
      marginBottom:50
    }
  };

export default withStyles(styles)((props)=>{
    const {classes}=props;
    console.log("modal reg props->",props);
    return (
        <Dialog
          open={props.showRegisterDialog}
          onClose={props.onCloseModalRegister}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle  className={classes.dialogTitle}><p className={classes.dialogTitleText}>Регистрация</p></DialogTitle>
          <DialogContent className={classes.dialogContent}>
         <TextField
         error={props.errorInField==="login"}
          className={classes.textField}
          placeholder="Логин"
          value={props.register.login}
          onChange={(e)=>props.onFieldChange("register","login",e.target.value)}
          inputProps={{
            style:{padding:10},
            
          }}
          
        /><br/>
         <TextField
          type="password"
          error={props.errorInField==="password"}
          className={classes.textField}
          placeholder="Пароль"
          value={props.register.password}
          onChange={(e)=>props.onFieldChange("register","password",e.target.value)}
          inputProps={{
            style:{padding:10},
            
          }}
        /><br/>
        <TextField
          type="password"
          error={props.errorInField==="password"}
          className={classes.textField}
          placeholder="Повторите пароль"
          value={props.register.repeatPassword}
          onChange={(e)=>props.onFieldChange("register","repeatPassword",e.target.value)}
          inputProps={{
            style:{padding:10},
            
          }}
        
        /><br/>
        <TextField
          className={classes.textField}
          error={props.errorInField==="email"}
          placeholder="Электронная почта"
          value={props.register.email}
          onChange={(e)=>props.onFieldChange("register","email",e.target.value)}
          inputProps={{
            style:{padding:10},
            
          }}
          
        /><br/>
            <Button onClick={props.regNewUser} variant="contained" color="primary" className={classes.submit}>
              Подтвердить
            </Button>
          </DialogContent>
        </Dialog>
    )
})
import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import classNames from 'classnames';

import ModalRegister from "./ModalRegister";

const styles = {

  gridMenuBlock:{
   marginTop:150
  },
  button:{

    marginLeft:70,
    fontSize:30,
    padding:"10px 30px"
  }
  
};

class Register extends React.Component{
  constructor(props){
    super(props);
    this.state={
      showRegisterDialog:false,
      errorInField:"ok",
      registerField:{
      login:"",
      password:"",
      repeatPassword:"",
      email:""
      }
    }
  }

onFieldChange=(modal,field,value)=>{
    this.setState(prevState=>({
        ...prevState,
        [modal+"Field"]:{
            ...prevState[modal+"Field"],
          [field]:value
          }
    })
    )
}

regNewUser=()=>{
console.log("validate result->",this.validateFields());
  this.setState({errorInField:this.validateFields()});
}

validateFields=()=>{
  const {login,password,repeatPassword,email}=this.state.registerField;
  if(!password&&!repeatPassword||password!==repeatPassword){
    return "password";
  }
  if(!login){
    return "login";
  }
  if(!email||email.indexOf("@")==-1){
    return "email";
  }
  return "ok";
}
  render(){
    const {classes}=this.props;
    console.log("regFields:",this.state.registerField);
  return(
    <div>
  <Grid container
      justify={"center"}
      alignItems={"center"}
            direction={"row"}
            className={classes.gridMenuBlock}>
      <Grid item>
      <Button variant="contained" color="primary" className={classes.button} onClick={()=>{this.setState({showRegisterDialog:true})}}>
        регистрация
      </Button>
      </Grid>
      </Grid>
      <ModalRegister
          showRegisterDialog={this.state.showRegisterDialog}
          onCloseModalRegister={()=>{this.setState({showRegisterDialog:false})}}
          onFieldChange={this.onFieldChange}
          register={this.state.registerField}
          regNewUser={this.regNewUser}
          errorInField={this.state.errorInField}
          />
      </div>)
    }
}

export default withStyles(styles)(Register)
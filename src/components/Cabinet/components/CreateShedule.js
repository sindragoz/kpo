import React from 'react';
import Menu from "../../Menu";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import Popup from "../../Popup/Popup";
import classNames from 'classnames';




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
            seatCountValue: "",
            priceValue: "",
            Popup: {
                open: false,
                message: "Успех!",
                variant: "success"
            },
            timeValue: "10:00"

        }
    }

    componentDidMount() {
        //this.getSheduleByDayId(this.state.day_id);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.creatingShedule && !this.props.creatingShedule) {
            if (this.props.creatingSheduleError) {
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
                }), 2000))
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
    onDateChange=(e)=>{
        const day_id=e.target.value;
        this.setState({day_id})
    }
    onTimeChange = (e) => {
        const time = e.target.value;
        this.setState({ timeValue: time });
    }
    onSeatCountChange = (e) => {
        const seatCount = e.target.value;
        this.setState({ seatCountValue: seatCount });
    }
    onPriceChange = (e) => {
        const price = e.target.value;
        this.setState({ priceValue: price });
    }
    render() {
        console.log("create props->", this.props);
        console.log("create state->", this.state);
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
                <div className={classes.sheduleContainer}>
                    <Select
                        native
                        className={classes.dataSelect}
                        value={this.state.day_id}
                        onChange={(e)=>this.onDateChange(e)}
                    >
                        <option value={1}>{days[0]}</option>
                        <option value={2}>{days[1]}</option>
                        <option value={3}>{days[2]}</option>
                    </Select>
                    <br />
                    <form className={classes.container} noValidate>
                        <TextField
                            type="time"
                            inputProps={{
                                style: { padding: 10 },

                            }}
                            value={this.state.timeValue}
                            onChange={(e)=>this.onTimeChange(e)}
                            className={classes.timeTextField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 300, // 5 min
                            }}
                        /><br />
                        <TextField

                            inputProps={{
                                style: { padding: 10 },

                            }}
                            placeholder={"кол-во мест"}
                            value={this.state.seatCountValue}
                            onChange={(e)=>this.onSeatCountChange(e)}
                            className={classes.timeTextField}

                            inputProps={{
                                step: 300, // 5 min
                            }}
                        /><br />
                        <TextField

                            inputProps={{
                                style: { padding: 10 },

                            }}
                            placeholder={"цена"}
                            value={this.state.priceValue}
                            onChange={(e)=>this.onPriceChange(e)}
                            className={classes.timeTextField}

                            inputProps={{
                                step: 300, // 5 min
                            }}
                        />
                    </form>
                    <br />
                    <Button variant="contained" color="primary" className={classes.confirmButton} onClick={() => this.props.createShedule(this.state.day_id, this.state.seatCountValue, this.state.priceValue, this.state.timeValue)}>Создать</Button>
                </div>
                <Popup open={this.state.Popup.open} onClose={this.handleClose} variant={this.state.Popup.variant} message={this.state.Popup.message} />
            </div>
        )
    }
}

export default withStyles(styles)(Shedule);

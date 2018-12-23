import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import TicketIcon from '@material-ui/icons/CalendarToday';
import SouvenirIcon from '@material-ui/icons/AllInbox';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import OrderItem from "./OrderItem";

import classNames from 'classnames';

import souvenirPic from "../../../images/souvenir.jpg";

const Orders = ({ classes, orders }) => {
    const orderList = orders || [];
    const ordersSeat = orderList[0] || [];
    const ordersSouvenir = orderList[1] || [];
    return (
        <Paper className={classes.ordersContainer}>
            <List>
                {ordersSeat.length ? ordersSeat.map(item => <OrderItem key={item.id} classes={classes} order={item} />) : (<li />)}
                {ordersSouvenir.length ? ordersSouvenir.map(item => <OrderItem key={item.id} classes={classes} order={item} />) : (<li />)}
            </List>
        </Paper>
    )
}

export default Orders;
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import TicketIcon from '@material-ui/icons/CalendarToday';
import SouvenirIcon from '@material-ui/icons/AllInbox';

export default ({ classes, order }) => {
  if (order.hour) {
    return (
      <ListItem button>
        <ListItemIcon>
          <TicketIcon />
        </ListItemIcon>
        <span className={classes.orderValue}>дата: {order.date}</span>
        <span className={classes.orderValue}>время: {order.hour}</span>
        <span className={classes.orderValue}>стоимость: {order.seat_price+" руб."}</span>
      </ListItem>
    )
  }
  else {
    return (
      <ListItem button>
        <ListItemIcon>
          <SouvenirIcon />
        </ListItemIcon>
        <span className={classes.orderValue}>сувенир: {order.name}</span>
        <span className={classes.orderValue}>дата доставки: {order.deliver_date}</span>
        <span className={classes.orderValue}>стоимость: {order.price+" руб."}</span>
      </ListItem>
    )
  }
}
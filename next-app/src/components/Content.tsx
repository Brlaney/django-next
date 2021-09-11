import * as React from 'react';
import TableCell from '@material-ui/core/TableCell';
import { Order } from '@/lib/types';

type Props = {
  order: Order
};

const Content: React.FC<Props> = ({ order }) => {
  return (
    <>
      <TableCell component='th' scope='row'>{order.id}</TableCell>
      <TableCell align='right'>{order.date}</TableCell>
      <TableCell align='right'>{order.last_name}, {order.first_name}</TableCell>
      <TableCell align='right'>{order.city}, {order.state}</TableCell>
      <TableCell align='right'>MC •••• {order.card}</TableCell>
      <TableCell align='right'>{order.cost}</TableCell>
    </>
  )
};

export default Content;

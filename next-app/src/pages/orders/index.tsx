import * as React from 'react';
import { GetStaticProps } from 'next';
import { InferGetStaticPropsType } from 'next';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Content from '@/components/Content';
import Typography from '@material-ui/core/Typography';
import { Order } from '@/lib/types';
import styles from '@/styles/pages/Orders.module.scss';

const Orders = ({ orders }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [orderList] = React.useState(orders);

  if (!orderList) return (
    <>
      <Container className={styles.main} component='main'>
        <Typography
          className={styles.loading}
          variant='h2'
          component='div'
        >
          Loading or possibly invalid request..
        </Typography>
      </Container>
    </>
  );

  return (
    <>
      <Container className={styles.main} component='main'>
        <Typography
          className={styles.title}
          variant='h2'
          component='h1'
          gutterBottom
        >
          Orders Table
        </Typography>
        <TableContainer className={styles.container} component={Paper}>
          <Table className={styles.table} size='small' aria-label='table of orders'>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align='right'>Date</TableCell>
                <TableCell align='right'>Name</TableCell>
                <TableCell align='right'>Location</TableCell>
                <TableCell align='right'>Card</TableCell>
                <TableCell align='right'>Sale amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={styles.body}>
              {orderList.map((order: Order) => (
                <TableRow className={styles.row} key={order.id}>
                  <Content order={order} />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  )
};

// The following encounters a bug --> needs debugged still 
// The goal is to use the OrderTable component instead of the
// Content component. Good luck!
//   return (
//     <>
//       <Container className={styles.main} component='main'>
//         <Typography
//           className={styles.title}
//           variant='h2'
//           component='h1'
//           gutterBottom
//         >
//           Orders
//         </Typography>
//         <TableContainer className={styles.container} component={Paper}>
//           <OrderTable data={orderList} />
//         </TableContainer>
//       </Container>
//     </>
//   )
// };

export const getStaticProps: GetStaticProps = async _context => {
  const link = `${process.env.DJANGO_API}`
  const res = await fetch(link)
  const orders: Order[] = await res.json()

  return {
    props: {
      orders,
    },
  }
};

export default Orders;

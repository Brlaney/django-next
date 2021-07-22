import * as React from 'react'
import { GetStaticProps } from 'next'
import { InferGetStaticPropsType } from 'next'
import { styled } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import Content from '@/components/Content'
import { Order } from '@/lib/types'
import styles from './Orders.module.scss'


const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))


const TableOfOrders = ({ orders }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [orderList] = React.useState(orders)
  // const [orderList] = React.useState('') // Cond'tl return test

  if (!orderList) return (
    <div className={styles.container}>
      <Container className={styles.main} component='main'>
        <Typography
          className={styles.noList}
          variant='h2'
          component='div'
          color='text.secondary'
        >
          Loading or possibly invalid request..
        </Typography>
      </Container>
    </div>
  )

  return (
    <div className={styles.container}>
      <Container className={styles.main} component='main'>
        <TableContainer className={styles.paper} component={Paper}>
          <Typography
            variant='h2'
            component='h1'
            color='text.secondary'
            gutterBottom
          >
            Orders
          </Typography>
          <Table size='small' aria-label='table of orders'>
            <TableHead>
              <StyledTableRow>
                <TableCell>Id</TableCell>
                <TableCell align='right'>Date</TableCell>
                <TableCell align='right'>Name</TableCell>
                <TableCell align='right'>Location</TableCell>
                <TableCell align='right'>Card</TableCell>
                <TableCell align='right'>Sale amount</TableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {orderList.map((order: Order) => (
                <StyledTableRow key={order.id}>
                  <Content order={order} />
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async _context => {
  const link = `${process.env.DJANGO_API}`
  const res = await fetch(link)
  const orders: Order[] = await res.json()

  return {
    props: {
      orders,
    },
  }
}

export default TableOfOrders

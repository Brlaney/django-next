import * as React from 'react'
import { styled } from '@material-ui/core/styles'
import TableCell, { tableCellClasses } from '@material-ui/core/TableCell'
import { Order } from '@/lib/types'

type Props = {
  order: Order
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  }
}))

const Content: React.FC<Props> = ({ order }) => {
  return (
    <>
      <StyledTableCell component='th' scope='row'>{order.id}</StyledTableCell>
      <StyledTableCell align='right'>{order.date}</StyledTableCell>
      <StyledTableCell align='right'>{order.last_name}, {order.first_name}</StyledTableCell>
      <StyledTableCell align='right'>{order.city}, {order.state}</StyledTableCell>
      <StyledTableCell align='right'>MC •••• {order.card}</StyledTableCell>
      <StyledTableCell align='right'>{order.cost}</StyledTableCell>
    </>
  )
}

export default Content

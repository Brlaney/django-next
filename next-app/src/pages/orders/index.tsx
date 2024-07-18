import * as React from 'react';
import { GetStaticProps } from 'next';
import { InferGetStaticPropsType } from 'next';
import { Order } from '@/lib/types';
import styles from '@/styles/pages/Orders.module.scss';

const Orders = ({ orders }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [orderList] = React.useState(orders);

  if (!orderList) return (
    <>
      <div className={styles.main}>
        <h2 className={styles.loading}>
          Loading or possibly invalid request..
        </h2>
      </div>
    </>
  );

  return (
    <>
      <div className={styles.main}>
        <h2 className={styles.title}>
          Orders
        </h2>
        <div className={styles.div}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Id</th>
                <th align='right'>Date</th>
                <th align='right'>Company</th>
                <th align='right'>Location</th>
                <th align='right'>Card</th>
                <th align='right'>Cost</th>
              </tr>
            </thead>
            <tbody>
              {orderList.map((order: Order) => (
                <tr className={styles.body} key={order.id}>
                  <td className={styles.rowHeader}>
                    {order.id}
                  </td>
                  {/* Add other table data here, for example: */}
                  <td className={styles.row}>{order.date}</td>
                  <td className={styles.row}>{order.company}</td>
                  <td className={styles.row}>{order.state}</td>
                  <td className={styles.row}>{order.card}</td>
                  <td className={styles.row}>{order.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (_context) => {
  const link = `${process.env.DJANGO_API}`
  const res = await fetch(link)
  const orders: Order[] = await res.json()

  return {
    props: {
      orders,
    }
  };
};

export default Orders;

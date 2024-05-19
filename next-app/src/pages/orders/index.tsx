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
          Orders table
        </h2>
        <div className={styles.div}>
          <table className={styles.table}>
            <th>
              <tr>
                <td>Id</td>
                <td align='right'>Date</td>
                <td align='right'>Name</td>
                <td align='right'>Location</td>
                <td align='right'>Card</td>
                <td align='right'>Sale amount</td>
              </tr>
            </th>
            <tr className={styles.body}>
              {orderList.map((order: Order) => (
                <td className={styles.row} key={order.id}>
                  {JSON.stringify({ order })}
                  {/* <Content order={order} /> */}
                </td>
              ))}
            </tr>
          </table>
        </div>
      </div>
    </>
  )
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

// return (
//   <>
//     <div className={styles.main} component='main'>
//       <h2
//         className={styles.title}
//         variant='h2'
//         component='h1'
//         gutterBottom
//       >
//         Orders table
//       </h2>
//       <div className={styles.div}>
//         <table className={styles.table}>
//           <th>
//             <tableRow>
//               <td>Id</td>
//               <td align='right'>Date</td>
//               <td align='right'>Name</td>
//               <td align='right'>Location</td>
//               <td align='right'>Card</td>
//               <td align='right'>Sale amount</td>
//             </tableRow>
//           </th>
//           <tableBody className={styles.body}>
//             {orderList.map((order: Order) => (
//               <tableRow className={styles.row} key={order.id}>
//                 <Content order={order} />
//               </tableRow>
//             ))}
//           </tableBody>
//         </table>
//       </div>
//     </div>
//   </>
// )
// };

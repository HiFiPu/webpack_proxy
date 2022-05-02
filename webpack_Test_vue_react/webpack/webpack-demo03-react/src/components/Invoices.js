import React from 'react'
// export default function Invoices() {
//     return (
//       <main style={{ padding: "1rem 0" }}>
//         <h2>Invoices</h2>
//       </main>
//     );
//   }
import { useParams } from "react-router-dom";

export default function Invoice() {
  let params = useParams();
  return <h2>Invoice: {params.invoiceId}</h2>;
}
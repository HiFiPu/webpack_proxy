import React, { Component,lazy,Suspense } from "react";
import App from "../App.js";
import Home from "../Home.jsx";
import Invoice from "./invoice.js";
import Products from "../pages/products/index"
// import { render } from "react-dom";
import PointView from "./pointView";
import Expenses from "../components/Expenses.js";
import Invoices from "../components/Invoices.js";
import Changer from "./Changer.js";
import Ix from "./Index";
import CatchRouteX from "../pages/catchRoutex/index.jsx"
import TestB from "../pages/TestB/index.jsx";
const ReactApi = lazy(() => import('../pages/newApi/index'));
const Banner = lazy(() => import('../pages/banner/index'));
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default class route extends Component {
  render() {
    return (
      <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* <Route path="/" element={<App />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />} /> */}

          {/* <Route path="/" element={<App />}>
            <Route path="expenses" element={<Expenses />} />
            <Route path="invoices" element={<Invoices />} />
          </Route> */}

          {/* <Route path="/" element={<App />}>
            <Route path="expenses" element={<Expenses />} />
            <Route path="invoices" element={<Invoices />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Route> */}
          {/* <Route path="/" element={<App />}>
            <Route path="expenses" element={<Expenses />} />
            <Route path="invoices" element={<Invoices />}>
              <Route path=":invoiceId" element={<Invoice />} />
            </Route>
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Route> */}
          <Route exact path="/" element={<Banner />}>
            <Route path="expenses" element={<Expenses />} />
            {/* <Route path="invoices" element={<Invoices />}> */}
            <Route path="invoices">
              <Route
                index
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>Select an invoice</p>
                  </main>
                }
              />
              <Route path=":invoiceId" element={<Invoice />} />
            </Route>
            <Route path="TestB" element={<TestB />}></Route>
            <Route path="reactApi" element={<ReactApi />}></Route>
            <Route path="catchRoutex" element={<CatchRouteX />}></Route>
            <Route path="products" element={<Products />}></Route>
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Route>
        </Routes>
        </Suspense>
      </BrowserRouter>
    );
  }
}

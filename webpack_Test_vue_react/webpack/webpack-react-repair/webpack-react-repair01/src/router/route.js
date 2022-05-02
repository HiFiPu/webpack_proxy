import React, { Component } from "react";
import App from "../App.js";
import Invoice from "./invoice.js";
// import { render } from "react-dom";
import PointView from './pointView'
import Expenses from "../components/Expenses.js";
import Invoices from "../components/Invoices.js";
import Changer from './Changer.js'
import Ix from './Index'
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default class route extends Component {
  render() {
    return (
      <BrowserRouter>
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
            <Route path="/" element={<App />}>
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
      </BrowserRouter>
    );
  }
}

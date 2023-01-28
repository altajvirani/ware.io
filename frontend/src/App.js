import './App.css';
import axios from "axios"
import SideNavBar from './components/SideNavBar/SideNavBar';
// import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from './components/Map/Map';
import React, { useState, useEffect } from 'react';
// import TableRow from './components/TableRow'
// import GetData from './components/displayTable/DisplayTableUi';

function App() {
  const [tableInstance, setTableInstance] = useState("")

  useEffect(() => {
    fetchRowForTable()
  }, []);

  const fetchRowForTable = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/products`
      )
      setTableInstance(response.data)
      console.log(tableInstance)
    } catch (e) {
      console.log(e)
    }
  };

  return (
    <Container fluid style={{ alignContent: "flex-start", justifyContent: "center", height: "100vh", width: "100%" }}>
      <Row style={{ display: "flex", width: "100vw", margin: "0" }}>
        <Col className="col-9 col-sm-9 col-md-9 col-lg-10" style={{ position: "relative" }}>
          <Row style={{ display: "flex", gap: "1.5rem", padding: "1.5rem 0.7rem 0rem 1.5rem", height: "max-content" }}>
            <Col style={{ backgroundColor: "wheat", width: "max-content", height: "30vh" }}>
              <Map />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", display: "flex", gap: "1.5rem", padding: "1.5rem 0.7rem 0rem 1.5rem" }}>
            <Col style={{ backgroundColor: "gray", width: "max-content", height: "8rem", padding: "1.5rem" }}>
              <span>Hello</span>
            </Col>
            <Col style={{ backgroundColor: "aqua", width: "max-content", height: "8rem", padding: "1.5rem" }}>
              <span>Hello</span>
            </Col>
            <Col style={{ backgroundColor: "teal", height: "8rem" }}>
              <span>Hello</span>
            </Col>
          </Row>
          <Row style={{ padding: "1.5rem 0.7rem 0rem 1.5rem", }}>
            <Col className="warePackInfoTable">
              <Row style={{ backgroundColor: "purple", padding: "1rem" }}>
                <Col style={{ backgroundColor: "red", display: "flex", justifyItems: "center" }}>
                  <span style={{ padding: "0.5rem" }}>Package No.</span>
                </Col>
                <Col style={{ backgroundColor: "red", display: "flex", justifyItems: "center" }} >
                  <span style={{ padding: "0.5rem" }}>Package Name</span>
                </Col>
                <Col style={{ backgroundColor: "red", display: "flex", justifyItems: "center" }}>
                  <span style={{ padding: "0.5rem" }}>Quantity</span>
                </Col>
                <Col style={{ backgroundColor: "red", display: "flex", justifyItems: "center" }}>
                  <span style={{ padding: "0.5rem" }}>Health</span>
                </Col>
              </Row>
            </Col>
          </Row>
          {
            /* console.log(tableInstance) */

            Object.keys(tableInstance).forEach(function (key) {
              console.log(tableInstance[key].product_name)
            })
          }
          {/* <Row style={{ padding: "0rem 0.7rem 0rem 1.5rem", }}>
            <Col className="warePackInfoTable">
              <Row style={{ backgroundColor: "purple", padding: "1rem" }}>
                <Col style={{ backgroundColor: "red", display: "flex", justifyItems: "center" }}>
                  <span style={{ padding: "0.5rem" }}>Package No.</span>
                </Col>
                <Col style={{ backgroundColor: "red", display: "flex", justifyItems: "center" }} >
                  <span style={{ padding: "0.5rem" }}>Package Name</span>
                </Col>
                <Col style={{ backgroundColor: "red", display: "flex", justifyItems: "center" }}>
                  <span style={{ padding: "0.5rem" }}>Quantity</span>
                </Col>
                <Col style={{ backgroundColor: "red", display: "flex", justifyItems: "center" }}>
                  <span style={{ padding: "0.5rem" }}>Health</span>
                </Col>
              </Row>
            </Col>
          </Row> */}
        </Col>
        <Col className="col-3 col-sm-3 col-md-3 col-lg-2" style={{ position: "absolute", right: "0", backgroundColor: "gray", height: "max-content", padding: "1.5rem" }}>
          <SideNavBar />
        </Col>
      </Row>

    </Container>

  );
}

export default App;

import React from "react";
import "./ImageCategory.css";
import Header from "../Header/Header";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import Button from "@material-ui/core/Button";

const ImageCategory = () => {
  return (
    <div className="image__category">
      <Header />
      <div className="image__category_btn">
        <div>
          <Row className="justify-content-md-center">
            <Col xs="6" lg="3">
              <div className="container__left_section">
                <Button variant="contained" color="secondary">
                  UnSelect All
                </Button>
                <Button variant="contained" color="primary">
                  Select All
                </Button>
              </div>
            </Col>
            <Col xs="12" lg="6">
              <div className="container__mid_section">
                <div className="mid__section_btn">
                  <Button variant="contained" color="primary">
                    Interior Marking
                  </Button>
                  <Button variant="contained" color="primary">
                    Exterior Marking
                  </Button>
                  <Button variant="contained" color="primary">
                    Auction Sheet Marking
                  </Button>
                </div>
                <div className="mid__section_info">
                  <h5>
                    Marked Vehicle: <strong>462521</strong>
                  </h5>
                  <h5>
                    Remaining Vehicle: <strong>985362</strong>
                  </h5>
                </div>
              </div>
            </Col>
            <Col xs="6" lg="3">
              <div className="container__right_section">
                <Button variant="contained" color="primary">
                  Mark Interior
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ImageCategory;

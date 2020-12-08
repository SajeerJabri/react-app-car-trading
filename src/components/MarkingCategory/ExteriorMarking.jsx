import React, { useState } from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import Button from "@material-ui/core/Button";

const ExteriorMarking = ({
  unselectAllImage,
  selectAllImage,
  imageId,
  allImage,
  EmptySelection,
}) => {
  const [statusId, setStatusId] = useState();
  const [restStatusId, setRestStatusId] = useState();
  const [updationIP, setUpdationIP] = useState();
  const [postImage, setPostImage] = useState([]);

  // get current ip address
  fetch("https://api.ipify.org/?format=json")
    .then((res) => res.json())
    .then((data) => setUpdationIP(data.ip));

  // get logged user id
  const updatedBy = 2;

  // interior selection marking image function
  const exteriorMarking = () => {
    // console.log(imageId);
    // console.log(allImage);

    // filter selection or unselection image
    allImage.map((item) => {
      if (imageId.includes(item)) {
        setPostImage((arr) => [
          ...arr,
          {
            isPrimary: 1,
            StockImageId: item,
          },
        ]);
      } else {
        setPostImage((arr) => [
          ...arr,
          {
            isPrimary: 0,
            StockImageId: item,
          },
        ]);
      }
    });
    console.log(postImage);
    // set status id
    setStatusId(2);
    setRestStatusId(6);
    // post api call here
    var axios = require("axios");
    var data = JSON.stringify({
      imageArray: postImage,
      statusId: statusId,
      restStatusId: restStatusId,
      updationIP: updationIP,
      updatedBy: 2,
    });
    var config = {
      method: "post",
      url: "http://localhost:8080/api/update-image",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setPostImage([]);
        EmptySelection();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // console.log(imageId);
  // console.log(postImage);

  return (
    <div className="image__category_btn">
      <div>
        <Row className="justify-content-md-center">
          <Col xs="6" lg="3">
            <div className="container__left_section">
              <Button
                variant="contained"
                color="secondary"
                onClick={unselectAllImage}
              >
                UnSelect All
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={selectAllImage}
              >
                Select All
              </Button>
            </div>
          </Col>
          <Col xs="12" lg="6">
            <div className="container__mid_section">
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
              <Button
                variant="contained"
                color="primary"
                onClick={exteriorMarking}
              >
                Mark Exterior
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ExteriorMarking;

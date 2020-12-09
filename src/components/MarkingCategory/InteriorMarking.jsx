import React, { useState, useEffect } from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import Button from "@material-ui/core/Button";

const InteriorMarking = ({
  unselectAllImage,
  selectAllImage,
  MarkingFunc,
  // imageId,
  // allImage,
  // EmptySelection,
}) => {
  // const [updationIP, setUpdationIP] = useState();
  // const [postImage, setPostImage] = useState([]);

  // initialize status id
  const statusId = 1;
  const restStatusId = 5;

  // useEffect(() => {
  //   const unsubscribe = () => {
  //     allImage.map((item) => {
  //       if (imageId.includes(item)) {
  //         console.log("primary 1");
  //         setPostImage((arr) => [
  //           ...arr,
  //           {
  //             isPrimary: 1,
  //             StockImageId: item,
  //           },
  //         ]);
  //       } else {
  //         console.log("primary 0");
  //         setPostImage((arr) => [
  //           ...arr,
  //           {
  //             isPrimary: 0,
  //             StockImageId: item,
  //           },
  //         ]);
  //       }
  //     });
  //   };
  //   return () => {
  //     console.log(postImage);
  //     unsubscribe();
  //   };
  // }, [imageId]);

  // get current ip address
  // fetch("https://api.ipify.org/?format=json")
  //   .then((res) => res.json())
  //   .then((data) => setUpdationIP(data.ip));

  // get logged user id
  // const updatedBy = 2;

  // console.log(postImage);
  // ============= post interior marking data ===========
  // const handleInteriorMarking = () => {
  //   // post api call here
  //   var axios = require("axios");
  //   console.log(postImage);
  //   var data = JSON.stringify({
  //     imageArray: postImage,
  //     statusId: 1,
  //     restStatusId: 5,
  //     updationIP: updationIP,
  //     updatedBy: 2,
  //   });
  //   console.log(data);
  // var config = {
  //   method: "post",
  //   url: "http://localhost:8080/api/update-image",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   data: data,
  // };
  // axios(config)
  //   .then(function (response) {
  //     console.log(JSON.stringify(response.data));
  //     EmptySelection();
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // };

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
                onClick={() => MarkingFunc(statusId, restStatusId)}
              >
                Mark Interior
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default InteriorMarking;

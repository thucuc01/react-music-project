import React from "react";

import { Col, Row } from "antd";

import AudioPlayer from "react-audio-player";

function DetailPage() {
  // const queryString = window.location;

  // let str = queryString.href

  // let res = str.slice(str.lastIndexOf("id="))

  return (
    <div style={{ margin: "20px" }}>
      <Row>
        <Col flex={1}>
          <Row>
            <img
              style={{ maxWidth: "50vh", textAlign: "center" }}
              alt="img ..."
              src="https://images2.thanhnien.vn/Uploaded/congthang/2022_03_02/anh-1-1930.jpg"
            />
          </Row>

          <Row>
            <AudioPlayer src="boombayah.mp3" controls />
          </Row>
        </Col>

        <Col flex={4}>
          <Row>
            <h3>Ten bai hat</h3>
          </Row>

          <hr />

          <Row style={{ maxWidth: "70vh" }}>
            <h4>Loi bai hat: </h4> This is the description. This is the
            description. This is the description. This is the description. This
            is the description. This is the description. This is the
            description. This is the description. This is the description. This
            is the description. This is the description. This is the
            description. This is the description. This is the description. This
            is the description. This is the description. This is the
            description.
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default DetailPage;

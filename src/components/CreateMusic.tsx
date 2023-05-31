import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Col, Row } from "antd";

import { InboxOutlined } from "@ant-design/icons";

import type { UploadProps } from "antd";

import { message, Upload } from "antd";

import "./style/create-page.css";

const { Dragger } = Upload;

function CreateMusic() {
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem("isLogin");

    console.log(login, "login");

    if (login === "0") {
      navigate("/");
    }
  });

  const props: UploadProps = {
    name: "file",

    multiple: true,

    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",

    onChange(info) {
      const { status } = info.file;

      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }

      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);

        navigate("/");
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },

    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <div className="create-page">
      <Row className="row-1">
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>

          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>

          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibited from
            uploading company data or other banned files.
          </p>
        </Dragger>
      </Row>

      <Row>
        <Col className="col-1">
          <h2>Huong dan : </h2>

          <p>
            This is the description. This is the description. This is the
            description. This is the description. This is the description. This
            is the description. This is the description. This is the
            description. This is the description. This is the description. This
            is the description. This is the description. This is the
            description. This is the description. This is the description. This
            is the description. This is the description
          </p>
        </Col>

        <Col className="col-1">
          <h2>Quy dinh :</h2>

          <p>
            This is the description. This is the description. This is the
            description. This is the description. This is the description. This
            is the description. This is the description. This is the
            description. This is the description. This is the description. This
            is the description. This is the description. This is the
            description. This is the description. This is the description. This
            is the description. This is the description
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default CreateMusic;

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";

export default function ImageUpload({ getFileName }) {
  const [oldFile, setOldFile] = useState("");
  const formData = new FormData(); // 파일 통째로 넘기기 위해서 객체 생성

  const handleFileUpload = (e) => {
    formData.append("file", e.target.files[0]); // 새로운 파일 b.png
    formData.append("oldFile", oldFile); // 이전 파일 a.png

    // 서버 전송
    axios
      .post("http://localhost:9000/uploads", formData, {
        header: { "Content-Type": "multipart/form-data" }, // 파일, 문자 데이터 추가시
      })
      .then((res) => {
        console.log("res.data--->", res.data);
        getFileName(res.data);
        setOldFile(res.data.oldFile);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Form.Control
        type="file"
        onChange={(e) => {
          handleFileUpload(e);
        }}
      ></Form.Control>
    </div>
  );
}

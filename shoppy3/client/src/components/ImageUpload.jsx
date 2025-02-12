import axios from "axios";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export default function ImageUpload() {
  const formData = new FormData();
  //   const [oldFile, setOldFile] = useState("");

  // 파일업로드 이벤트 함수
  const handleFileupload = (e) => {
    console.log(e.target.files[0]);
    formData.append("file", e.target.files[0]);
    // formData.append("oldFile", oldFile);

    // 잘 들어갔는지 확인 코드
    for (const [key, value] of formData.entries()) {
      console.log(`key----> ${JSON.stringify(key)}`);
      console.log(`value--->`, value);
    }

    // 서버 전송
    axios
      .post("http://localhost:9000/uploads", formData, {
        header: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log("res.data---> ", res.data);
        // setOldFile(res.data.oldFile);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Form.Control
        type="file"
        onChange={(e) => {
          handleFileupload(e);
        }}
      ></Form.Control>
    </div>
  );
}

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";

export default function ImageUploadMultiple({ getFileName }) {
  const [oldFiles, setOldFiles] = useState([]);

  const handleFileUploadMultiple = (e) => {
    const formData = new FormData(); // 전역함수로 생성하면 여러군데서 호출 가능
    const files = e.target.files;
    // console.log("files--->", files);

    // 파일 업로드를 5개 이상할 경우 유효성체크
    // if (files.length < 6) {

    // formData에 append - file 개별로 append 되어야함
    /* for...of */
    // for (const file of files) {
    //   formData.append(files, file);
    // }
    /* for*/
    for (let i = 0; i < files.length; i++) formData.append("files", files[i]);
    formData.append("oldFile", oldFiles);
    /* forEach*/
    // files.forEach((file) => {
    //   formData.append(files, file);
    // }); => iteralble 호출로 인해 사용불가

    // formData에 데이터 잘 들어갔는지 확인
    // for (const [key, value] of formData) console.log(key, value);

    // 서버 전송
    // 파일업로드 제한없이 사용자가 선택한 갯수 만큼 전송===> maxFiles=${files.length}
    axios
      .post(
        `http://localhost:9000/uploads/multiple?maxFiles=${files.length}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      )
      .then((res) => {
        getFileName(res.data); // NewProduct 컴포넌트로 전송
        setOldFiles(res.data.oldFile);
      })
      .catch((error) => console.log(error));
    // } else {
    //   alert("파일 업로드는 최대 5개까지만 가능합니다.");
    // }
  };

  return (
    <div>
      <Form.Control
        type="file"
        onChange={(e) => {
          handleFileUploadMultiple(e);
        }}
        // input말고는 콜백함수로 넘겨주기
        multiple
      ></Form.Control>
    </div>
  );
}

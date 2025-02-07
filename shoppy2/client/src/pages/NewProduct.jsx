import React, { useRef, useState } from "react";
import axios from "axios";
import ImageUpload from "../components/ImageUpload.jsx";
import { useNavigate } from "react-router-dom";

export default function NewProduct() {
  const navigate = useNavigate();
  const productNameRef = useRef(null);
  const [fnames, setFnames] = useState({});
  const [preview, setPreview] = useState("");
  let [formData, setFormData] = useState({});

  const getFileName = (fileNames) => {
    console.log("fileNames--->", fileNames);
    setFnames(fileNames);
    setPreview(`http://localhost:9000/${fileNames.uploadFileName}`);
  };

  // 폼 입력시 값을 formData로 추가하는 이벤트 처리
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  // 등록 이벤트 처리
  const handleSubmit = (e) => {
    e.preventDefault();

    if (productNameRef.current.value === "") {
      alert("상품명을 입력해주세요");
      productNameRef.current.focus();
      return false;
    } else {
      // 서버 연동
      formData = {
        ...formData,
        uploadFile: fnames.uploadFileName,
        sourceFile: fnames.sourceFileName,
      };
      console.log("formData-->", formData);

      axios
        .post("http://localhost:9000/product/new", formData)
        .then((res) => {
          if (res.data.result_rows === 1) {
            alert("상품이 등록되었습니다.");
            navigate("/all");
          } else {
            alert("상품 등록 실패!!");
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="content">
      <h1>상품 등록</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label>상품명</label>
            <input
              type="text"
              name="productName"
              ref={productNameRef}
              onChange={handleChange}
            />
          </li>
          <li>
            <label>가격</label>
            <input type="text" name="price" onChange={handleChange} />
          </li>
          <li>
            <label>상품정보</label>
            <input type="text" name="description" onChange={handleChange} />
          </li>
          <li>
            <label>파일업로드</label>
            <ImageUpload getFileName={getFileName} />
            {preview && (
              <img
                src={preview}
                alt="preview image"
                style={{ width: "100px", height: "100px" }}
              />
            )}
          </li>
          <li>
            <input type="hidden" name="upload" value={fnames.uploadFileName} />
            <input type="hidden" name="source" value={fnames.sourceFileName} />
          </li>
          <li>
            <button type="submit">등록</button>
            <button type="reset">취소</button>
          </li>
        </ul>
      </form>
    </div>
  );
}

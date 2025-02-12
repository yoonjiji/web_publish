import multer from "multer";
import fs from "fs";
import path from "path";

// multer 라이브러리로 파일을 업로드 폴더에 저장
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload_files/");
  },
  filename: function (req, file, cb) {
    // cb(null, file.fieldname + "-" + Date.now());
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    // 20250206-111111-1.webp
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

// const upload = multer({ storage: storage }).array("files", 5);
// 5개 파일까지 업로드 가능

/**
 *  파일업로드 실행 함수
 */
export const fileUploadMultiple = (req, res) => {
  const maxFiles = parseInt(req.query.maxFiles);
  const upload = multer({ storage: storage }).array("files", maxFiles);

  upload(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("업로드파일리스트--->", req.files);
      console.log("업로드 삭제파일(oldFile)--->", req.body.oldFile);

      const deleteFiles = req.body.oldFile;
      console.log(deleteFiles.length);

      const oldFileArray = deleteFiles.split(",");
      console.log(oldFileArray);

      // { headers: { "Content-Type": "multipart/form-data" } }

      /** 이전파일 존재시 삭제 로직 */
      //   const oldFile = req.body.oldFile;
      for (const oldFile of oldFileArray) {
        if (oldFile) {
          // oldFile 존재 시 업로드 폴더에서 삭제
          // path, fs는 Node에서 window의 파일을 접근하기 위해서 사용(빌트인 함수)
          const oldFilePath = path.join("upload_files/", oldFile);
          if (fs.existsSync(oldFilePath)) {
            try {
              fs.unlinkSync(oldFilePath);
              console.log("이전 파일 삭제 완료", oldFilePath);
            } catch (error) {
              console.error("이전 파일 삭제 실패", error);
            }
          }
        }
      }

      // res 객체를 이용한 전송객체 생성 <-> uploadController의 res 객체명과 동일하게 정리!!
      let uploadFileNames = [];
      let sourceFileNames = [];
      let oldFiles = [];

      // req.files 배열의 파일정보를 가져와서 위의 배열에 추가한다.
      for (const file of req.files) {
        uploadFileNames.push(file.path);
        sourceFileNames.push(file.originalname);
        oldFiles.push(file.filename);
      }

      res.json({
        uploadFileName: uploadFileNames, // multer 가 보낸 파일을 받는 것
        sourceFileName: sourceFileNames, // 원본 파일 받는 것
        oldFile: oldFiles,
      });
    }
  });
};

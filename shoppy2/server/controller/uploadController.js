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

const upload = multer({ storage: storage }).single("file");

/**
 *  파일업로드 실행 함수
 */
export const fileUpload = (req, res) => {
  //   res.end();
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      const oldFile = req.body.oldFile;

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

      res.json({
        uploadFileName: res.req.file.path, // multer 가 보낸 파일을 받는 것
        sourceFileName: req.file.originalname, // 원본 파일 받는 것
        oldFile: res.req.file.filename,
      });
    }
  });
};

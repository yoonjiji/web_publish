import { useEffect, useState } from "react";
import PackageContent from "./PackageContent.jsx";

export default function Package() {
  const [plist, setPlist] = useState([]);
  useEffect(() => {
    fetch("/data/cgv_content.json")
      .then((data) => data.json())
      .then((jsonData) => setPlist(jsonData.packageList))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div class="content-event-special">
      <div className="content-package content-padding">
        {plist &&
          plist.map((object) => (
            <PackageContent title={object.title} list={object.list} />
          ))}
      </div>
    </div>
  );
}

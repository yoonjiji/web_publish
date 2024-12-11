import { useEffect, useState } from "react";
import PackageContent from "./content/PackageContent";
import { fetchJSON } from "../js/commons";

export default function Package() {
  const [plist, setPlist] = useState([]);
  useEffect(() => {
    fetchJSON("/list/cgv_content.json").then((result) =>
      setPlist(result.packageList).catch((error) => console.log(error))
    );
  }, []);

  return (
    <div class="content-package content-padding">
      {plist.map((object) => (
        <div class="content-border">
          <PackageContent title={object.title} list={object.list} />
        </div>
      ))}
    </div>
  );
}

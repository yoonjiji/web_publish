import { useEffect, useState } from "react";
import Button from "./Button.jsx";
import ButtonList from "./ButtonList.jsx";

export default function AppButton() {
  const [buttonList, setButtonList] = useState([]);
  useEffect(() => {
    fetch("data/button_names.json")
      .then((result) => result.json())
      .then((jsonDeta) => setButtonList(jsonDeta))
      .catch();
  }, []);

  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button name="All" type="button" />
        <Button name="Front-end" type="button" />
        <Button name="Back-end" type="button" />
        <Button name="Mobile" type="button" />
        <Button name="Submit" type="submit" />
        <Button name="Reset" type="reset" />
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <ButtonList list={buttonList} />
      </div>
    </>
  );
}

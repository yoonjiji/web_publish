import Header from "./Header.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";
import AvatarImage from "../AvatarImage.jsx";
import AvatarList from "../AvatarList.jsx";
import Button from "../Button.jsx";
import Menu from "../Menu.jsx";
import ButtonList from "../ButtonList.jsx";

export default function AppLayout() {
  const avatarList = [
    { img: "/images/people1.webp", name: "Smith" },
    { img: "/images/people2.webp", name: "James" },
    { img: "/images/people3.webp", name: "Sujin" },
  ];
  const buttonList = [
    { type: "button", name: "Join" },
    { type: "button", name: "Support" },
    { type: "button", name: "Mypage" },
  ];

  return (
    <>
      <Header>
        <AvatarImage img="/images/people1.webp" />
        <Button name="Login" type="button" />
        <Menu name="로그인" href="#home" bg="gray" color="white" />
      </Header>
      <Body>
        <AvatarList list={avatarList} />
      </Body>
      <Footer>
        <ButtonList list={buttonList} />
      </Footer>
    </>
  );
}

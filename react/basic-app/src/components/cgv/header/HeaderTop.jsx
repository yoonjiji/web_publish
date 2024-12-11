import Logo from "./Logo.jsx";
import HeaderTopImg from "./HeaderTopImg.jsx";
import HeaderTopMenuList from "./HeaderTopMenuList.jsx";

export default function HeaderTop() {
  return (
    <div className="header-top">
      <Logo />
      <HeaderTopImg />
      <HeaderTopMenuList />
    </div>
  );
}

import HeaderBottomMeunList from "./HeaderBottomMeunList.jsx";
import HeaderBottomSearch from "./HeaderBottomSearch.jsx";

export default function HeaderBottom() {
  return (
    <div class="header-bottom">
      <div class="header-bottom-content">
        <HeaderBottomMeunList />
        <HeaderBottomSearch />
      </div>
    </div>
  );
}

export default function HeaderTopMenu({ href, src, text }) {
  return (
    <a href={href} target="_parent" className="header-menu-icon">
      <img src={src} alt="로그인" />
      <span>{text}</span>
    </a>
  );
}

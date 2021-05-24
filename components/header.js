import Link from "next/link";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/calculator">calculator</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;

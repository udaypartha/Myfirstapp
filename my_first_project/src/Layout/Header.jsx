import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/mypath"}>nevigate</Link>
      <Link to={"/MapData"}>mape data</Link>
      <Link to={"/myeffect"}>Use Effect and map</Link>
      <Link to={"/FormHandling"}>Form Handling</Link>
      <Link to={"/ApiConnectivity"}>ApiConnectivity</Link>
      <Link to={"/ClMethod"}>ClMethod</Link>
    </>
  );
}

export default Header;
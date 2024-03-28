import "./style.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="title">
        <Link to="/">
          <h1>Github API</h1>
        </Link>
      </div>
    </header>
  );
}
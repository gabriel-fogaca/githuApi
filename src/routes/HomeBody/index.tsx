import "./style.css";
import { Link } from "react-router-dom";
import Button from "../../../src/components/Button";

export default function HomeBody() {
  return (
    <main>
      <section className="title">
        <div className="title-info">
          <h1>Desafio Github API </h1>
          <h3>DevSuperior - Escola de programação</h3>
        </div>
        <Link to="/meet">
          <Button text="Começar" />
        </Link>
      </section>
    </main>
  );
}
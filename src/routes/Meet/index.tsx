import "./style.css";
import * as objectService from "../services/object-service";
import { useState } from "react";
import Card from "../../components/Card";
import { ObjectDTO } from "../../models/object";


export default function Search() {
  const [user, setUser] = useState("");
  const [error, setError] = useState();

  const [obj, setObj] = useState<ObjectDTO>();

  function handleUserChange(event: any) {
    setUser(event.target.value);
  }

  function handleBtnOnClick(event: any) {
    event.preventDefault();

    objectService
      .findyByUser(user)
      .then((response) => {
        setObj(response.data);
      })
      .catch((error) => {
        setError(error.response.data);
        setObj(undefined);
      });
  }

  return (
    <main>
      <section className="container card-visit">
        <form>
          <div className="card-apresentation">
            <div className="card-apresentation-info">
              <h2>Encontre um perfil Github</h2>
              <input
                name="user"
                value={user}
                type="text"
                autoFocus
                placeholder="Usuário Github"
                onChange={handleUserChange}
              />

              <button onClick={handleBtnOnClick} type="submit">
                Encontrar
              </button>
            </div>
          </div>
        </form>

        {(obj && <Card object={obj} />) ||
          (error && <h1 className="info-error">Erro ao buscar usuário</h1>)}
      </section>
    </main>
  );
}
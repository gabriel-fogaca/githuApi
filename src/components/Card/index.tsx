import "./style.css";
import { ObjectDTO } from "../../models/object";

type Props = {
    object: ObjectDTO;
};

export default function Card({ object }: Props) {
    return (
        <section className="card-presentation">
            <div className="card-presentation-img">
                <img src={object.avatar_url} alt={object.name} />
            </div>
            <div className="card-info">
                <h3>Informações</h3>
                <div>
                    <div className="card-info-user">
                        <p>Perfil:</p>  <a href={object.url}>{object.url}</a>
                    </div>
                    <div className="card-info-user">
                        <p>Seguidores:</p> {object.followers}
                    </div>
                    <div className="card-info-user">
                        <p>Localidade:</p>  {object.location}
                    </div>
                    <div className="card-info-user">
                        <p>Nome:</p>  {object.name}
                    </div>
                </div>
            </div>
        </section>
    );
}
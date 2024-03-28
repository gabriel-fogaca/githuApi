import "./style.css";

type Props = {
  text: string;
}

export default function Button({ text }: Props) {
  return (
    <div className="btn">{text}</div>
  );
}
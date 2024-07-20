import { useIndicador } from "../../hooks/Dashboard/useIndicador";

export default function Indicador() {
  const { valor } = useIndicador();
  return (
    <div className="indicador container">
      <MenuButtons />
      <Content valor={valor} />
    </div>
  );
}

const MenuButtons = () => {
  return (
    <div className="menu-buttons">
      <img src="./imgs/money.png" alt="money" />
    </div>
  );
};

const Content = ({ valor }) => {
  return (
    <div className="content">
      <div className="valor">{valor}</div>
      <div>Valor Total</div>
    </div>
  );
};

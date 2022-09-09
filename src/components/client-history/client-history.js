import ClientCard from "../client-card/client-card";
import "./client-history.scss";

function ClientHistory() {
  const cardsCount = 5;
  return (
    <div className="client-hostory">
      <h2 className="client-history__title">Clients history (27)</h2>
      <div className="clients__list">
        <ClientCard />
        <ClientCard />
        <ClientCard />
      </div>
      <p className="client-history__button" >See more</p>
    </div>
  )
}

export default ClientHistory;
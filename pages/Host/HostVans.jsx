import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
  const [vans, setvans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setvans(data.vans));
  }, []);

  const hostVansEls = vans.map((van) => (
    <Link
      to={`/host/vans/${van.id}`}
      key={van.id}
      className="host-van-link-wrapper"
    >
      <div className="host-van-single">
        <img src={van.imageUrl} alt={`photo of ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ));
  return (
    <section>
      
      <h1 className="host-van-title">Your listed vans</h1>
      <div className="host-van-list">
        {vans.length > 0 ? (
          <section>{hostVansEls}</section>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
}
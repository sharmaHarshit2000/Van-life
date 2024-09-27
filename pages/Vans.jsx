import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../api";

export default function Vans() {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  useEffect(() => {
    async function loadVans() {
      const data = await getVans();
      setVans(data.vans);
    }
    loadVans();
  }, []);

  const displayVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vansElements = displayVans.map((van) => (
    <div key={van.id} className="van-title">
      <Link
        to={van.id}
        state={{
          search: `?${searchParams.toString()}`,
          type: typeFilter,
        }}
      >
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          className={`van-type simple ${
            typeFilter === "simple" ? "selected" : null
          }`}
          onClick={() => handleFilterChange("type", "simple")}
        >
          Simple
        </button>
        <button
          className={`van-type luxury ${
            typeFilter === "luxury" ? "selected" : null
          }`}
          onClick={() => handleFilterChange("type", "luxury")}
        >
          Luxury
        </button>
        <button
          className={`van-type rugged ${
            typeFilter === "rugged" ? "selected" : null
          }`}
          onClick={() => handleFilterChange("type", "rugged")}
        >
          Rugged
        </button>
        {typeFilter ? (
          <button
            className="van-type clear-filter"
            onClick={() => handleFilterChange("type", null)}
          >
            Clear filter
          </button>
        ) : null}
      </div>
      <div className="van-list">{vansElements}</div>
    </div>
  );
}

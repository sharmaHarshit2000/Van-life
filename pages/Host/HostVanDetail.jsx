import { Link, Outlet, NavLink, useLoaderData } from "react-router-dom";
import { getHostVanById } from "../../api";
import { requiredAuth } from "../../utils";

export async function loader({ params, request }) {
  await requiredAuth(request);
  return await getHostVanById(params.id); 
}
export default function HostVanDetail() {
  const { van: currentVan } = useLoaderData();

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  if (!currentVan) {
    return <h2>Loading van...</h2>;
  }

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} alt={currentVan.name} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>

        <nav className="host-van-detail-nav">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="."
            end
          >
            Details
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="pricing"
          >
            Pricing
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="photos"
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={{ currentVan }} />
      </div>
    </section>
  );
}

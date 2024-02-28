import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

function Breadcrumbs({ game, product }) {
  const params = useParams();
  const location = useLocation();
  const page = location.pathname.split("/")[1];
  const { gameUrl, productUrl } = params;

  return (
    <div className="mb-4 flex items-center font-semibold ">
      <Link to={"/"} className="pr-2 text-lg hover:text-fontCoolGray">
        Home
      </Link>
      {gameUrl && (
        <>
          <FaAngleRight className="text-lightPurple" />
          {gameUrl && productUrl && (
            <Link
              to={`/products/${gameUrl}`}
              disabled
              className={`px-2 text-lg hover:text-fontCoolGray`}
            >
              {game}
            </Link>
          )}
          {gameUrl && !productUrl && (
            <span className={`px-2 text-lg text-lightPurple`}>{game}</span>
          )}
        </>
      )}
      {gameUrl && productUrl && (
        <>
          <FaAngleRight className="text-lightPurple" />
          <span
            className={`${gameUrl && productUrl ? "text-lightPurple" : ""} pl-2 text-lg`}
          >
            {product}
          </span>
        </>
      )}
      {!gameUrl && !productUrl && (
        <>
          <FaAngleRight className="text-lightPurple" />
          <span className={`pl-2 text-lg uppercase text-lightPurple`}>
            {page}
          </span>
        </>
      )}
    </div>
  );
}

export default Breadcrumbs;

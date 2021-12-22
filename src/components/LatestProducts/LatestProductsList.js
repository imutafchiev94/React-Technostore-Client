import { useState, useEffect } from "react";
import LatestProductCard from "./LatestProductCard/LatestProductCard";
import * as productService from "../../services/productService";

const LatestProductsList = () => {
  const [LatestProducts, setLatestProducts] = useState([]);

  useEffect(
    () =>
      productService.getLatestProducts().then((result) => {
        setLatestProducts(result.splice(0, 4));
      }),
    []
  );

  return (
    <section>
      <div className="recommended_items">
        <h2 className="title text-center">Latest Products</h2>

        <div
          id="recommended-item-carousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="item active">
              {LatestProducts.length > 0 ? (
                LatestProducts.map((x) => (
                  <LatestProductCard key={x._id} product={x} />
                ))
              ) : (
                <p>There have no latest products</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProductsList;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductsData } from "../../dataContext/productsCtx";
import { useHeaderData } from "../../dataContext/headerCtx";
import { useCartData } from "../../dataContext/cartCtx";
import { Filter } from "../../models/Filter";
import formatter from "../../utils/formatter";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { FaCartShopping, FaCheck } from "react-icons/fa6";

function Product() {
  // CONTEXT
  const { gameUrl, productUrl } = useParams();
  const { isLoading, error, products } = useProductsData();
  const { currency } = useHeaderData();
  const { setCurrentlyAddedProduct } = useCartData();

  // HOOKS
  const [game, setGame] = useState(null);
  const [productData, setProductData] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [basePrice, setBasePrice] = useState(5.0);
  const [price, setPrice] = useState(5.0);
  const [isAddButtonClicked, setIsAddButtonClicked] = useState();

  useEffect(() => {
    if (!isLoading && products) {
      const game = products.find((game) => game.url === gameUrl);
      setGame(game);
      if (game) {
        const product = game.productList.find(
          (product) => product.url === productUrl,
        );
        if (product) {
          setProductData(product);
          // Reseting filters and price if the product changes
          setSelectedFilters({});
          setBasePrice(product.basePrice);
          setPrice(product.basePrice);
        }
      }
    }
  }, [isLoading, products, gameUrl, productUrl]);

  // FILTERS
  const calculateAdjustedPrice = (basePrice, selectedFilters) => {
    let adjustedPrice = basePrice;

    // Iterate over selected filters
    Object.entries(selectedFilters).forEach(([filterName, filterValues]) => {
      // Find the filter object from the product's filters array
      const filter = productData.filters.find(
        (filter) => filter.name === filterName,
      );

      // Check if the filter exists and has multiplicators
      if (filter && filter.values) {
        if (Array.isArray(filterValues)) {
          // If filterValues is an array (for checkboxes)
          filterValues.forEach((value) => {
            const selectedOption = filter.values.find(
              (option) => option.title === value,
            );
            if (selectedOption && selectedOption.multiplicator) {
              adjustedPrice += basePrice * selectedOption.multiplicator;
            }
          });
        } else if (filter.type === "Range") {
          const steps = filter.values[0].step;
          const min = filter.values[0].min;
          const value = Number(filterValues);
          const start = value - min;
          adjustedPrice += basePrice * (start / steps);
        } else {
          // If filterValues is a single value (for radio buttons or range)
          const selectedOption = filter.values.find(
            (option) => option.title === filterValues,
          );
          if (selectedOption && selectedOption.multiplicator) {
            adjustedPrice += basePrice * selectedOption.multiplicator;
          }
        }
      }
    });
    return adjustedPrice;
  };

  const handleFilterChange = (name, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));

    // Calculate adjusted price based on the selected filters
    const newPrice = calculateAdjustedPrice(productData.basePrice, {
      ...selectedFilters,
      [name]: value,
    });
    setPrice(newPrice);
  };

  const filters = productData
    ? productData.filters.map((filterData) => {
        return {
          ...filterData,
          onChange: handleFilterChange,
        };
      })
    : [];

  // SUBMIT

  const submitProductHandler = () => {
    setCurrentlyAddedProduct({
      id: Math.floor(Math.random() * 100000),
      product: productData,
      price: price,
      filters: selectedFilters,
    });
    setIsAddButtonClicked((prevState) => !prevState);
    setTimeout(() => {
      setIsAddButtonClicked((prevState) => !prevState);
    }, 1500);
  };

  return (
    <>
      {error && <div>Something went wrong</div>}
      {isLoading && <div>Loading...</div>}
      {!isLoading && productData && (
        <div className="flex min-h-screen flex-col items-center justify-start bg-darkPurple">
          <div
            className="min-h-[220px] w-full md:min-h-[400px]"
            style={{
              background: `linear-gradient(rgba(28,17,36,0) 0%, rgb(28,16,36) 100%), linear-gradient(rgba(28,17,36,0) 0%, rgb(28,16,36) 100%),linear-gradient(rgba(28,17,36,0) 0%, rgb(28,16,36) 100%), url(${game.bg}) center center / cover no-repeat`,
            }}
          ></div>
          <div className="flex flex-col px-8 xl:w-[836px] xl:px-0 2xl:w-[1136px] 3xl:w-[1516px]">
            <Breadcrumbs game={game.title} product={productData.title} />
            <h2 className="mb-8 text-wrap text-center lg:text-start xl:mb-14">
              {game.title}: {productData.title}
            </h2>
            <div className="flex w-full flex-col-reverse items-center justify-center gap-8 lg:flex-row lg:items-start lg:justify-between ">
              <div className="w-[50%]">
                <h3>Product description</h3>
                <p className="mb-8">{productData.description}</p>
                <div
                  className="mb-8 border-l-2 border-yellow-300 p-2"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(253, 224, 71, 0.15) 0%, rgba(253, 224, 71, 0.03))",
                  }}
                >
                  <p>
                    <b>Note:</b> Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Totam nemo temporibus excepturi est quod
                    saepe a reprehenderit quisquam necessitatibus
                    exercitationem?
                  </p>
                </div>
                <p className="mb-8 text-sepiaRed">
                  Our boosters never ask you for your items back, DO NOT give
                  your items to anyone.
                </p>
                <h3>Some other content</h3>
                <ul className="mb-8 ml-6 list-disc">
                  <li>Bullet point</li>
                  <li>Bullet point</li>
                  <li>Bullet point</li>
                  <li>Bullet point</li>
                  <li>Bullet point</li>
                </ul>
                <h3>Some other information</h3>
                <p className="mb-8">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
                  veritatis maiores non, voluptate veniam vel eos, omnis minima
                  temporibus cupiditate velit? Vitae possimus modi ab, quidem
                  dolorem illo tempore dolor quis est nemo cum numquam
                  temporibus eum voluptatum. At in optio quia, corporis illum
                  quasi adipisci quidem? Quo minima amet repellat id, sapiente
                  nesciunt dolore, mollitia officiis neque delectus maxime!
                  Itaque assumenda nihil velit magni culpa sapiente sit. Eos,
                  laboriosam assumenda incidunt architecto exercitationem at
                  laudantium dolorum quisquam, nisi accusantium earum atque
                  necessitatibus molestias aliquam! Debitis consequatur quisquam
                  quis sequi, doloribus ducimus ex rerum veritatis, nemo maxime
                  iste, asperiores id.
                </p>
              </div>
              <section className="border-md min-w-[250px] overflow-hidden rounded-md border-8 border-lightPurple/50 xs:min-w-[400px]">
                <div className="p-4">
                  <div className="filterSection">
                    {filters.map((filter, index) => (
                      <div key={index} className="mb-4">
                        <h5 className="mb-2">{filter.name}</h5>
                        {/* Render UI elements based on filter type */}
                        <Filter
                          {...filter}
                          basePrice={basePrice}
                          currencySymbol={currency.curSymbol}
                        />
                        <hr />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4>Total Price:</h4>
                    </div>
                    <div className="text-3xl font-bold">
                      <span>{formatter(price, currency.curSymbol)}</span>
                    </div>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <button
                    className="relative flex min-h-[48px] w-full flex-col items-center justify-center overflow-hidden rounded-md"
                    onClick={() => submitProductHandler()}
                  >
                    <div
                      className={`${isAddButtonClicked ? "top-[-48px]" : "top-0"} absolute w-full transition-[top] duration-500 ease-in-out`}
                    >
                      <div className="addedButton-incomplete flex w-full items-center justify-center gap-2 bg-mediumPurple p-3 hover:bg-lightPurple">
                        <FaCartShopping size={"22px"} />
                        <span className="">Add to Cart</span>
                      </div>
                      <div className="addedButton-complete flex w-full items-center justify-center gap-2 bg-lemonGreen p-3">
                        <FaCheck size={"22px"} />
                        <span className="">Added</span>
                      </div>
                    </div>
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;

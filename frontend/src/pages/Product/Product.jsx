import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useData } from "../../dataContext/dataCtx";

function Product() {
  const { gameUrl, productUrl } = useParams();
  const { products } = useData();

  const game = products.find((game) => game.url === gameUrl);
  const product = game.productList.find(
    (product) => product.url === productUrl,
  );

  const gameBg = game ? game.bg : null;
  const gameTitle = game ? game.title : null;
  const productBg = game ? product.imgSrc : null;
  const productTitle = game ? product.title : null;
  const productDescription = game ? product.description : null;

  console.log("rendering Product");

  return (
    <div className="flex min-h-screen flex-col items-center justify-start">
      <div
        className="min-h-[400px] w-full"
        style={{
          background: `linear-gradient(0deg, rgba(28,16,36,1) 0%, rgba(28,16,36,0) 50%, rgba(28,16,36,1) 100%), url(${gameBg}) center center / cover no-repeat`,
        }}
      ></div>
      <div className="flex flex-col xl:w-[836px] 2xl:w-[1136px] 3xl:w-[1516px]">
        <Link
          to={`/products/${gameUrl}`}
          className="my-4 w-fit rounded-md bg-lightGrey px-4 py-3 font-semibold text-black"
        >
          Go Back
        </Link>
        <div className="flex w-full items-start justify-between gap-8">
          <div>
            <h2 className="mb-14">
              {gameTitle}: {productTitle}
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              modi unde qui eius doloremque. Quidem, minus itaque voluptatem
              nemo nesciunt non dicta. Delectus voluptate quos odio totam?
              Aliquid necessitatibus mollitia dolorum aperiam illo modi minima
              perferendis odio consectetur. Nam ipsam veritatis illo commodi et
              totam ad saepe ipsum voluptates doloribus, nesciunt vitae
              molestiae libero impedit a numquam? Atque accusantium magni porro
              soluta numquam sunt eligendi tempore rem dolor repudiandae.
              Voluptatum ab ullam necessitatibus voluptates ut facilis suscipit
              quo fugit minima velit quasi cupiditate nisi distinctio,
              architecto culpa tempora qui quas cum? In ad asperiores sint
              necessitatibus, alias sit dolor est?
            </p>
            <p>{productDescription}</p>
          </div>
          <aside className="border-md min-w-[350px] overflow-hidden rounded-md border-8 border-lightPurple/50">
            <div
              className="flex min-h-[150px] flex-col items-start justify-center px-4"
              style={{
                background: `linear-gradient(0deg, rgba(28,16,36,1) 0%, rgba(28,16,36,0.5) 100%), url(${productBg}) top center / cover no-repeat`,
              }}
            >
              <h3>{productTitle}</h3>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <h5 className="mb-2">Filter 1</h5>
                <div className="flex flex-wrap gap-3">
                  <button className="rounded-md border border-white/30 px-4 py-2 hover:border-lightPurple hover:bg-lightPurple">
                    Option
                  </button>
                  <button className="rounded-md border border-white/30 px-4 py-2 hover:border-lightPurple hover:bg-lightPurple">
                    Option
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <h5 className="mb-2">Filter 2</h5>
                <div className="flex flex-wrap gap-3">
                  <button className="rounded-md border border-white/30 px-4 py-2 hover:border-lightPurple hover:bg-lightPurple">
                    Option
                  </button>
                  <button className="rounded-md border border-white/30 px-4 py-2 hover:border-lightPurple hover:bg-lightPurple">
                    Option
                  </button>
                  <button className="rounded-md border border-white/30 px-4 py-2 hover:border-lightPurple hover:bg-lightPurple">
                    Option
                  </button>
                  <button className="rounded-md border border-white/30 px-4 py-2 hover:border-lightPurple hover:bg-lightPurple">
                    Option
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <h5 className="mb-2">Filter 3</h5>
                <div className="flex flex-wrap gap-3">
                  <button className="rounded-md border border-white/30 px-4 py-2 hover:border-lightPurple hover:bg-lightPurple">
                    Option
                  </button>
                  <button className="rounded-md border border-white/30 px-4 py-2 hover:border-lightPurple hover:bg-lightPurple">
                    Option
                  </button>
                  <button className="rounded-md border border-white/30 px-4 py-2 hover:border-lightPurple hover:bg-lightPurple">
                    Option
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <h5 className="mb-2">Filter 4</h5>
                <div className="flex flex-wrap gap-3">
                  <button className="rounded-md border border-white/30 px-4 py-2 hover:border-lightPurple hover:bg-lightPurple">
                    Option
                  </button>
                  <button className="rounded-md border border-white/30 px-4 py-2 hover:border-lightPurple hover:bg-lightPurple">
                    Option
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Product;

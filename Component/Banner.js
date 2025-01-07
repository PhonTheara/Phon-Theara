import React from "react";

const Banner = () => {
  return (
    <>
      <section
        className="py-3"
        style={{
          backgroundImage: 'url("images/background-pattern.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-blocks">
                <div className="banner-ad large bg-info block-1">
                  <div className="swiper main-swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="row banner-content p-5">
                          <div className="content-wrapper col-md-7">
                            <div className="categories my-3">100% natural</div>
                            <h3 className="display-4">
                              Fresh Smoothie &amp; Summer Juice
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Dignissim massa diam elementum.
                            </p>
                            <a
                              href="#"
                              className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 px-4 py-3 mt-3"
                            >
                              Shop Now
                            </a>
                          </div>
                          <div className="img-wrapper col-md-5">
                            <img
                              src="images/product-thumb-1.png"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="row banner-content p-5">
                          <div className="content-wrapper col-md-7">
                            <div className="categories mb-3 pb-3">
                              100% natural
                            </div>
                            <h3 className="banner-title">
                              Fresh Smoothie &amp; Summer Juice
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Dignissim massa diam elementum.
                            </p>
                            <a
                              href="#"
                              className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
                            >
                              Shop Collection
                            </a>
                          </div>
                          <div className="img-wrapper col-md-5">
                            <img
                              src="images/product-thumb-1.png"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="row banner-content p-5">
                          <div className="content-wrapper col-md-7">
                            <div className="categories mb-3 pb-3">
                              100% natural
                            </div>
                            <h3 className="banner-title">
                              Heinz Tomato Ketchup
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Dignissim massa diam elementum.
                            </p>
                            <a
                              href="#"
                              className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
                            >
                              Shop Collection
                            </a>
                          </div>
                          <div className="img-wrapper col-md-5">
                            <img
                              src="images/product-thumb-2.png"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-pagination" />
                  </div>
                </div>
                <div
                  className="banner-ad bg-success-subtle block-2"
                  style={{
                    background: 'url("images/ad-image-1.png") no-repeat',
                    backgroundPosition: "right bottom",
                  }}
                >
                  <div className="row banner-content p-5">
                    <div className="content-wrapper col-md-7">
                      <div className="categories sale mb-3 pb-3">20% off</div>
                      <h3 className="banner-title">Fruits &amp; Vegetables</h3>
                      <a
                        href="#"
                        className="d-flex align-items-center nav-link"
                      >
                        Shop Collection{" "}
                        <svg width={24} height={24}>
                          <use xlinkHref="#arrow-right" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="banner-ad bg-danger block-3"
                  style={{
                    background: 'url("images/ad-image-2.png") no-repeat',
                    backgroundPosition: "right bottom",
                  }}
                >
                  <div className="row banner-content p-5">
                    <div className="content-wrapper col-md-7">
                      <div className="categories sale mb-3 pb-3">15% off</div>
                      <h3 className="item-title">Baked Products</h3>
                      <a
                        href="#"
                        className="d-flex align-items-center nav-link"
                      >
                        Shop Collection{" "}
                        <svg width={24} height={24}>
                          <use xlinkHref="#arrow-right" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* / Banner Blocks */}
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header d-flex flex-wrap justify-content-between mb-5">
                <h2 className="section-title">Category</h2>
                <div className="d-flex align-items-center">
                  <a href="#" className="btn-link text-decoration-none">
                    View All Categories →
                  </a>
                  <div className="swiper-buttons">
                    <button className="swiper-prev category-carousel-prev btn btn-yellow">
                      ❮
                    </button>
                    <button className="swiper-next category-carousel-next btn btn-yellow">
                      ❯
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="category-carousel swiper">
                <div className="swiper-wrapper">
                  <a
                    href="index.html"
                    className="nav-link category-item swiper-slide"
                  >
                    <img
                      src="images/icon-vegetables-broccoli.png"
                      alt="Category Thumbnail"
                    />
                    <h3 className="category-title">Fruits &amp; Veges</h3>
                  </a>
                  <a
                    href="index.html"
                    className="nav-link category-item swiper-slide"
                  >
                    <img
                      src="images/icon-bread-baguette.png"
                      alt="Category Thumbnail"
                    />
                    <h3 className="category-title">Breads &amp; Sweets</h3>
                  </a>
                  <a
                    href="index.html"
                    className="nav-link category-item swiper-slide"
                  >
                    <img
                      src="images/icon-soft-drinks-bottle.png"
                      alt="Category Thumbnail"
                    />
                    <h3 className="category-title">Fruits &amp; Veges</h3>
                  </a>
                  <a
                    href="index.html"
                    className="nav-link category-item swiper-slide"
                  >
                    <img
                      src="images/icon-wine-glass-bottle.png"
                      alt="Category Thumbnail"
                    />
                    <h3 className="category-title">Fruits &amp; Veges</h3>
                  </a>
                  <a
                    href="index.html"
                    className="nav-link category-item swiper-slide"
                  >
                    <img
                      src="images/icon-animal-products-drumsticks.png"
                      alt="Category Thumbnail"
                    />
                    <h3 className="category-title">Fruits &amp; Veges</h3>
                  </a>
                  <a
                    href="index.html"
                    className="nav-link category-item swiper-slide"
                  >
                    <img
                      src="images/icon-bread-herb-flour.png"
                      alt="Category Thumbnail"
                    />
                    <h3 className="category-title">Fruits &amp; Veges</h3>
                  </a>
                  <a
                    href="index.html"
                    className="nav-link category-item swiper-slide"
                  >
                    <img
                      src="images/icon-vegetables-broccoli.png"
                      alt="Category Thumbnail"
                    />
                    <h3 className="category-title">Fruits &amp; Veges</h3>
                  </a>
                  <a
                    href="index.html"
                    className="nav-link category-item swiper-slide"
                  >
                    <img
                      src="images/icon-vegetables-broccoli.png"
                      alt="Category Thumbnail"
                    />
                    <h3 className="category-title">Fruits &amp; Veges</h3>
                  </a>
                  <a
                    href="index.html"
                    className="nav-link category-item swiper-slide"
                  >
                    <img
                      src="images/icon-vegetables-broccoli.png"
                      alt="Category Thumbnail"
                    />
                    <h3 className="category-title">Fruits &amp; Veges</h3>
                  </a>
                  <a
                    href="index.html"
                    className="nav-link category-item swiper-slide"
                  >
                    <img
                      src="images/icon-vegetables-broccoli.png"
                      alt="Category Thumbnail"
                    />
                    <h3 className="category-title">Fruits &amp; Veges</h3>
                  </a>
                  <a
                    href="index.html"
                    className="nav-link category-item swiper-slide"
                  >
                    <img
                      src="images/icon-vegetables-broccoli.png"
                      alt="Category Thumbnail"
                    />
                    <h3 className="category-title">Fruits &amp; Veges</h3>
                  </a>
                  <a
                    href="index.html"
                    className="nav-link category-item swiper-slide"
                  >
                    <img
                      src="images/icon-vegetables-broccoli.png"
                      alt="Category Thumbnail"
                    />
                    <h3 className="category-title">Fruits &amp; Veges</h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header d-flex flex-wrap flex-wrap justify-content-between mb-5">
                <h2 className="section-title">Newly Arrived Brands</h2>
                <div className="d-flex align-items-center">
                  <a href="#" className="btn-link text-decoration-none">
                    View All Categories →
                  </a>
                  <div className="swiper-buttons">
                    <button className="swiper-prev brand-carousel-prev btn btn-yellow">
                      ❮
                    </button>
                    <button className="swiper-next brand-carousel-next btn btn-yellow">
                      ❯
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="brand-carousel swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="card mb-3 p-3 rounded-4 shadow border-0">
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img
                            src="images/product-thumb-11.jpg"
                            className="img-fluid rounded"
                            alt="Card title"
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body py-0">
                            <p className="text-muted mb-0">Amber Jar</p>
                            <h5 className="card-title">
                              Honey best nectar you wish to get
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card mb-3 p-3 rounded-4 shadow border-0">
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img
                            src="images/product-thumb-12.jpg"
                            className="img-fluid rounded"
                            alt="Card title"
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body py-0">
                            <p className="text-muted mb-0">Amber Jar</p>
                            <h5 className="card-title">
                              Honey best nectar you wish to get
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card mb-3 p-3 rounded-4 shadow border-0">
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img
                            src="images/product-thumb-13.jpg"
                            className="img-fluid rounded"
                            alt="Card title"
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body py-0">
                            <p className="text-muted mb-0">Amber Jar</p>
                            <h5 className="card-title">
                              Honey best nectar you wish to get
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card mb-3 p-3 rounded-4 shadow border-0">
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img
                            src="images/product-thumb-14.jpg"
                            className="img-fluid rounded"
                            alt="Card title"
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body py-0">
                            <p className="text-muted mb-0">Amber Jar</p>
                            <h5 className="card-title">
                              Honey best nectar you wish to get
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card mb-3 p-3 rounded-4 shadow border-0">
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img
                            src="images/product-thumb-11.jpg"
                            className="img-fluid rounded"
                            alt="Card title"
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body py-0">
                            <p className="text-muted mb-0">Amber Jar</p>
                            <h5 className="card-title">
                              Honey best nectar you wish to get
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card mb-3 p-3 rounded-4 shadow border-0">
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img
                            src="images/product-thumb-12.jpg"
                            className="img-fluid rounded"
                            alt="Card title"
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body py-0">
                            <p className="text-muted mb-0">Amber Jar</p>
                            <h5 className="card-title">
                              Honey best nectar you wish to get
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;

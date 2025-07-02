import { useContextElement } from "@/context/Context";
export default function BannerTabProduct({ product }) {
  const { setQuickViewItem } = useContextElement();
  return (
    <div className="collection-position-2 hover-img">
      <a className="img-style">
        <img
          className="lazyload"
          alt="banner-cls"
          src={product.imgSrc}
          width={710}
          height={945}
        />
        <div className="on-sale-wrap">
          <span className="on-sale-item">-25%</span>
        </div>
      </a>
      <div className="content cls-content">
        <div className="cls-info">
          <Link
            to={`/product-detail/${product.id}`}
            className="text-title link text-line-clamp-1"
          >
            {product.title}
          </Link>
          <div className="price">
            <span className="old-price">${product.oldPrice.toFixed(2)}</span>
            <span className="new-price">${product.price.toFixed(2)}</span>
          </div>
        </div>
        <a
          href="#quickView"
          onClick={() => setQuickViewItem(product)}
          data-bs-toggle="modal"
          className="cls-btn text-btn-uppercase"
        >
          Quick View
        </a>
      </div>
    </div>
  );
}

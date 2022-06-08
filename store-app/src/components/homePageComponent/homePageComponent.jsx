import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../store/productStore";
import "./homePageComponent.css";

const HomePageComponent = () => {
  const productList = useSelector((state) => state.productStore.data);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const carouselItems = [];

  productList.map((product) => {
    carouselItems.push(
      <div className="carousel-item">
        <img
          style={{ maxWidth: "600px", height: "300px" }}
          className="d-block w-100"
          src={product.image}
          alt="Second slide"
        />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="container" style={{ textAlign: "center" }}>
          <h1>İndirimdeki Ürünler!</h1>
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
            style={{ maxWidth: "600px", height: "400px", textAlign: "center",marginLeft:"300px" }}
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  style={{
                    width: "600px",
                    height: "400px",
                    textAlign: "center",
                  }}
                  className="d-block w-100"
                  src="https://resim.epey.com/632936/m_jbl-clip-4-1.jpg"
                  alt="First slide"
                />
              </div>

              {carouselItems}
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Önceki</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Sonraki</span>
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        {productList.map((product) => {
          return (
            <div className="col-md" key={product.id}>
              <div
                className="card m-2"
                style={{
                  width: "300px",
                  height: "400px",
                  borderRadius: "10px",
                }}
              >
                <img
                  className="card-img-top"
                  src={product.image}
                  style={{ width: "290px", height: "200px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <h6>{product.category}</h6>
                  <h6>{product.price} ₺</h6>
                  <span
                    href="#"
                    className="btn btn-primary"
                    onClick={() => {
                      navigate("/detail/" + product.id);
                    }}
                  >
                    Görüntüle
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePageComponent;

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CustomerProductListPageComponent = (props) => {
  const productList = useSelector((state) => state.productStore.data);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Tüm Ürünler</h1>
      <div className="row">
        {productList.map((product) => {
          return (
            <div className="col-sm" key={product.id}>
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
                    className="btn btn-primary m-1"
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

export default CustomerProductListPageComponent;

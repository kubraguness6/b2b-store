import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, addToChart } from "../../store/productStore";

const ProductDetailPageComponent = (props) => {
  const params = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.productStore.data).filter(
    (x) => x.id === params.id
  )[0];
  const user = useSelector((state) => state.authStore.currentUser);

  const [inputs, setInputs] = useState({});
  const newOrder = {
    product: {},
    quantity: 0,
    buyer: {},
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    inputs.product = product;
    inputs.buyer = user;
    dispatch(addToCart({ inputs: inputs }));
    alert(inputs);
  };

  return (
    <div>
      <div className="container">
        <div className="row" style={{ textAlign: "center" }}>
          <div className="container">
            <img
              src={product.image}
              alt=""
              style={{ maxWidth: "800px", maxHeight: "600px" }}
            />
          </div>
        </div>

        <div className="row">
          <h1 style={{ textAlign: "center" }}>{product.name}</h1>
        </div>

        <div className="row">
          <p style={{ textAlign: "center" }}>{product.description}</p>
        </div>

        <div className="row">
          <h6 style={{ textAlign: "center" }}>Kategori:</h6>
          <h6 style={{ textAlign: "center" }}>{product.category}</h6>
        </div>
        <div className="row">
          <h6 style={{ textAlign: "center" }}>Stok Adedi:</h6>
          <h6 style={{ textAlign: "center" }}>{product.stockAmount}</h6>
        </div>
        <div className="row">
          <h6 style={{ textAlign: "center" }}>Fiyat:</h6>
          <h6 style={{ textAlign: "center" }}>{product.price} ₺</h6>
        </div>
        <div className="row">
          <h6 style={{ textAlign: "center" }}>Satıcı: </h6>
          <h6 style={{ textAlign: "center" }}>{product?.seller?.fullName}</h6>
        </div>
        <div className="row">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Adet:</label>
              <input
                style={{ width: "200px" }}
                className="form-control"
                type="number"
                name="quantity"
                value={inputs.quantity}
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-success mt-2" type="submit">
              Sepete Ekle
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPageComponent;

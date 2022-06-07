import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../store/productStore";

const ProductFormComponent = (props) => {
  const dispatch = useDispatch();

  const user=useSelector((state)=>state.authStore.currentUser)

  const [inputs, setInputs] = useState({});

  const newProduct = {
    id: 0,
    name: "",
    category: "",
    image: "",
    description: "",
    stockAmount: "",
    price: 0,
    seller:{}
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    inputs.seller=user;
    dispatch(addProduct({ inputs: inputs }));
    alert(inputs);
  };

  useEffect(() => {
    //  console.log(inputs);
  }, [inputs]);

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Ürün Ekle</h1>
      <div className="card">
        <div className="container m-2">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Ürün ID:</label>
              <input
                className="form-control"
                type="text"
                name="id"
                value={inputs.id || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Ürün Adı:</label>
              <input
                className="form-control"
                type="text"
                name="name"
                value={inputs.name || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Ürün Kategori:</label>
              <input
                className="form-control"
                type="text"
                name="category"
                value={inputs.category || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Ürün Resmi:</label>
              <input
                className="form-control"
                type="text"
                name="image"
                value={inputs.image || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Ürün Açıklaması:</label>
              <textarea
                className="form-control"
                type="text"
                name="description"
                value={inputs.description || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Ürün Stok Adedi:</label>
              <input
                className="form-control"
                type="number"
                name="stockAmount"
                value={inputs.stockAmount || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Ürün Fiyatı:</label>
              <input
                className="form-control"
                type="number"
                name="price"
                value={inputs.price || ""}
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-success mt-2" type="submit">
              Ürün Ekle
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductFormComponent;

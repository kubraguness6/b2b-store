import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { purchaseProduct } from "../../store/productStore";

const PurchasePageComponent = (props) => {
  const cart = useSelector((state) => state.productStore.cart);
  const isLoggedIn=useSelector((state)=>state.authStore.value.isLoggedIn)

  const navigate = useNavigate();
  const dispatch = useDispatch();


  let totalPrice = 0;

  const calculateTotal = () => {
    cart.map((item) => {
      totalPrice += parseInt(item?.quantity) * parseInt(item.product.price);
    });
  };

  calculateTotal();

  const paymentInfo = {
    name: "",
    cardNumber: "",
    validThru: "",
    cvv: "",
  };

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //dispatch(addMovie({ inputs: inputs }));
  };

  const purchase = () => {
    if(isLoggedIn){
      navigate("/purchasesuccess");
      dispatch(purchaseProduct());
    }
    else{
      alert("Öncelikle Giriş Yapmalısınız!")
    }
    
  };

  return (
    <div className="container">
      <div className="container">
        <div className="row">
          <h1>Sepetiniz:</h1>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Resim</th>
                <th scope="col">Ürün Adı</th>
                <th scope="col">Kategori</th>
                <th scope="col">Adet</th>
                <th scope="col">Fiyat</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => {
                return (
                  <tr>
                    <th scope="row">{index}</th>
                    <td>
                      <img
                        src={item?.product?.image}
                        style={{ maxWidth: "100px", maxHeight: "30px" }}
                      ></img>
                    </td>
                    <td>{item?.product?.name}</td>
                    <td>{item?.product?.category}</td>
                    <td>{item?.quantity}</td>
                    <td>
                      {parseInt(item?.quantity) *
                        parseInt(item?.product?.price)}
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colspan="5">Toplam</td>
                <td>{totalPrice}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="row">
          <h1>Kart Bilgilerinizi Giriniz</h1>
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Kartın Üzerindeki İsim:</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={inputs.name || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Kart Numarası:</label>
                <input
                  className="form-control"
                  type="text"
                  name="cardNumber"
                  value={inputs.cardNumber || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Geçerlilik Tarihi:</label>
                <input
                  className="form-control"
                  type="text"
                  name="validThru"
                  value={inputs.validThru || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>CVV:</label>
                <input
                  className="form-control"
                  type="text"
                  name="cvv"
                  value={inputs.cvv || ""}
                  onChange={handleChange}
                />
              </div>
              {/* <input type="submit" /> */}
            </form>
            <span
              href="#"
              className="btn btn-success"
              onClick={() => {
                purchase();
              }}
            >
              Satın Al
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasePageComponent;

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PurchaseSuccessPageComponent = (props) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.authStore.currentUser);

  return (
    <div
      className="container"
      style={{ verticalAlign: "center", textAlign: "center" }}
    >
      <div className="card" style={{ borderRadius: "10px" }}>
        <div className="container">
          <h1>Sayın, {user?.fullName}</h1>
          <h1>SİPARİŞİNİZ BAŞARIYLA OLUŞTURULDU.</h1>
          <h4>{user?.email} adresine faturanız gönderildi.</h4>
          <button
            className="btn btn-success"
            onClick={() => {
              navigate("/");
            }}
          >
            Ana Sayfaya Dön
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseSuccessPageComponent;

import { useNavigate } from "react-router-dom";
import "./navigationBarComponent.css";

const NavigationBarComponent = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <a className="navbar-brand" href="#">
        B2B Store
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <span
              className="nav-link"
              onClick={() => {
                navigate("/");
              }}
            >
              Ana Sayfa <span className="sr-only">(current)</span>
            </span>
          </li>
          <li className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Ürünler
            </span>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <span
                className="dropdown-item"
                onClick={() => {
                  navigate("/list");
                }}
              >
                Tüm ürünler
              </span>
              <span
                className="dropdown-item"
                onClick={() => {
                  navigate("/category/computer");
                }}
              >
                Bilgisayar
              </span>
              <span
                className="dropdown-item"
                onClick={() => {
                  navigate("/category/television");
                }}
              >
                Televizyon
              </span>
              <span
                className="dropdown-item"
                onClick={() => {
                  navigate("/category/speaker");
                }}
              >
                Hoparlör
              </span>
              <span
                className="dropdown-item"
                onClick={() => {
                  navigate("/category/equipment");
                }}
              >
                Ekipman
              </span>
            </div>
          </li>
          <li className="nav-item active">
            <span
              className="nav-link"
              onClick={() => {
                navigate("/purchase");
              }}
            >
              Sepet <span className="sr-only">(current)</span>
            </span>
          </li>

          <li className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Kullanıcı
            </span>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <span
                className="dropdown-item"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Giriş Yap
              </span>
              <span
                className="dropdown-item"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Hesap Oluştur
              </span>
            </div>
          </li>
          <li className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Admin Paneli
            </span>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <span
                className="dropdown-item"
                onClick={() => {
                  navigate("/productForm");
                }}
              >
                Ürün Ekle
              </span>
              <span
                className="dropdown-item"
                onClick={() => {
                  navigate("/list");
                }}
              >
                Ürünleri Listele
              </span>
              <span
                className="dropdown-item"
                onClick={() => {
                  navigate("/salehistory");
                }}
              >
                Satış Geçmişi
              </span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBarComponent;

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./navigationBarComponent.css";

const NavigationBarComponent = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.authStore.currentUser);

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
                  navigate("/customerList");
                }}
              >
                Tüm ürünler
              </span>
              <span
                className="dropdown-item"
                onClick={() => {
                  navigate("/category/Bilgisayar");
                }}
              >
                Bilgisayar
              </span>
              <span
                className="dropdown-item"
                onClick={() => {
                  navigate("/category/Televizyon");
                }}
              >
                Televizyon
              </span>
              <span
                className="dropdown-item"
                onClick={() => {
                  navigate("/category/Hoparlör");
                }}
              >
                Hoparlör
              </span>
              <span
                className="dropdown-item"
                onClick={() => {
                  navigate("/category/Ekipman");
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
          {currentUser.role === "SUPER_ADMIN" && (
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
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBarComponent;

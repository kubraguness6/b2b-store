import { useSelector } from "react-redux";

const SaleHistoryPageComponent = (props) => {
  const user = useSelector((state) => state.authStore.currentUser);

  const sales = useSelector((state) => state.productStore.purchases).filter(
    (x) => x?.product?.seller?.id === user?.id
  );
  console.log(sales);

  return (
    <div className="container">
      {sales.map((sale) => {
        return <div className="card m-2">
            <div className="row m-2">
                <h6>Ürün Adı: </h6>
                <h6>{sale?.product?.name}</h6>
            </div>
            <div className="row m-2">
                <h6>Ürün Kategorisi: </h6>
                <h6>{sale?.product?.category}</h6>
            </div>
            <div className="row m-2">
                <h6>Ürün Açıklaması: </h6>
                <h6>{sale?.product?.description}</h6>
            </div>
            <div className="row m-2">
                <h6>Ürün Fiyatı: </h6>
                <h6>{sale?.product?.price}</h6>
            </div>
            <div className="row m-2">
                <h6>Ürün Adedi: </h6>
                <h6>{sale?.quantity}</h6>
            </div>
            <div className="row m-2">
                <h6>Alıcı İsmi: </h6>
                <h6>{sale?.buyer?.fullName}</h6>
            </div>
            <div className="row m-2">
                <h6>Alıcı E-maili: </h6>
                <h6>{sale?.buyer?.email}</h6>
            </div>
        </div>;
      })}
    </div>
  );
};

export default SaleHistoryPageComponent;

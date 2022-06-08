import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/authStore";

const LoginPageComponent = (props) => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({});

  const loginUser = {
    username: "",
    password: "",
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ inputs: inputs }));
  };

  // useEffect(() => {
  //   //  console.log(inputs);
  // }, [inputs]);

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Giriş Yap</h1>
      <div className="card" style={{ borderRadius: "10px" }}>
        <div className="contianer m-2">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Kullanıcı Adı:</label>
              <input
                className="form-control"
                type="text"
                name="username"
                value={inputs.username || ""}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Şifre:</label>
              <input
                className="form-control"
                type="password"
                name="password"
                value={inputs.password || ""}
                onChange={handleChange}
              />
              <button className="btn btn-success mt-2" type="submit">
                Giriş Yap
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPageComponent;

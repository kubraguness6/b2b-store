import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/authStore";

const SignUpPageComponent = (props) => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({});

  const newUser = {
    id: 0,
    username: "",
    fullName: "",
    email: "",
    role: "",
    password: "",
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser({ inputs: inputs }));
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Kayıt Ol</h1>

      <div className="card" style={{ borderRadius: "10px" }}>
        <div className="container m-2">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Kullanıcı ID:</label>
              <input
                className="form-control"
                type="text"
                name="id"
                value={inputs.id || ""}
                onChange={handleChange}
              />
            </div>

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
              <label>Kullanıcı Tam Adı:</label>
              <input
                className="form-control"
                type="text"
                name="fullName"
                value={inputs.fullName || ""}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Kullanıcı Mail:</label>
              <input
                className="form-control"
                type="text"
                name="email"
                value={inputs.email || ""}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Kullanıcı Rolü:</label>
              <input
                className="form-control"
                type="text"
                name="role"
                value={inputs.role || ""}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Kullanıcı Şifresi:</label>
              <input
                className="form-control"
                type="password"
                name="password"
                value={inputs.password || ""}
                onChange={handleChange}
              />
              <button className="btn btn-success mt-2" type="submit">
                Kayıt ol
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPageComponent;

import Navbar from "../components/Navbar.jsx";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useContext } from "react";
import "./Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/userContext/Context.jsx";
import { apiDomain } from "../Utils/Utils.jsx";

function Login() {
  const { user, admin, dispatch } = useContext(Context);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const schema = yup.object().shape({
    Name: yup.string().required("Name is required"),
    Password: yup
      .string()
      .min(4, "Password must be at least 4 characters long")
      .required("Password is required"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    if (data) {
      axios
        .post(`${apiDomain}/auth/loginAdmin`, data)
        .then(({ data }) => {
          if (data.token) {
            localStorage.setItem("admin", JSON.stringify(data));
            navigate("/admin/profile"); // Route to admin dashboard
          }
        })
        // .catch(({ response }) => {
        //   alert("Wrong credentials");
        // });
    }

    if (data) {
      axios
        .post(`${apiDomain}/auth/login`, data)
        .then(({ data }) => {
          if (data.token) {
            localStorage.setItem("user/profile", JSON.stringify(data));
            alert("Login successful");
            navigate("/user/profile"); // Route to user dashboard
          }
        })
        .catch(({ response }) => {
          alert(response.data.error);
        });
    }
  };

  return (
    <div className="login">
      <Navbar />

      <form onSubmit={handleSubmit(onSubmit)} className="form-container2">
        <h4 className="banner">Login Page</h4>
        <div className="form-group2">
          <input type="text" placeholder="Name" {...register("Name")} />
          <p className="error-message">{errors.Name?.message}</p>
        </div>

        <div className="form-group2">
          <input
            type={showPassword ? "text" : "password"} // Updated type attribute
            placeholder="Password"
            {...register("Password")}
          />
          {showPassword ? (
            <FaEyeSlash
              className="password-toggle1"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <FaEye
              className="password-toggle1"
              onClick={togglePasswordVisibility}
            /> // Updated icon for show password
          )}
          <p className="error-message">{errors.password?.message}</p>
        </div>

        <input type="submit" value="Login" className="login-btn" />
      </form>
      <div>Admin: Bill, password:1234567
            User:Sam, password:1234567
      </div>
    </div>
  );
}

export default Login;

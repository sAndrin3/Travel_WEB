import Navbar from "../components/Navbar.jsx";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import "./Register.css"
import {FaEye, FaEyeSlash} from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiDomain } from "../Utils/Utils.jsx";

function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  };
  const schema = yup.object().shape({
    Name: yup.string().required("Name is required"),
    Email: yup.string().email().required("Email is required"),
    ContactNumber: yup.string().required("ContactNumber must be a number"),
    Password: yup.string().min(4, "Password must be at least 4 characters long").required("Password is required"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    axios.post(`${apiDomain}/auth/register`, data)
    .then((response) => {
      response.data.message && alert(response.data.message)
      navigate("/login");
    })
    .catch(({response}) => {
      alert(response.data.error)
    });
  };

  return (
    <div className="register">
      <Navbar />

      <form onSubmit={handleSubmit(onSubmit)} className="form-container1">
        <div className="form-group1">
          <input
            type="text"
            placeholder="Name"
            {...register("Name")}
          />
          <p className="error-message">{errors.Name?.message}</p>
        </div>

        <div className="form-group1">
          <input
            type="text"
            placeholder="Email"
            {...register("Email")}
          />
          <p className="error-message">{errors.email?.message}</p>
        </div>

        <div className="form-group1">
          <input type="text" placeholder="ContactNumber" {...register("ContactNumber")} />
          <p className="error-message">{errors.contactNumber?.message}</p>
        </div>

        <div className="form-group1">
                  <input
                      type={showPassword ? "text" : "password"} // Updated type attribute
                      placeholder="Password"
                      {...register("Password")}
                  />
                  {showPassword ? (
                      <FaEyeSlash className="password-toggle" onClick={togglePasswordVisibility} />
                  ) : (
                      <FaEye className="password-toggle" onClick={togglePasswordVisibility} /> // Updated icon for show password
                  )}
                  <p className="error-message">{errors.password?.message}</p>
              </div>


        <input type="submit" value="Register" className="submit-btn" />
        <div className="login-button-container">
        <p>Already have an account?</p>
        <Link to="/login" className="login-button">Login</Link>
      </div>
      </form>
    </div>
  );
}

export default Register;

import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Alert,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FiEdit2, FiEye, FiEyeOff } from "react-icons/fi";
import Navbar from "../../Common/Navbar/Navbar";
import "./EmployerRegistration.css";
import logo from "../../../Assets/unnamed.png";
import axiosInstance from "../../Constants/Baseurl";
import { toast } from "react-toastify";

function EmployerRegistration() {
  const [formData, setFormData] = useState({
    employerId: "",
    employerName: "",
    name: "",
    workertype: "",
    address: "",
    location: "",
    city: "",
    state: "",
    contact: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      const file = files[0];
      setFormData((prevData) => ({
        ...prevData,
        [name]: file,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleImageUpload = (e) => {
    setProfileImage(URL.createObjectURL(e.target.files[0]));
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) {
      formErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      formErrors.name = "Name must contain only letters and spaces";
    }
    if (!formData.workertype) formErrors.workertype = "Worktype is required";
    if (!formData.address) formErrors.address = "Address is required";
    if (!formData.location) formErrors.location = "Location is required";
    if (!formData.city) {
      formErrors.city = "City is required";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.city)) {
      formErrors.city = "City must contain only letters and spaces";
    }
    if (!formData.state) {
      formErrors.state = "State is required";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.state)) {
      formErrors.city = "State must contain only letters and spaces";
    }
    if (!formData.contact) {
      formErrors.contact = "Contact Number is required";
    } else if (!/^[1-9]\d{9}$/.test(formData.contact)) {
      formErrors.contact = "Contact Number must be 10 digits";
    }
    if (parseInt(formData.contact, 10) <= 0) {
      formErrors.contact = "Contact Number must be greater than zero";
    }
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      formErrors.email = "Email is invalid";
    }
    if (!formData.password) formErrors.password = "Password is required";
    if (!formData.image) formErrors.image = "Image is required";
    if (formData.password && formData.password.length < 8) {
      formErrors.password = "Password must be at least 8 characters long";
    } else if (formData.password && !/\d/.test(formData.password)) {
      formErrors.password = "Password must contain at least one digit";
    } else if (formData.password && !/[a-zA-Z]/.test(formData.password)) {
      formErrors.password = "Password must contain at least one letter";
    }
    if (formData.password !== formData.confirmPassword)
      formErrors.confirmPassword = "Passwords do not match";

    // New fields validation
    if (!formData.employerId) {
      formErrors.employerId = "Employer ID is required";
    }
    if (!formData.employerName) {
      formErrors.employerName = "Employer Name is required";
    }

    return formErrors;
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      axiosInstance
        .post(`registeremployer`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
          if (res.data.status == 200) {
            toast.success("Registered Successfully");
            navigate("/login");
          }
          setSubmitted(true);
          setErrors({});
        })
        .catch((error) => {
          toast.warn(error.response.data.msg);
          console.error("Error submitting form data:", error);
          setErrors({
            server: "Error submitting form data. Please try again later.",
          });
          setSubmitted(false);
        });
    } else {
      setErrors(formErrors);
      setSubmitted(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const allowedFormats = ["image/jpeg", "image/png", "image/svg+xml"];

    if (allowedFormats.includes(file.type)) {
      setProfileImage(URL.createObjectURL(file));
      handleChange(e); // Call handleChange to update form data
    } else {
      setErrors({
        ...errors,
        image: "Only JPG, PNG, and SVG formats are allowed.",
      });
      e.target.value = null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="user-register-bg">
        <Container>
          <div className="user-register-container">
            <div className="user-register-header d-flex justify-content-center">
              <img src={logo} alt="logo" height={40} className="img-fluid" />
              <h3 className="text-white text-center align-self-center p-3">
                Employer Registration
              </h3>
            </div>
            {submitted && (
              <Alert variant="success">Form submitted successfully!</Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <div className="user-register-icon justify-content-left">
                <div className="icon-bg border border-light">
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="profile"
                      className="rounded-circle"
                      width="60"
                    />
                  ) : (
                    <FaRegUser size={80} color="white" className="p-3" />
                  )}
                  <label className="upload-icon">
                    <FiEdit2 />
                    <input
                      type="file"
                      name="image"
                      onChange={handleFileChange}
                      className={errors.image ? "is-invalid" : ""}
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      style={{
                        paddingBottom: "50px",
                        width: "200px",
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                    >
                      {errors.image}
                    </Form.Control.Feedback>
                  </label>
                </div>
              </div>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="employerId" className="text-white">
                      Employer ID
                    </Form.Label>
                    <Form.Control
                      type="text"
                      id="employerId"
                      name="employerId"
                      value={formData.employerId}
                      onChange={handleChange}
                      isInvalid={!!errors.employerId}
                      placeholder="Enter Employer ID"
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                    >
                      {errors.employerId}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="employerName" className="text-white">
                      Employer Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      id="employerName"
                      name="employerName"
                      value={formData.employerName}
                      onChange={handleChange}
                      isInvalid={!!errors.employerName}
                      placeholder="Enter Employer Name"
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                    >
                      {errors.employerName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label
                      htmlFor="address"
                      className="text-white"
                    >
                      Address
                    </Form.Label>
                    <Form.Control
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      isInvalid={!!errors.address}
                      placeholder="Enter Address"
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                    >
                      {errors.address}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label
                      htmlFor="location"
                      className="text-white"
                    >
                      Location
                    </Form.Label>
                    <Form.Control
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      isInvalid={!!errors.location}
                      placeholder="Enter Location"
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                    >
                      {errors.location}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="city" className="text-white">
                      City
                    </Form.Label>
                    <Form.Control
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      isInvalid={!!errors.city}
                      placeholder="Enter City"
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                    >
                      {errors.city}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="state" className="text-white">
                      State
                    </Form.Label>
                    <Form.Control
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      isInvalid={!!errors.state}
                      placeholder="Enter State"
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                    >
                      {errors.state}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="contact" className="text-white">
                      Contact Number
                    </Form.Label>
                    <Form.Control
                      type="text"
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      isInvalid={!!errors.contact}
                      placeholder="Enter Contact Number"
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                    >
                      {errors.contact}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="email" className="text-white">
                      Email
                    </Form.Label>
                    <Form.Control
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                      placeholder="Enter Email"
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                    >
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="password" className="text-white">
                      Password
                    </Form.Label>
                    <div className="input-group">
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        isInvalid={!!errors.password}
                        placeholder="Enter Password"
                      />
                      <Button
                        variant="outline-light"
                        onClick={togglePasswordVisibility}
                        className="password-toggle-btn"
                      >
                        {showPassword ? <FiEye /> : <FiEyeOff />}
                      </Button>
                      <Form.Control.Feedback
                        type="invalid"
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "15px",
                        }}
                      >
                        {errors.password}
                      </Form.Control.Feedback>
                    </div>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label
                      htmlFor="confirmPassword"
                      className="text-white"
                    >
                      Confirm Password
                    </Form.Label>
                    <div className="input-group">
                      <Form.Control
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        isInvalid={!!errors.confirmPassword}
                        placeholder="Confirm Password"
                      />
                      <Button
                        variant="outline-light"
                        onClick={toggleConfirmPasswordVisibility}
                        className="password-toggle-btn"
                      >
                        {showConfirmPassword ? <FiEye /> : <FiEyeOff />}
                      </Button>
                      <Form.Control.Feedback
                        type="invalid"
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "15px",
                        }}
                      >
                        {errors.confirmPassword}
                      </Form.Control.Feedback>
                    </div>
                  </Form.Group>
                </Col>
              </Row>

              <div className="d-flex justify-content-center">
                <Button
                  type="submit"
                  className="d-flex align-self-center user-register-button px-5 py-2 border-0 rounded-4"
                >
                  Register
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_3_212)">
                      <path
                        d="M10.5216 9.27079L8.31929 11.4731M13.1643 11.9135L10.962 14.1158M9.64066 18.9609C7.43838 21.1631 5.23609 20.7227 3.47426 18.9609C1.71243 17.199 1.27197 14.9967 3.47426 12.7944L6.117 10.1517L12.2834 16.3181L9.64066 18.9609ZM13.1643 3.10439C15.3666 0.902098 17.5689 1.34256 19.3316 3.10439C21.0943 4.86621 21.533 7.0685 19.3316 9.27079L16.6889 11.9135L10.5216 5.74713L13.1643 3.10439Z"
                        stroke="white"
                        strokeWidth="1.0842"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3_212">
                        <rect
                          width="21.142"
                          height="21.142"
                          fill="white"
                          transform="translate(0.831543 0.461609)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Button>
              </div>
            </Form>
            {errors.server && (
              <Alert variant="danger" className="mt-3">
                {errors.server}
              </Alert>
            )}
             <div className="login-link mt-3 text-center">
                <Link to="/login" className="fw-bolder text-dark">
                  <span className="text-white">Already have an account?</span>{" "}
                  <span className="user_reg_login"> Log In!!!</span>
                </Link>
              </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default EmployerRegistration;

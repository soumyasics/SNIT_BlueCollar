import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import logo from '../../../Assets/ed6f33eac5982e763d02af2f311ea5a5.png';
import './ResetPassword.css';

function ResetPassword() {
    const [formData, setFormData] = useState({
        newPassword: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validate = () => {
        let formErrors = {};
        if (!formData.newPassword) formErrors.newPassword = 'New Password is required';
        if (!formData.confirmPassword) formErrors.confirmPassword = 'Confirm Password is required';
        if (formData.newPassword && formData.confirmPassword && formData.newPassword !== formData.confirmPassword) {
            formErrors.confirmPassword = 'Passwords do not match';
        }
        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length === 0) {
            setSubmitted(true);
            setErrors({});
            // Handle form submission (e.g., send data to backend)
        } else {
            setErrors(formErrors);
            setSubmitted(false);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <Navbar />
            <div className="user-register-bg">
                <Container>
                    <div className="user-reset-container m-5">
                        <div className="user-register-header d-flex">
                            <img src={logo} alt='logo' width={120} />
                            <h3 className='text-white p-5'>Reset Password</h3>
                        </div>
                        {submitted && <Alert variant="success">Password reset successfully!</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Row className='m-5'>
                                <Col md={12}>
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="newPassword" className='text-white'>New Password</Form.Label>
                                        <Form.Control
                                            type={showPassword ? "text" : "password"}
                                            id="newPassword"
                                            name="newPassword"
                                            value={formData.newPassword}
                                            onChange={handleChange}
                                            isInvalid={!!errors.newPassword}
                                            placeholder="Enter New Password"
                                        />
                                        <div className="password-toggle-icon" onClick={togglePasswordVisibility}>
                                            {showPassword ? <FiEyeOff /> : <FiEye />}
                                        </div>
                                        <Form.Control.Feedback type="invalid">{errors.newPassword}</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className='m-5'>
                                <Col md={12}>
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="confirmPassword" className='text-white'>Confirm Password</Form.Label>
                                        <Form.Control
                                            type={showPassword ? "text" : "password"}
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            isInvalid={!!errors.confirmPassword}
                                            placeholder="Confirm New Password"
                                        />
                                        <div className="password-toggle-icon" onClick={togglePasswordVisibility}>
                                            {showPassword ? <FiEyeOff /> : <FiEye />}
                                        </div>
                                        <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div className='d-flex justify-content-center m-5'>
                                <Button type="submit" className="d-flex border-0 align-self-center user-register-button px-5 py-2 rounded-4">
                                    Submit
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                        <g clipPath="url(#clip0_3_212)">
                                            <path d="M10.5216 9.27079L8.31929 11.4731M13.1643 11.9135L10.962 14.1158M9.64066 18.9609C7.43838 21.1631 5.23609 20.7227 3.47426 18.9609C1.71243 17.199 1.27197 14.9967 3.47426 12.7944L6.117 10.1517L12.2834 16.3181L9.64066 18.9609ZM13.1643 3.10439C15.3666 0.902098 17.5689 1.34256 19.3316 3.10439C21.0943 4.86621 21.533 7.0685 19.3316 9.27079L16.6889 11.9135L10.5216 5.74713L13.1643 3.10439Z" stroke="white" strokeWidth="1.0842" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_3_212">
                                                <rect width="21.142" height="21.142" fill="white" transform="translate(0.831543 0.461609)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Button>
                            </div>
                            <div className="login-link mt-3 text-center">
                                <Link to="/login" className='fw-bolder text-dark text-decoration-none'><span className='text-white'>Back to Login</span></Link>
                            </div>
                        </Form>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default ResetPassword;

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";

emailjs.init("y6v2ujIwjiRCIaZCZ");

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    error: null,
    success: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, error: null, success: false });

    try {
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

     console.log("Sending email with params:", templateParams);

      const response = await emailjs.send(
        "service_t9q2m5dh", // Service ID
        "template_u8tdtfc", // Template ID
        templateParams
      );

      if (response.status === 200) {
        setStatus({
          submitting: false,
          error: null,
          success: true,
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      console.error("Email error:", error);
      setStatus({
        submitting: false,
        error: "Failed to send message. Please try again later.",
        success: false,
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="display-6 fw-bolder text-center mb-4">Get in Touch</h1>

            <div className="card border-0 shadow-lg">
              <div className="card-body p-5">
                {status.success && (
                  <div className="alert alert-success mb-4" role="alert">
                    Your message has been sent successfully!
                  </div>
                )}
                {status.error && (
                  <div className="alert alert-danger mb-4" role="alert">
                    {status.error}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-dark px-4 py-2"
                    disabled={status.submitting}
                  >
                    {status.submitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-md-4 text-center">
                <div className="card border-0 shadow-sm py-4">
                  <div className="card-body">
                    <i className="fa fa-phone fa-2x mb-3 text-dark"></i>
                    <h5 className="fw-bold">Call Us</h5>
                    <p className="text-muted">+92 300 0211570</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="card border-0 shadow-sm py-4">
                  <div className="card-body">
                    <i className="fa fa-envelope fa-2x mb-3 text-dark"></i>
                    <h5 className="fw-bold">Email Us</h5>
                    <p className="text-muted">m.aleydev@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="card border-0 shadow-sm py-4">
                  <div className="card-body">
                    <i className="fa fa-map-marker fa-2x mb-3 text-dark"></i>
                    <h5 className="fw-bold">Location</h5>
                    <p className="text-muted">Karachi, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

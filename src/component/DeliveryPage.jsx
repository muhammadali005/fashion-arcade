import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import emailjs from '@emailjs/browser';
import Footer from './Footer';

const DeliveryPage = () => {
  const cartItems = useSelector((state) => state.handleCart);
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const totalPrice = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const orderSummary = cartItems.map(item => 
      `${item.title} - Quantity: ${item.qty} - Price: $${(item.price * item.qty).toFixed(2)}`
    ).join('\n');

    const templateParams = {
      to_name: formData.name,
      from_name: "Your Store Name",
      to_email: formData.email,
      message: `Order Details:\n${orderSummary}\n\nTotal Price: $${totalPrice.toFixed(2)}`,
      delivery_address: formData.address,
      phone_number: formData.phone,
      order_total: totalPrice.toFixed(2)
    };

    try {
      await emailjs.send(
        "service_kzoze3d",
        "template_b7ttgyd",
        templateParams,
        "Zu25Q2mJxKLhzrocO"
      );
      setMessage('Order placed successfully! Check your email for confirmation.');
      setFormData({
        name: '',
        email: '',
        address: '',
        phone: ''
      });
    } catch (error) {
      setMessage('There was an error placing your order. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="display-6 fw-bolder text-center">Delivery Method</h1>
          <hr />
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <div className="mb-4">
                <h5 className="card-title">Select Delivery Method</h5>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="deliveryMethod"
                    value="home"
                    id="homeDelivery"
                    onChange={(e) => setDeliveryMethod(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="homeDelivery">
                    Home Delivery
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="deliveryMethod"
                    value="online"
                    id="onlinePayment"
                    onChange={(e) => setDeliveryMethod(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="onlinePayment">
                    Online Payment (Demo)
                  </label>
                </div>
              </div>

              {deliveryMethod === 'home' && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Delivery Address</label>
                    <textarea
                      className="form-control"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <h5>Order Summary</h5>
                    <p>Total Amount: ${totalPrice.toFixed(2)}</p>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success w-100"
                    disabled={loading}
                  >
                    {loading ? 'Processing...' : 'Place Order'}
                  </button>
                </form>
              )}

              {deliveryMethod === 'online' && (
                <div className="alert alert-info">
                  This is a demo payment page. In a real application, integrate with a payment gateway like Stripe or PayPal.
                </div>
              )}

              {message && (
                <div className={`alert ${message.includes('error') ? 'alert-danger' : 'alert-success'} mt-3`}>
                  {message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DeliveryPage;
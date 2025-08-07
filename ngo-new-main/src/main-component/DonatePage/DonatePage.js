import React, { Fragment, useState, useRef, useEffect } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import NavbarS3 from '../../components/NavbarS3/NavbarS3';
import PageTitle from '../../components/pagetitle/PageTitle';
import FooterS3 from '../../components/footerS3/FooterS3';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.png';
import peyimg1 from '../../images/checkout/img-1.png';
import peyimg2 from '../../images/checkout/img-2.png';
import peyimg3 from '../../images/checkout/img-3.png';
import peyimg4 from '../../images/checkout/img-4.png';
import BannerImg from '../../images/banners/img-16.jpg';
import { isLoggedIn } from '../../utils/auth';
import { getProfile } from '../../api/user';
import { createDonation } from '../../api/donation';

const DonatePage = () => {
  const [formData, setFormData] = useState({
    donationAmount: '',
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    note: '',
    cardHolderName: '',
    cardNumber: '',
    cvv: '',
    expiryDate: '',
    paymentMethod: 'razorpay',
  });
  const [userId, setUserId] = useState(null);
  // Auto-fill user info if logged in
  useEffect(() => {
    const fetchUserProfile = async () => {
      if (isLoggedIn()) {
        try {
          const res = await getProfile();
          const user = res.data.user || res.data;
          setFormData(prev => ({
            ...prev,
            firstName: user.firstName || '',
            lastName: user.lastName || '',
            email: user.email || '',
            address: user.address || '',
          }));
          setUserId(user._id || user.id || null);
        } catch (err) {
          // ignore
        }
      }
    };
    fetchUserProfile();
    // eslint-disable-next-line
  }, []);

  const [isCardPayment, setIsCardPayment] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const validator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState();

  // Razorpay configuration
  const RAZORPAY_KEY = process.env.REACT_APP_RAZORPAY_KEY || 'rzp_test_your_key_here';

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validator.current.showMessages();
    forceUpdate({});
  };

  const handlePaymentMethodChange = e => {
    const value = e.target.value;
    setFormData({ ...formData, paymentMethod: value });
    setIsCardPayment(value === 'card');
    validator.current.showMessages();
    forceUpdate({});
  };

  // Razorpay payment handler
  const handleRazorpayPayment = async () => {
    if (!window.Razorpay) {
      alert('Razorpay SDK not loaded');
      return;
    }

    const amount = parseFloat(formData.donationAmount);
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid donation amount.');
      setIsProcessing(false);
      return;
    }

    const options = {
      key: RAZORPAY_KEY,
      amount: amount * 100, // Amount in paise
      currency: 'INR',
      name: 'RG Care Foundation',
      description: 'Donation for underprivileged children',
      image: Logo,
      handler: function (response) {
        // Payment successful
        console.log('Payment successful:', response);
        handlePaymentSuccess(response);
      },
      prefill: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        contact: '', // Add phone number if available
      },
      notes: {
        address: formData.address,
        note: formData.note,
      },
      theme: {
        color: '#2e26b2',
      },
      modal: {
        ondismiss: function() {
          setIsProcessing(false);
          console.log('Payment modal closed');
        }
      }
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  // Handle successful payment
  const handlePaymentSuccess = async (paymentResponse) => {
    setIsProcessing(false);
    // Prepare donation data
    const donationData = {
      razorpay_payment_id: paymentResponse.razorpay_payment_id,
      razorpay_order_id: paymentResponse.razorpay_order_id,
      razorpay_signature: paymentResponse.razorpay_signature,
      donationAmount: formData.donationAmount,
      donorDetails: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        address: formData.address,
        note: formData.note,
      },
      userId: userId || undefined,
    };
    try {
      await createDonation(donationData);
    } catch (err) {
      // Optionally show error
    }
    alert('Thank you for your donation! Payment successful.');
    setFormData({
      donationAmount: '',
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      note: '',
      cardHolderName: '',
      cardNumber: '',
      cvv: '',
      expiryDate: '',
      paymentMethod: 'razorpay',
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    if (validator.current.allValid()) {
      setIsProcessing(true);
      
      if (formData.paymentMethod === 'razorpay') {
        handleRazorpayPayment();
      } else if (formData.paymentMethod === 'card') {
        // Handle card payment logic
        console.log('Card payment:', formData);
        setIsProcessing(false);
        // Implement your card payment logic here
      } else {
        // Handle offline donation
        console.log('Offline donation:', formData);
        setIsProcessing(false);
        alert('Thank you for choosing offline donation. We will contact you soon.');
      }
      
      validator.current.hideMessages();
    } else {
      validator.current.showMessages();
      forceUpdate({});
    }
  };

  const pageTitleStyle = {
    backgroundImage: `url(${BannerImg})`,
    zIndex: 'auto',
    marginTop: '30px',
  };
  
  const breadcrumbStyle = {
    textAlign: 'left',
    padding: '5px',
  };

  return (
    <Fragment>
      <NavbarS3 hclass={'wpo-site-header'} Logo={Logo} />
      <PageTitle
        pagesub={
          <>
            <div className="row">
              <div className="col-6">
                <p className="page-heading-title" style={{ color: '#2e26b2', padding: '0px 8px' }}>
                  Make a Difference Today!
                </p>
              </div>
            </div>
          </>
        }
        pageDesc={
          <>
            <div className="row">
              <div className="col-6">
                <p className="desc" style={{ color: '#FBAD17', padding: '0px 8px' }}>
                  Donate to help underprivileged <br />
                  children access education. <br />
                  Every contribution counts!
                </p>
              </div>
            </div>
          </>
        }
        breadcrumbStyle={breadcrumbStyle}
        pageTitleStyle={pageTitleStyle}
      />
      <div className="donation-page-area section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="donate-header">
                <h2>Make a Donation</h2>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="donations-amount">
                  <h2>Your Donation</h2>
                  <input
                    type="text"
                    className="form-control"
                    name="donationAmount"
                    value={formData.donationAmount}
                    onChange={handleInputChange}
                    placeholder="Enter Donation Amount (₹)"
                  />
                  {validator.current.message('donationAmount', formData.donationAmount, 'required|numeric')}
                </div>
                <div className="donations-details">
                  <h2>Details</h2>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First Name"
                      />
                      {validator.current.message('firstName', formData.firstName, 'required|alpha')}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last Name"
                      />
                      {validator.current.message('lastName', formData.lastName, 'required|alpha')}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                      />
                      {validator.current.message('email', formData.email, 'required|email')}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Address"
                      />
                      {validator.current.message('address', formData.address, 'required')}
                    </div>
                    <div className="col-lg-12 col-12 form-group">
                      <textarea
                        className="form-control"
                        name="note"
                        value={formData.note}
                        onChange={handleInputChange}
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="donation-payment">
                  <h2>Choose Your Payment Method</h2>
                  <div className="payment-area">
                    <div className="row">
                      <div className="col-12">
                        <div className="payment-option">
                          <div className="payment-select">
                            <ul>
                              <li className="addToggle">
                                <input
                                  id="razorpay"
                                  type="radio"
                                  checked={formData.paymentMethod === 'razorpay'}
                                  name="payment"
                                  value="razorpay"
                                  onChange={handlePaymentMethodChange}
                                />
                                <label htmlFor="razorpay">💳 Pay with Razorpay (UPI, Cards, Net Banking)</label>
                              </li>
                              <li className="addToggle">
                                <input
                                  id="add"
                                  type="radio"
                                  checked={formData.paymentMethod === 'card'}
                                  name="payment"
                                  value="card"
                                  onChange={handlePaymentMethodChange}
                                />
                                <label htmlFor="add">💳 Payment By Card</label>
                              </li>
                              <li className="removeToggle">
                                <input
                                  id="remove"
                                  type="radio"
                                  checked={formData.paymentMethod === 'offline'}
                                  name="payment"
                                  value="offline"
                                  onChange={handlePaymentMethodChange}
                                />
                                <label htmlFor="remove">🏪 Offline Donation</label>
                              </li>
                            </ul>
                          </div>
                          {isCardPayment && (
                            <div className="payment-name">
                              <ul>
                                <li className="visa">
                                  <input id="1" type="radio" name="size" value="visa" />
                                  <label htmlFor="1">
                                    <img src={peyimg1} alt="Visa" />
                                  </label>
                                </li>
                                <li className="mas">
                                  <input id="2" type="radio" name="size" value="mastercard" />
                                  <label htmlFor="2">
                                    <img src={peyimg2} alt="MasterCard" />
                                  </label>
                                </li>
                                <li className="ski">
                                  <input id="3" type="radio" name="size" value="discover" />
                                  <label htmlFor="3">
                                    <img src={peyimg3} alt="Discover" />
                                  </label>
                                </li>
                                <li className="pay">
                                  <input id="4" type="radio" name="size" value="paypal" />
                                  <label htmlFor="4">
                                    <img src={peyimg4} alt="PayPal" />
                                  </label>
                                </li>
                              </ul>
                              <div className="contact-form form-style">
                                <div className="row">
                                  <div className="col-lg-6 col-md-12 col-12">
                                    <label>Card Holder Name</label>
                                    <input type="text" name="cardHolderName" value={formData.cardHolderName} onChange={handleInputChange} />
                                    {validator.current.message('cardHolderName', formData.cardHolderName, 'required')}
                                  </div>
                                  <div className="col-lg-6 col-md-12 col-12">
                                    <label>Card Number</label>
                                    <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} />
                                    {validator.current.message('cardNumber', formData.cardNumber, 'required|numeric')}
                                  </div>
                                  <div className="col-lg-6 col-md-12 col-12">
                                    <label>CVV</label>
                                    <input type="text" name="cvv" value={formData.cvv} onChange={handleInputChange} />
                                    {validator.current.message('cvv', formData.cvv, 'required|numeric')}
                                  </div>
                                  <div className="col-lg-6 col-md-12 col-12">
                                    <label>Expire Date</label>
                                    <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleInputChange} />
                                    {validator.current.message('expiryDate', formData.expiryDate, 'required')}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="submit-area">
                  <button type="submit" className="theme-btn submit-btn" disabled={isProcessing}>
                    {isProcessing ? 'Processing...' : 'Donate Now'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <FooterS3 />
      <Scrollbar />
    </Fragment>
  );
};

export default DonatePage;

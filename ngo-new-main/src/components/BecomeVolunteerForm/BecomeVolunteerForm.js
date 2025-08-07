import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import { Spinner } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { submitVolunteerForm } from '../../store/actions/userActions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import config from '../../config';
import SuccessModal from '../SuccessModal';
const BecomeVolunteerForm = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    file: null,
    note: '',
  });
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const { isSubmitting } = useSelector(state => state.contact);
  const [errors, setErrors] = useState({});
  const MAX_FILE_SIZE = config.MAX_FILE_SIZE;
  const ALLOWED_FILE_TYPES = config.ALLOWED_FILE_TYPES;

  const handleChange = e => {
    const selectedFile = e?.target?.files?.[0];
    if (selectedFile) {
      if (!ALLOWED_FILE_TYPES.includes(selectedFile.type)) {
        toast.error('Invalid file type. Please upload a .pdf or .docx file.');
        return;
      }
      if (selectedFile.size > MAX_FILE_SIZE) {
        toast.error('File size exceeds the maximum limit of 5MB.');
        return;
      }
      setFile(selectedFile);
    }
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.note) newErrors.note = 'Case description is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (validate()) {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('subject', formData.subject);
      data.append('note', formData.note);
      if (formData.file) {
        data.append('file', formData.file);
      }
      try {
        // Send email via EmailJS (frontend)
        await emailjs.send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID || 'dummy_service_id',
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'dummy_template_id',
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.note,
          },
          process.env.REACT_APP_EMAILJS_USER_ID || 'dummy_user_id'
        );
        // Save to backend (MongoDB)
        await dispatch(submitVolunteerForm(data));
        setIsModalOpen(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          file: null,
          note: '',
        });
        setFile(null);
      } catch (error) {
        console.log(error);
      }
    }
  };
// NOTE: Add your EmailJS keys in the .env file as:
// REACT_APP_EMAILJS_SERVICE_ID=your_service_id
// REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
// REACT_APP_EMAILJS_USER_ID=your_user_id

  return (
    <>
      <form onSubmit={handleSubmit} className="contact-validation-active" id="contact-form-main">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
            <input
              type="text"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              name="name"
              id="name"
              placeholder="First Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <small className="text-danger">{errors.name}</small>}
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <small className="text-danger">{errors.email}</small>}
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
            <input
              type="text"
              className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
              name="subject"
              id="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && <small className="text-danger">{errors.subject}</small>}
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group form-group-in">
            {/* <label htmlFor="file">Upload Your CV</label> */}
            <label htmlFor="file">{file?.name?.length > 35 ? `${file.name.substring(0, 35)}...` : file?.name || 'Upload Your CV'}</label>
            <input id="file" type="file" className="form-control" name="file" onChange={handleChange} accept=".pdf,.docx" />
            <i className="ti-cloud-up"></i>
          </div>
          <div className="col-lg-12 col-12 form-group">
            <textarea
              className={`form-control ${errors.note ? 'is-invalid' : ''}`}
              name="note"
              id="note"
              placeholder="Case Description..."
              value={formData.note}
              onChange={handleChange}
            />
            {errors.note && <small className="text-danger">{errors.note}</small>}
          </div>

          <div className="submit-area col-lg-12 col-12">
            <button type="submit" className="theme-btn submit-btn" disabled={isSubmitting}>
              {isSubmitting ? <Spinner color="warning" size="sm" /> : null}
              {isSubmitting ? ' Sending...' : ' Send Message'}
            </button>
          </div>
        </div>
      </form>
      <SuccessModal
        isOpen={isModalOpen}
        toggle={toggleModal}
        message={'Your message has been successfully delivered. Our team will contact you shortly.'}
      />
    </>
  );
};

export default BecomeVolunteerForm;

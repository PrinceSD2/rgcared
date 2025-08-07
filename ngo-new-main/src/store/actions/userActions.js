import axiosInstance, { postWithFormData } from '../../api/axiosInstance'; // Import both the default and named export
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { SUBMIT_CONTACT_FORM, SUBMIT_CONTACT_FORM_SUCCESS, SUBMIT_CONTACT_FORM_FAILURE } from './type';

// Action creator for submitting contact form
export const submitContactForm = formData => {
  return async dispatch => {
    dispatch({ type: SUBMIT_CONTACT_FORM });
    try {
      const response = await axiosInstance.post('/contact-us', formData);
      dispatch({
        type: SUBMIT_CONTACT_FORM_SUCCESS,
        payload: response.data,
      });
      // toast.success('Email has been sent successfully!');
    } catch (error) {
      console.error('Failed to send email:', error);
      dispatch({
        type: SUBMIT_CONTACT_FORM_FAILURE,
        payload: error,
      });
      toast.error('Error occured while submitting the records!');
    }
  };
};
export const submitVolunteerForm = formData => {
  return async dispatch => {
    dispatch({ type: SUBMIT_CONTACT_FORM });
    try {
      const response = await postWithFormData('/volunteer-with-us', formData);
      dispatch({
        type: SUBMIT_CONTACT_FORM_SUCCESS,
        payload: response.data,
      });
      // toast.success('Message has been sent successfully!');
    } catch (error) {
      console.error('Failed to send email:', error);
      dispatch({
        type: SUBMIT_CONTACT_FORM_FAILURE,
        payload: error,
      });
      toast.error('Error occured while submitting the records!');
    }
  };
};

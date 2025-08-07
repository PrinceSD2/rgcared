// contactReducer.js
import { SUBMIT_CONTACT_FORM, SUBMIT_CONTACT_FORM_SUCCESS, SUBMIT_CONTACT_FORM_FAILURE } from '../actions/type';

const initialState = {
  isSubmitting: false,
  responseMessage: '',
};

const volunteerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_CONTACT_FORM:
      return { ...state, isSubmitting: true, responseMessage: '' };
    case SUBMIT_CONTACT_FORM_SUCCESS:
      return { ...state, isSubmitting: false, responseMessage: action.payload.message || 'Email sent successfully!' };
    case SUBMIT_CONTACT_FORM_FAILURE:
      return { ...state, isSubmitting: false, responseMessage: 'Failed to send message. Please try again later.' };
    default:
      return state;
  }
};

export default volunteerReducer;

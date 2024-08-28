import * as Yup from 'yup';

const ContactValidationSchemas = Yup.object({
    firstName: Yup.string().required('First Name is required.'),
    email : Yup.string().email('Invalid email address').required('Email is required.'),
    phone: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits.').required('Phone number is required.')
})
export default ContactValidationSchemas;
import * as Yup from 'yup';

const validationSchemas = {
    login: Yup.object({
        username: Yup.string().required('Username is required.'),
        email: Yup.string().email('Invalid email adddress').required('Email is required.'),
        password : Yup.string().min(6,'Password must contain at least 6 characters').required('Password is required.')
    })
};
export default validationSchemas;
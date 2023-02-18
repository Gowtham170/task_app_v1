import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    firstname: Yup.string().min(2).max(20).required('Please enter your firstname'),
    lastname: Yup.string().min(2).max(20).required('Please enter your lastname'),
    email: Yup.string().email().required('Please enter your email'),
    password: Yup.string().min(6).required('Please enter your password'),
    userprofile: Yup.string().required()
});

export const loginSchema = Yup.object({
    email: Yup.string().email().required('Please enter your email'),
    password: Yup.string().required('Please enter your password')
});
import * as Yup from 'yup';
export const loginValidation = Yup.object().shape({
    userName: Yup.string()
        .test('is-phone-or-email', 'Invalid field', function (value) {
            const { path, createError } = this;
            const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
            const phoneRegex = /^\d{10}$/;

            if (!value) {
                return createError({ path, message: 'Field is required' });
            }

            if (!emailRegex.test(value) && !phoneRegex.test(value)) {
                return createError({ path, message: 'Invalid Value' });
            }

            return true;
        })
        .required('Email or Phone is required'),
});

export const signUpValidation = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    phone: Yup.string().required('Phone is required'),
    address: Yup.string().required('Address is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup
        .string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
});

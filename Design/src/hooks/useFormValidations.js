import { useState,useEffect, useMemo, useCallback} from "react";

export const useFormValidation = (initialValues, validationSchema) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (field, value) => {
        setValues((prevValues) => ({
            ...prevValues,
            [field]: value,
        }));
    };

    const handleBlur = async (field) => {
        try {
            await validationSchema.validateAt(field, values);
            setErrors((prevErrors) => ({
                ...prevErrors,
                [field]: undefined,
            }));
        } catch (error) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [field]: error.message,
            }));
        }
    };

    // const handleSubmit = async () => {
    //     try {
    //         await validationSchema.validate(values, { abortEarly: false });
    //         // Validation successful, do something with the form data
    //         console.log('Form data:', values);
    //         setErrors({});
    //         setIsSubmitting(true);
    //         return values
    //     } catch (error) {
    //         const validationErrors = {};
    //         error.inner.forEach((err) => {
    //             validationErrors[err.path] = err.message;
    //         });
    //         setErrors(validationErrors);
    //         setIsSubmitting(false);
            
    //     }
    // };
    const validateFeild = useCallback(async () => {
        try {
            await validationSchema.validate(values, { abortEarly: false });
            // Validation successful, do something with the form data
            setErrors({});
            setIsSubmitting(true);
            return true;
        } catch (error) {
           
            const validationErrors = {};
            error.inner.forEach((err) => {
                validationErrors[err.path] = err.message;
            });
            setErrors(validationErrors);
            setIsSubmitting(false);
            return false;
        }
    }, [values, validationSchema]);
    useEffect(() => {
        if (isSubmitting) {
            validateFeild();
        }
    }, [isSubmitting]);

    return { values, errors, handleChange, handleBlur, validateFeild };
};

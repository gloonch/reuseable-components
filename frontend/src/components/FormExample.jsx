import React, {useState} from 'react'
import {useFormik} from "formik";
import * as Yup from 'yup';
import {useNavigate} from "react-router-dom";
import {motion as m} from "framer-motion";

// const image = require('../images/image_phone.jpg');

export default function FormExample() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            country: 'Iran',
            terms: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required').max(20, 'Name must be 20 characters or less'),
            email: Yup.string().required('Email is required').email('Invalid email address'),
            // terms: Yup.array().required('Terms of service must be checked'),
        }),
        onSubmit: (values) => {
            navigate('/success', {state: {values}});
        }
    })

    return (
        <m.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className='flex flex-row items-center h-auto m-10 shadow-2xl shadow-teal-900 rounded-2xl'>
            <form onSubmit={formik.handleSubmit} className='w-1/2 flex flex-row rounded-lg font-latoRegular'>
                <div className='flex-1 text-gray-700 p-20'>
                    <h1 className='text-3xl pb-2 font-latoBold'>Let's get started 🔥</h1>
                    <p className='text-lg text-gray-500'>
                        Join our E-learning platform today and unlick over 500+ courses
                        and digital assets ready to download.
                    </p>
                    <div className='mt-6'>
                        <div className='pb-4'>
                            <label
                                className={`block font-latoBold text-sm pb-2 ${formik.errors.name ? 'text-red-500' : ""}`}
                                htmlFor='name'>
                                {formik.touched.name && formik.errors.name ? formik.errors.name : "Name"}
                            </label>
                            <input
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                className='border-2 border-gray-500 p-2 rounded-md w-2/3 focus:border-teal-500 focus:ring-teal-500'
                                name='name'
                                type='text'
                                placeholder='Enter your name'
                                onBlur={formik.handleBlur}
                            />
                        </div>
                    </div>
                    <div className='mt-6'>
                        <div className='pb-4'>
                            <label
                                className={`block font-latoBold text-sm pb-2 ${formik.errors.email ? 'text-red-500' : ""}`}
                                htmlFor='email'>
                                {formik.touched.email && formik.errors.email ? formik.errors.email : "Email"}
                            </label>
                            <input
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                className='border-2 border-gray-500 p-2 rounded-md w-2/3 focus:border-teal-500 focus:ring-teal-500'
                                name='email'
                                type='email'
                                placeholder='Enter your email' />
                        </div>
                    </div>
                    <div className='mt-6'>
                        <div className='pb-4'>
                            <label className='block font-latoBold text-sm pb-2' htmlFor='country'>Country</label>
                            <select
                                value={formik.values.country}
                                onChange={formik.handleChange}
                                name='country'
                                className='border-2 border-gray-500 p-2 rounded-md w-2/3 focus:border-teal-500 focus:ring-teal-500'>
                                <option>Germany</option>
                                <option>Iran</option>
                                <option>United states</option>
                                <option>Japan</option>
                                <option>Canada</option>
                            </select>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <div className='pb-4'>
                            <label
                                className={`block font-latoBold text-sm pb-2 ${formik.errors.terms ? 'text-red-500' : ""}`}
                                htmlFor='terms'>
                                {formik.touched.terms && formik.errors.terms ? formik.errors.terms : "Terms of service"}
                            </label>
                            <div className='flex items-center gap-2'>
                                <input
                                    value={formik.values.terms}
                                    onChange={formik.handleChange}
                                    type='checkbox'
                                    name='terms'
                                    className='h-5 w-5 text-teal-500 border-2 rounded-md focus:border-teal-500 focus:ring-teal-500' />
                                <p className='text-sm font-latoBold text-gray-500'>I agree to the Terms and Service that my data will be taken and sold.</p>
                            </div>
                        </div>
                        <button type="submit" className='bg-teal-500 font-latoBold text-sm text-white py-3 rounded-lg mt-6 w-full'>Start learning today!</button>
                    </div>
                </div>
            </form>
                <div className='relative flex-1'>
                {/*    <img alt='form-image' src={image} className='object-cover rounded-xl pe-10' />*/}
                </div>
        </m.div>
    )
}

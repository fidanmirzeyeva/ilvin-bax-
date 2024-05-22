import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Add() {
    async function getadd(val) {
        const res =await fetch("http://localhost:5000/fidan",{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(val)
        })
        const data = await res.json() 
        return data       
    }
  return (
    <>
     <Formik
       initialValues={{ name: '', image: '', price: '' }}
       validationSchema={Yup.object({
         name: Yup.string()
           .required('Required'),
         image: Yup.string()
           .required('Required'),
         price: Yup.string().required('Required'),
       })}
       onSubmit={(values) => {
         setTimeout(() => {
           getadd(values)
         }, 400);
       }}
     >
       <Form>
         <label htmlFor="name"> Name</label>
         <Field name="name" type="text" />
         <ErrorMessage name="name" />
 
         <label htmlFor="image"> image</label>
         <Field name="image" type="text" />
         <ErrorMessage name="image" />
 
         <label htmlFor="price">price </label>
         <Field name="price" type="number" />
         <ErrorMessage name="price" />
 
         <button type="submit">add me</button>
       </Form>
     </Formik>
    </>
  )
}

export default Add
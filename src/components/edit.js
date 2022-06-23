import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
  const nav = useNavigate()
  const { id } = useParams()
  const formik = useFormik({
    initialValues: {
      book: "",
      number: ""
    },
    validate: values => {
      let errors = {}
      if (!values.book) {
        errors.book = "Required"
      }
      if (!values.number) {
        errors.number = "Required"
      }
      return errors
    },
    onSubmit: async (values) => {
      let response = await axios.put(`https://62401a5c2aeb48a9af703b1b.mockapi.io/formik/${id}`, values)
      nav("/")
    }
  })
  useEffect(() => {
    getdata()
  }, [])

  const getdata = async () => {
    let response = await axios.get(`https://62401a5c2aeb48a9af703b1b.mockapi.io/formik/${id}`)
    formik.setValues(response.data)
  }
  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="formtag">
        <input type="text" placeholder='Enter Book Name' name="book"  {...formik.getFieldProps("book")} />
        {formik.touched.book && formik.errors.book ? <h4 style={{ margin: "0", color: "red" }}>{formik.errors.book}</h4> : null}
        <br />
        <br />
        <input type="number" placeholder='Enter Number of Books' name="number"  {...formik.getFieldProps("number")} />
        {formik.touched.number && formik.errors.number ? <h4 style={{ margin: "0", color: "red" }}>{formik.errors.number}</h4> : null}
        <br />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Edit;
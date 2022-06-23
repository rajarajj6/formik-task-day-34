import React from 'react';
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Input() {
  const nav = useNavigate()
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
      console.log(values)
      let response = await axios.post("https://62401a5c2aeb48a9af703b1b.mockapi.io/formik", values)
      nav("/")
    }
  })
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

export default Input;
import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

const Sect1 = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      image: '',
    },
    onSubmit: values => {
      axios.post("http://localhost:5000/flora/",values)
      return values
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Product Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <label htmlFor="price">Product Price</label>
      <input
        id="price"
        name="price"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.price}
      />
      <label htmlFor="image">Product Image</label>
      <input
        id="image"
        name="image"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.image}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default Sect1
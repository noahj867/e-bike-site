import React, { useState } from 'react';
import style from 'styles/form.module.css';
import {client} from '../lib/client';

const countries = {
  US: '+1',
  CANADA: '+1',
  MEXICO: '+52'
};

const Form = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      shippingAddress: '',
      country: 'US',
      phoneNumber: countries['US']
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      const newState = { ...formData, [name]: value };
      
      if (name === 'country') {
        newState.phoneNumber = countries[value];
      }
      
      setFormData(newState);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(formData);
      try {
        const response = await client.create({
          _type: 'contact', ...formData
        });
        console.log('Form Data Submitted: ', response);
      } catch (error) {
        console.error('Submission error', error);
    };
  }

  return (
  <div className={style.contactFormContainer}>
      <h2>Sign up today</h2>
      <form className={style.contactForm} onSubmit={handleSubmit}>
        <div className={style.nameFields}>
          <label className={style.label}>
            First Name
            <input
              className={style.input}
              type="text"
              name="firstName"
              placeholder="bobby"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </label>
          <label className={style.label}>
            Last Name
            <input
              className={style.input}
              type="text"
              name="lastName"
              placeholder="battery"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <label className={style.label}>
          Email
          <input
            className={style.input}
            type="email"
            name="email"
            placeholder="bobbybattery@gmail.com"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label className={style.label}>
          Shipping Address
          <input
            className={style.input}
            type="text"
            name="shippingAddress"
            placeholder="24 Battery ln, Brooklyn, NY"
            value={formData.shippingAddress}
            onChange={handleInputChange}
          />
        </label>
        <div className={style.countryPhoneFields}>
          <label className={style.label}>
            Country
            <select
              className={style.input}
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
              placeholder='United States'
            >
              <option value="US">United States</option>
              <option value="CANADA">Canada</option>
              <option value="MEXICO">Mexico</option>
            </select>
          </label>
          <label className={style.label}>
            Phone Number
            <input
              className={style.input}
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <button className={style.button} type="submit" >Submit</button>
      </form>
    </div>
  );
};

export default Form;

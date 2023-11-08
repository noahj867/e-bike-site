import React, { useState } from 'react';
import style from 'styles/form.module.css';

const Form = () => {
  const [countryCode, setCountryCode] = useState('');

  const handleCountryChange = (e) => {
    // Logic to set the country code based on the country selection
    const countryCodes = { "USA": "+1", "Canada": "+1", "UK": "+44" };
    setCountryCode(countryCodes[e.target.value] || '');
  };

  return (
    <div className={style.container}>
      <form action="Blahbady_blah.php" method="post" className={style.form}>
        <div className={style.row}>
          <div className={style.halfField}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className={style.halfField}>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
        </div>
        <div className={style.field}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={style.row}>
          <div className={style.halfField}>
            <label htmlFor="country">Country</label>
            <input type="text" id="country" name="country" onChange={handleCountryChange} required />
          </div>
          <div className={style.halfField}>
            <label htmlFor="phone">Phone Number</label>
            {/* <div className={style.phoneField}> */}
              <input type="tel" className={style.countryCode} id="phone" value={countryCode} name="phone" required />
              {/* <input type="tel" id="phone" name="phone" required /> */}
            {/* </div> */}
          </div>
        </div>
        <div className={style.field}>
          <label htmlFor="address">Shipping Address</label>
          <input type="text" id="address" name="address" required />
        </div>
        
        <input type="submit" value="Submit" className={style.submitButton} />
      </form>
    </div>
  );
};

export default Form;

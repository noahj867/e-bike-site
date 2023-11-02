import React from 'react'
import style from 'styles/form.module.css'

const Form = () => {

const fields = [
{
    title: "First Name",
    label: "name",
    type: "text",
    id: "name",
},
{     
    title: "Email",
    label: "email",
    type: "email",
    id: "email" 
},
{
    title: "Phone Number",
    label: "number",
    type: "tel",
    id: "phone",
},
{
    title: "Shipping Address",
    label: "address",
    type: "text",
    id: "address",
}
]

  return (
    <div className={style.container}>
        <form action="Blahbady_blah.php" method="post" className={style.form}>
            {fields.map((item, i) => (
                <div className={style.field} key={i}>
                    <label for={item.label}>{item.title}</label>
                    <input type={item.type} id={item.id} name={item.label} required/>
                </div>
            )) }
        </form>
    </div>
  )
}

export default Form
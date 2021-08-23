import React, {useState} from 'react'
import { useForm, Controller } from "react-hook-form";









function FormComponent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const updateFormData = event =>
  setFormData({
    ...formData,
    [event.target.name]: event.target.value
  });

const { firstName, lastName, email, password } = formData;
const { register, handleSubmit, control } = useForm();
const onSubmit = (data) => console.log(data);

 
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input
        value={firstName}
        onChange={e => updateFormData(e)}
        placeholder="First name"
        type="text"
        name="firstName"
        required
      />
      <input
        value={lastName}
        onChange={e => updateFormData(e)}
        placeholder="Last name"
        type="text"
        name="lastName"
        required
      />
      <input
        value={email}
        onChange={e => updateFormData(e)}
        placeholder="Email address"
        type="email"
        name="email"
        required
      />
      <input
        value={password}
        onChange={e => updateFormData(e)}
        placeholder="Password"
        type="password"
        name="password"
        required
      />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}



export default FormComponent;

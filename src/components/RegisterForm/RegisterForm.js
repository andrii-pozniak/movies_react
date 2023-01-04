import { useDispatch } from 'react-redux';
import { register } from 'Redux/Auth/operations';
// import css from 'components/RegisterForm/RegisterForm.module.css';
import { StyleButton, StyleLabel, StyleForm, StyleInput } from "components/Form/Form.Style"

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    console.log({register})
    form.reset();
  };

  return (
    
    <StyleForm onSubmit={handleSubmit} autoComplete="off">
      <StyleLabel >
        Username
        <StyleInput type="text" name="name" />
      </StyleLabel>
      <StyleLabel >
        Email
        <StyleInput type="email" name="email" />
      </StyleLabel>
      <StyleLabel >
        Password
        <StyleInput type="password" name="password" />
      </StyleLabel>
      <StyleButton bg='blue.100'  type="submit">Register</StyleButton>
    </StyleForm>
   
   
   
  );
};
import { useDispatch } from 'react-redux';
import { logIn } from 'Redux/Auth/operations';
// import css from 'components/LoginForm/LoginForm.module.css';
import { StyleButton, StyleLabel, StyleForm, StyleInput } from "components/Form/Form.Style"


export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (  
      
        <StyleForm  onSubmit={handleSubmit} autoComplete="off">
        <StyleLabel >
        Email
        <StyleInput type="email" name="email" />
        </StyleLabel>
        <StyleLabel >
        Password
        <StyleInput type="password" name="password" />
      </StyleLabel>
      <StyleButton bg='blue.100' type="submit" _hover={{shadow: 'md'}}>Log In</StyleButton>
    </StyleForm>
     
        
   
    
  );
};

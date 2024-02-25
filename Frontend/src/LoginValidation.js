function validation(values)
{
   let error={};
   const username_pattern=/^[a-zA-Z0-9]*$/
   const password_pattern=/^[A-Z](?=.*[!@#$%^&*()_+,\-./:;<=>?@[\\\]^_`{|}~])(?=.*[a-zA-Z0-9]).{6,}$/
   if(values.username==="")
   {
    error.username="username should not be empty"
   }
   else if(!username_pattern.test(values.username))
   {
    error.username="username should only have alphabets and numbers"
   }
   else{
    error.username=""
   }
   if(values.password==="")
   {
    error.password="password should not be empty"
   }
   else if(!password_pattern.test(values.password))
   {
    error.password="password should start with captial letter,contain one special character"
   }
   else{
    error.password=""
   }
   return error;

}
export default validation;
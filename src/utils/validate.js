export const checkValidData = (fullname , email, password) =>{

    // const isfullname = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(fullname)

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    const isPasswordValid = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

//  if(!isfullname) return "Name is not valid";
 if(!isEmailValid) return "Email Id is not valid";
 if(!isPasswordValid)    return "Password is not valid"

 return null;


}
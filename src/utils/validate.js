
export const validation = (email, password)=>{
  const isEmailValid = /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/.test(email);
  const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

  if(!isEmailValid) return "Email ID is not valid"
  if(!isPasswordValid) return "Password ID is not valid"

  return null
}
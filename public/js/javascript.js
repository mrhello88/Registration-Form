// const form = document.getElementById("form");
// const logform = document.getElementById("logform");
// const loginPage = document.getElementById("loginPage")
// const registerPage = document.getElementById("registerPage")
// const logout = document.getElementById("logout");
// const fname = document.getElementById("fname");
// const lname = document.getElementById("lname");
// const email = document.getElementById("email");
// const logemail = document.getElementById("logemail");
// const logpassword = document.getElementById("logpassword");
// const phone = document.getElementById("phone");
// const password = document.getElementById("password");


// const fun = ()=>{
//     logout.style.display = "none";

//     const newFunctionLogin = ()=>{
//         logout.style.display = "none";
//           if (logemail.value === "" || logpassword.value === "") {
//             console.log("Nothing! login");
//           } else {
//             logform.addEventListener("submit", (event) => {
//               event.preventDefault();
//               if (logemail.value === "" || logpassword.value === "") {
//                 logout.style.display = "none";
//               } else {
//                 logout.style.display = "block";
//               }
//             });
//           }
          
    
//     }
    
//     const newFunctionRegister = ()=>{
//         logout.style.display = "none";
    
//         if (
//             fname.value === "" ||
//             lname.value === "" ||
//             email.value === "" ||
//             phone.value === "" ||
//             password.value === ""
//           ) {
//             console.log("Nothing!");
//           } else {
//             form.addEventListener("submit", (event) => {
//               event.preventDefault();
//               if (
//                 fname.value === "" ||
//                 lname.value === "" ||
//                 email.value === "" ||
//                 phone.value === "" ||
//                 password.value === ""
//               ) {
//                 logout.style.display = "none";
//               } else {
//                 logout.style.display = "block";
//               }
//             });
//           }
          
    
//     }
    
//     loginPage.addEventListener("click",newFunctionLogin);
//     registerPage.addEventListener("click",newFunctionRegister)
// }

// fun()
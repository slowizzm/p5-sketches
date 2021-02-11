//username = med290 | password = fall19


function checkUserInfo(form) {
  if (form.userid.value == "med290" && form.pswrd.value == "fall19") {
    // window.open();
    alert("Welcome to Med290");
  } else {
    alert("The username and password are incorrect");
  }
}

function validation(){
  let a = document.getElementById("password").value;
  let b =document.getElementById("confirmpassword").value;
  if (a != b) {
    alert("Password and confirm password should be same");
  return false;
  }
  else{
    alert("To submit your form click ok");
    location.replace("file:///D:/New%20folder/newproject/index.html");
  }
}
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', function() {
  navbarCollapse.classList.toggle('show');
});


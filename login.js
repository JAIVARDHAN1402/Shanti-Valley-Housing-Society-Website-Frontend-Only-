
function verifyLogin(event) {
  event.preventDefault();

  user_entry = document.querySelector("#username").value;
  pwd_entry = document.querySelector("#password").value;

  let gotuser= "";
  let gotpwd= "";
  for(key_user in credential)
  {
    if(user_entry === key_user)
    {
      gotuser = user_entry;
      gotpwd = credential[key_user];
      if(gotpwd === pwd_entry){
        window.location.href = "payment.html";
      }
      else{
        document.querySelector(".error-message").textContent = "Invalid Username or Password.";
      }
    }
  }

  if (gotuser!==user_entry){
    document.querySelector(".error-message").textContent = "Invalid Username or Password.";
    
  }
  
}


function registerclick(){
    document.querySelector(".login-box").style.display = "none";
    document.querySelector(".register").style.display = "inline";
}

function backtologin(){
    document.querySelector(".login-box").style.display = "inline";
    document.querySelector(".register").style.display = "none";

}

function addLogin(event){
    event.preventDefault();
    
    const user = document.getElementById("username");
    const pass = document.getElementById("password");

    username.push(user.textContent);
    password.push(pass.textContent);
    // window.location.href = "login.html";
    document.getElementById("username").textContent = "";
    document.getElementById("password").textContent = "";
}


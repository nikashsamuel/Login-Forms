function func()
{
    let email = document.getElementById("loginemail").value;
    let pass = document.getElementById('loginpass').value;

if(email == 'Entri Elevate' && pass == 'admin123')
{
    window.location.href="https://geraldinleena.github.io/video-landing-page/"
    alert("Successfully logged in !");
}
else
{
    alert("Login Denied");
    return;
}

}   
function loginfg()
{
   let a = prompt("Enter The Email ID")
   alert('Verfication Code Send To your registered Email ID')
}

var state= false;
function toggle(){
    if (state)
    {
        document.getElementById("loginpass").setAttribute("type", "password");
        state= false;
    }
    else
    {
        document.getElementById("loginpass").setAttribute("type", "text");
        state= true;
    }
}

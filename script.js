var nameerror=document.getElementById('name-error');
var Emailerror=document.getElementById('Email-error');
var messageerror=document.getElementById('message-error');
var submiterror=document.getElementById('Submit-error');

function validatename()
{
 var name = document.getElementById('contact-name').value;

 if(name.length==0)
 {
    nameerror.innerHTML ='name is required';
    return false;
 }
 nameerror.innerHTML=''
 return true;
 
}
function validateEmail()
{
    var Email= document.getElementById('contact-Email').value;

    if(Email.length==0)
    {
        Emailerror.innerHTML = 'Email is required';
        return false;
    }
    if(!Email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{3}$/))
    {
        Emailerror.innerHTML = 'invalid Email id'
        return false; 
    }
    Emailerror.innerHTML=''
    return true;

}
function validatemessage()
{
    var message= document.getElementById('contact-message').value;

    if(message.length==0)
    {
        messageerror.innerHTML='message is required';
        return false;
    }
    messageerror.innerHTML=''
    return true;
}







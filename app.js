
const form=document.querySelector('form')
form.addEventListener('click',e=>{
    e.preventDefault();
    const name=document.querySelector('input').value.trim()
   if(name==''||name==null){
  let text=document.getElementById('txt').innerHTML='Please enter your name';
  text=document.getElementById('txt').style.color='#00ff00'
    return false;
   }else{
    text=document.getElementById('txt').innerHTML='';
   }
  validateEmail();
  phonenumber();
})
function validateEmail(){
    let pattern =  /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;;
    const email=document.getElementById('email').value.trim()
    let texts=document.getElementById('text')
    if(email.match(pattern)){
        texts.innerHTML=''
    
        return true
    }else{
       texts.innerHTML='Please enter valid email address'
        texts.style.color='#00ff00'
    }
      }
      function phonenumber(){
        const phone=document.getElementById('phone').value.trim()
        let phoneNumber= /^\d{10}$/;
        let number=document.getElementById('number')
        if(phone.match(phoneNumber)){
            number.innerHTML=''
            return true
        }else{
         number.innerHTML='phone number should be 10 digits'
         number.style.color='#00ff00'
        }
      }



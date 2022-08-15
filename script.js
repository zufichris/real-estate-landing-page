//home
var coffee= document.getElementById('main');
var foot= document.getElementById('footer');
var callbtn= document.getElementById('call');
var emailbtn= document.getElementById('email1');
var bx= document.getElementById('bc');
coffee.addEventListener('mouseover', function (e){
  coffee.style.color= 'brown';
  coffee.style.textAlign= 'right';
  coffee.style.verticalAlign= 'top';
  coffee.style.fontSize= '205px';
  bx.style.backgroundColor= 'white';
event.preventDefault();
});
coffee.addEventListener('mouseout', function (event){
  coffee.style.color= 'white';
  coffee.style.textAlign= 'left';
  coffee.style.verticalAlign= 'bottom';
  coffee.style.fontSize= '200px';
  bx.style.backgroundColor= 'rgb(180, 78, 5)';
});
foot.addEventListener('mouseover', function (e){
callbtn.style.backgroundColor= 'blue';
emailbtn.style.backgroundColor= 'blue';
callbtn.style.transform= 'scale(1.1)';
emailbtn.style.transform= 'scale(1.1)';
e.preventDefault();
});
foot.addEventListener('mouseout', function (e){
  callbtn.style.backgroundColor= 'purple';
  emailbtn.style.backgroundColor= 'green';
  callbtn.style.borderRadius= '20px';
  emailbtn.style.borderRadius= '20px';
 e.preventDefault();
  }); 

  //login
  var lg= document.getElementById('haed');
  var email1= document.getElementById('email');
  var password= document.getElementById('pass');
  var submit= document.getElementById('button');
  email1.addEventListener('mouseover', function (e){
lg.style.color= 'red';
  });
  submit.addEventListener('click', function (e){
var value= password.target.value;
if(value<6){
  alert('passzord too  short');
}
  });
function setById(id,value){
document.getElementById('para').innerHTML='Modifié!';
}
function test(message){
  alert(message);
}
function test2(afaire,a,b){
  alert(afaire(a,b));
  console.log(arguments);
}

const maFunction=function(i,j){
  return i+j;
}

//test2(maFunction,5,12);
//test('Hello');
//setById('para','Nouvelle valeur');
//alert(maFunction(2,5));
//document.querySelector('#para').innerHTML='Test avec querySelector';
//document.querySelector('.item').style.color='red';
function allInRed(){
document.querySelectorAll('.item, p').forEach((elm) => {
  elm.style.color='red';
});
}
//document.querySelector('button').addEventListener('click',(event)=>{
//  allInRed();
//});
window.addEventListener('load',()=>{
  console.log('page load');
  document.querySelector('button').addEventListener('click',(event)=>{
    allInRed();
  });
})

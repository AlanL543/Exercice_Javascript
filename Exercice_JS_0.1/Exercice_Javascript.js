function somme(x,y){
   return x+y;
}

function max(x,y){
  if (x>y) {
    return x;
  }
  else if (x<y) {
    return y;
  }
  else {
    return "Les deux nombres sont égaux ! ";
  }
}
document.getElementById('Add').addEventListener('click',(event)=>{
  let nb1=document.getElementById('nb1').value;
  let nb2=document.getElementById('nb2').value;
  alert(somme(nb1,nb2));
  alert(max(nb1,nb2));
});

function mcolor() {
  document.getElementById('block').style.cssText='filter: blur(50px);';
}
document.getElementById('button').addEventListener('click', ()=>{
  mcolor();
});

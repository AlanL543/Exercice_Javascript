window.addEventListener('load',()=>{
  console.log('load');
  document.querySelector('bt-run').addEventListener('click',()=>{
    console.log('run');
    let elm=document.getElementById('selector').value;
    let css=document.getElementById('style').value;
    document.querySelector(elm).style.cssText=css;
  });
});

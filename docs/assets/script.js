const dialog=document.querySelector('#reserveDialog');
document.querySelectorAll('.js-open-modal').forEach(button=>button.addEventListener('click',()=>dialog.showModal()));
document.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
document.querySelector('#demoForm').addEventListener('submit',e=>{e.preventDefault();e.currentTarget.hidden=true;dialog.querySelector('.thanks').hidden=false});

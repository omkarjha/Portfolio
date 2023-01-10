console.log("Script is running...")
document.querySelector('.hamburger').addEventListener("click",()=>{
     document.querySelector('#ham').classList.toggle('fa-xmark');
     document.querySelector('#ham').classList.toggle('fa-bars');
     document.querySelector('.sidebar').classList.toggle('sidebarGo');
     // if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
     //      document.querySelector('.hamburger').style.display = 'none'
     //      document.querySelector('cross').style.display = 'block'
     // }
     // else{
     //      document.querySelector('.hamburger').style.display = 'block'          
     //      document.querySelector('.cross').style.display = 'none'          
     // }
})
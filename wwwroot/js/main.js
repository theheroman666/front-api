/* let body = document.querySelector('body'),
  toggle = body.querySelector(".toggle");
let sidebar = document.querySelector('nav');
let ul = document.querySelector('ul');
let span = document.querySelectorAll('.span');

const oculto = document.querySelectorAll('.ocultar');
let expanded = false;

if (window.screen.availWidth > 971) {
  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
  });
}

toggle.addEventListener("click", () => {
  if (expanded) {
    oculto.forEach(item => {
      item.style.display = 'none';
    });
  } else {
    oculto.forEach(item => {
      item.style.display = 'block';
    });
  }
  expanded = !expanded;
})

/* if (window.screen.availWidth < 970) {
  sidebar.classList.add("lowbar");
  ul.classList.remove("list-group");
  let header = document.querySelector('header');
  header.remove();
  span.forEach(i => i.remove());


  const elementoM = document.querySelectorAll('.elementoM');
  function activelink() {
    elementoM.forEach((item) =>
      item.classList.remove('activo'));
    this.classList.add('activo');
  }
  elementoM.forEach((item) =>
    item.addEventListener('click', activelink));
} */ 

let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
 }
}

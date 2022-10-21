const menuItems = document.querySelector(".menu-items");
const hamburger = document.querySelector(".hamburger");
const w410 = document.querySelector(".w_410");
const navlinks = document.querySelector('.navLinks');
const navLinksContainer = document.querySelector('.navLinksContainer');
const container = document.querySelector('.container');
hamburger.addEventListener("click", () => {
    menuItems.classList.toggle("active");
    hamburger.classList.toggle("active");
})
w410.addEventListener("click", ()=> {
    w410.classList.toggle("active");
    navlinks.classList.toggle("active");
    navLinksContainer.classList.toggle("active");
    container.classList.toggle("deactive");
    window.onclick = function(event) {
        if (!event.target.matches('.hamburger')) {
            var dropdowns = document.getElementsByClassName("menu-items");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('active')) {
                    openDropdown.classList.remove('active');
                }
            }
        }
    }

})
// const pageNo= document.querySelector(".pageNo");

// pageNo.addEventListener("click",()=>{
//     pageNo.classList.toggle("active");
// })
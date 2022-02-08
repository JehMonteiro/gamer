const manuList = document.getElementById("menu-list")
menuList.style.maxHeigh = "0px"

function showMenu(){
    if(menuList.style.minHeight == "0px"){
        menuList.style.maxHeigh = "120px"
    } else {
        menuList.style.maxHeigh = "0px"
   }
}



let notification=document.querySelector('#notifications');
let popup=document.querySelector('.notifications-pop-up');

notification.addEventListener("click",()=>{
    popup.style.display="block";
    prevantdefault();
})


const changecativeitem=()=>{
    menuitems.forEach(item=>{
        item.addEventListener("click",()=>{
            item.classList.remove("active");
        })
    })
}


const menuitems=document.querySelectorAll('.menu-item');

menuitems.forEach(item=>{
    item.addEventListener("click",()=>{
        changecativeitem();
        item.classList.add('active');

        // if(item.id != notifications){
        //     document.querySelector(".notifications-pop-up").style.display="none";
        // }
        // else{
        //     document.querySelector(".notifications-pop-up"). style.display="block";
        // }

        // document.querySelector("#notifications . notification-count").style.display="none";
    })
})

let cout=document.querySelector("#notifications");
let msg=document.querySelector("#message-notifications");
let disappear=document.querySelector('.notification-count');

cout.addEventListener("click",()=>{
    disappear.style.display="none";
})
msg.addEventListener("click",()=>{
    disappear.style.display="none";
})
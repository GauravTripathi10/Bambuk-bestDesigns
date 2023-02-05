function rightnavanimation(event1){
document.querySelector("#rightsidenav").addEventListener("mousemove",function(e1){
document.querySelector("#rightsidenav").style.cursor="pointer";
});

};
rightnavanimation();
function profileanimation(event2){
 var menu= document.querySelector("#menu");
 gsap.fromTo("#circle",{
    width:"0vw",
    height:"0vw",
    duration:"3",
    yoyo:true,
    repeat:-1,
    // dealy:10 ,
 },{
    width:"32vw",
    height:"32vw",
    duration:"3",
    yoyo:true,
    repeat:-1,
 });
 menu.addEventListener("click",function(e3){
    gsap.fromTo("#topscreen",{
        width:"0vw",
        height:"100vh",
    },
    {
        width:"100vw",
        height:"100vh",
    }
    )
});
};
profileanimation();

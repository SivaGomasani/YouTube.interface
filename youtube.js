let menu = document.querySelector("#menu");
menu.addEventListener("click",function(event)
{
    event.preventDefault();
    const menubar = document.getElementById('menu-bar');
    menubar.classList.toggle("open");
});
document.querySelectorAll(".settings-link").forEach(link => 
    {
        link.addEventListener("click", function(event) 
    {
        event.preventDefault();
        const settings = document.getElementById("settings");
        settings.classList.toggle("open-settings");
    });
});
document.querySelector("#mic").addEventListener("click",function(event)
{
    event.preventDefault();
    const micon = document.getElementById("mic-icon");
    micon.classList.toggle("mic-icon-open");
});




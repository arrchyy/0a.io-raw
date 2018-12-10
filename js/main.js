_.each(document.getElementsByClassName("ArchyItem"),function(item){
    var aLink = item.querySelector(".ArchyItemTitle a")
    var date = item.querySelector(".ArchyItemDate")
    var img =  item.querySelector(".ArchyItemImg")
    if(date == null){
        date = item.querySelector(".ArchyItemSubtitle")
    }
    _.each([aLink,img],function(x){
    x.addEventListener("mouseover",function(){
        aLink.classList.add("hover")
        date.classList.add("ArchyItemDateHover")
    })
    x.addEventListener("mouseout",function(){
        aLink.classList.remove("hover")
        date.classList.remove("ArchyItemDateHover")
    })})
})

var l = document.getElementsByClassName("zeroDegreeLogo")[0]
l.addEventListener("click",function(){
    window.location.href = "http://0a.io"
})

var zer0DLogo = document.getElementsByClassName("zeroDegreeLogo")[0]
var zer0DLogod = zer0DLogo.querySelector(".description")

zer0DLogo.addEventListener("mouseover",function(){
    zer0DLogod.classList.add("hover")
})

zer0DLogo.addEventListener("mouseout",function(){
    zer0DLogod.classList.remove("hover")
})

window.copyCurrentURL = function(){
    var copyText = document.getElementById("currrentLink");
    copyText.select();
    document.execCommand("copy");
}

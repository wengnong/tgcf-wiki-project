document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('a[href="#goto-char"]').addEventListener("click", function(event){
        event.preventDefault()
        var target = document.getElementById("goto-char")
        var paddingTop = -65;
        var offsetTop = target.offsetTop;
        var scrollPosition = offsetTop - paddingTop;
        window.scrollTo({top: scrollPosition, behavior: 'smooth'});
    });
});

document.addEventListener('DOMContentLoaded', function(){
    const expand = document.getElementById('expand');
    const addInfo = document.getElementById('add-info');

    expand.addEventListener('click', function(){
        if(addInfo.style.maxHeight){
            addInfo.style.maxHeight = null;
        }
        else{
            addInfo.style.maxHeight = addInfo.scrollHeight + "px";
        }
    });
});

document.body.onload=function(){
    
    setTimeout(function(){
        var preloader = document.getElementById('page-preloader');
        if(!preloader.classList.contains('done'))
            {
                preloader.classList.add('done');
            }
    }, 2000);
      document.getElementById("login").style.boxShadow="13px 13px 27px 4px rgba(0,0,0,0.75)";
}
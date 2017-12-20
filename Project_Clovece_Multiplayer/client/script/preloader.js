
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

function inputOperation(){
        var firstNum = document.getElementById('first');
        var secondNum = document.getElementById('second');
        var error=0;
        if(firstNum.value=='')
        {
        
        document.getElementById('errorFirst').innerHTML="Invalid input!";
        }
        else
        {
            document.getElementById('errorFirst').innerHTML="";
        }
        if(secondNum.value=='')
            {
                document.getElementById('errorSecond').innerHTML="Invalid input!";
            }
        else
            {
                document.getElementById('errorSecond').innerHTML="";
            }
     }
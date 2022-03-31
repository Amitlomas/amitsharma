$(document).ready(function(){
    $(".formentry,.progselection").focus(function(){
        $(this).css("background-color","#00168038");     
    });
    $(".formentry,.progselection,fapply").blur(function(){
        $(this).css("background-color","");
    });
    $(".fapply").Submit(function(){
        alert("Your Form is Submitted");
    });
});
   


    



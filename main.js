$("#btn").click(function(){
    var ps1 = $("#pass1").val();
    var ps2 = $("#pass2").val();


    if(ps1 != "" & ps2 != ""){
        if(ps1==ps2){
            alert("Password Matched");
        }
        else{
            alert("Error! Password not matching.");
        }
    }
    else{
        alert("Please input password");
    }
})

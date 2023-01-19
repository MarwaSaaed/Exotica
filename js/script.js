var x= document.getElementsByClassName("imag");
for(var i=0;i<x.length;i++)
{
    console.log(x[i]);
    x[i].addEventListener("click",function()
    {
        document.getElementById("drop1").innerHTML=x[i];
    })
}

// $(document).ready(function()
// {
// $("#drop1").hover(function()
//     {
//      $("#twoUL").css("display", "block");  
//     }
//     )
// })
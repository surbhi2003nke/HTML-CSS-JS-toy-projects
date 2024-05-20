let dec=document.getElementById("dec");
let res=document.getElementById("res");
let inc=document.getElementById("inc");
let counterlabel=document.getElementById("counterlabel");

let ct=0;

dec.onclick = function()
{
    ct--;
    counterlabel.textContent=ct;
} 

inc.onclick = function()
{
    ct++;
    counterlabel.textContent=ct;
} 
res.onclick = function()
{
    ct=0;
    counterlabel.textContent=ct;
} 

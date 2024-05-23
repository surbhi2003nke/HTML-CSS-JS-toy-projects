
function rolldice(){
    const num = document.getElementById("num").value;
    const diceresult = document.getElementById("diceresult");
    const diceimages = document.getElementById("diceimages");

    const val = [];
    const ima = [];

    for(let i=0; i<num; i++){
        const v=Math.floor(Math.random()*6)+1;
        val.push(v);
        ima.push(`<img src="${v}.png">`);
    }

    diceresult.textContent = `Dice : ${val.join(', ')}`;
    diceimages.innerHTML = ima.join(' ');   

}
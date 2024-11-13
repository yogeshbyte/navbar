let userINPUT =document.getElementById("date")
userINPUT.max =new date().toISOString().splite("T")[0];

let result = document.getElementById("result")

function calculateage(){
    let birthday = new date(userInput.value);

    let d1 = birthday.getdate();
    let m1 = birthday.getmonth()+1;
    let y1 = birthday.getyear();
}


let today =new date();

let d2 = today.getdate();
let m2 = today.getmonth()+1;
let y2 = today.getyear();


let d3,m3,y3;

y3 = y2-y1;

if(m2>=m1){
    m3 = m2-m1;
}


else{
    y3--;
    m3 = 12+m2-m1
}


if(d2>=d1){
    d3 = d2-d1;
}

else{
    m3--;
    d3= getdaysInmonth(y1,m2)+d2-d1;
}


if(m3<0){
    m3 = 11;
    y3--;
}

result.innerHTML = `you are $(y3) years, $(m3) months and $(d3) old`




function getdaysInmonth(year ,month){
    return new date (year,month,0).getdate();
}


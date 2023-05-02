function next(){
    var c=document.getElementById("mytext").value;
    if(c.toLowerCase() == "whale")
    {
        alert("YOU GOT A GREAT EYE...😁 MEMORISE THIS ANSWER IT MIGHT BE HELPFUL");
        addData();
        return;
    }
    else{
        alert("your answer is wrong...try again...");
        return;
    }
}
var cnt=0;
function show() {
    var para = document.getElementById("myPara");
    if (para.style.display == "block") {
        para.style.display = "none";
    } else {
        para.style.display = "block";
    }
    score();
    cnt=1;
}
var ts=0;
var timer=setInterval(countTimer,1000);
function countTimer()
{
    ++ts;
    var min=Math.floor(ts/60);
    var sec=ts-min*60;
    document.getElementById("countup").innerHTML=min+":"+sec;
    if(ts%60==0)
    {
        score();
    }
}
let s=55;
//var scores=setInterval(score,1);
function score()
{
    if(ts%60==0)
    {
        s=s-5;
    }
    else if(cnt==0)
    {
        s=s-10;
    }
    document.getElementById("score").innerHTML=s;
}
const addData = async () => {
    const data = {
      levelName: "level3",
      time: ts,
      score: s,
      stage: 3,
    };
    const token = window.localStorage.getItem("token");
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data),
    };
    fetch("http://localhost:4000/level/add", options)
      .then((data) => {
        if (!data.ok) {
          throw Error(data.status);
        }
        return data.json();
      })
      .then((update) => {
        console.log(update)
        location.href="s4.html";
      })
      .catch((e) => {
        console.log(e);
      });
  };
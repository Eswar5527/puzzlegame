function check()
{
    var c=document.getElementById("ans").value;
    if(c=='1')
    {
        addData();
    }
    else{
        alert("IT'S A WRONG ONE");
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
    cnt++;
    score();
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
function score()
{
    if(ts%60==0)
    {
        s=s-5;
    }
    else if(cnt==1)
    {
        s=s-10;
    }
    document.getElementById("score").innerHTML=s;
}
const addData = async () => {
    const data = {
      levelName: "level1",
      time: ts,
      score: s,
      stage: 1,
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
                location.href="s2.html";
      })
      .catch((e) => {
        console.log(e);
      });
  };
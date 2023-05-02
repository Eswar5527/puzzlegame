function check()
{
    var c=document.getElementById("ans").value;
    if(c.toLowerCase()=="cracked")
    {
        addData();
    }
    else{
        alert("YOUR ANSWER IS WRONG");
        location.href="s1.html";
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
      levelName: "level4",
      time: ts,
      score: s,
      stage: 4,
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
        location.href="final.html"
      })
      .catch((e) => {
        console.log(e);
      });
  };
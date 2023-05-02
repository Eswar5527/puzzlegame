let c=0;
function alert1()
{
    alert("YOUR ANSWER IS WRONG.....😕😕😕");
    c++;
    if(c==2)
    {
        alert("YOU HAVE USED YOUR CHANCES");
        location.href="s1.html";
        return;
    }
    return;
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
function next()
{
    addData();
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
      levelName: "level2",
      time: ts,
      score: s,
      stage: 2,
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
        location.href="s3.html";
      })
      .catch((e) => {
        console.log(e);
      });
  };
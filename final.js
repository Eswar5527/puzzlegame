
function playagain()
{
    location.href="s1.html";
}
function exit()
{
    location.href="index.html";
}

const calcscore = async () => {
    const token = window.localStorage.getItem("token");
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  fetch("https://elitmus-backend-p0vq.onrender.com/score/add", options)
    .then((data) => {
      if (!data.ok) {
        throw Error(data.status);
      }
      return data.json();
    })
    .then((update) => {
      console.log(update);
      document.getElementById("highest-score").innerHTML= update.Highest
      var min=Math.floor(update.CurrentTime/60);
      var sec=update.CurrentTime-min*60;
      document.getElementById("currn-time").innerHTML= min+":"+sec;
      document.getElementById("currn-score").innerHTML= update.currScore;
    })
    .catch((e) => {
      console.log(e);
    });
};
//signup()

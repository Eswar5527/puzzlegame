const login = async () => {
    email = "test@gmail.com";
    password = "1234";
    const data = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
  console.log(data);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch("https://elitmus-backend-p0vq.onrender.com/user/login", options)
      .then((data) => {
        if (!data.ok) {
          if(data.status===401)
          {
            document.getElementById("mypara").style.visibility="visible";
          }
          throw Error(data.status);
        }
        return data.json();
      })
      .then((update) => {
        window.localStorage.setItem("token", update.token);
        console.log(update);
        location.href="intro.html";
      })
      .catch((e) => {
        console.log(e);
      });
  };
//login()  
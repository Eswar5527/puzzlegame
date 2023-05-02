const signup = async () => {
    email = "test2@gmail.com";
    password = "1234";
    fullName = "test2";
    mobile = "12345678"
    const data = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      fullName : document.getElementById("username").value,
      mobile : document.getElementById("phno").value,
    };
    console.log(data);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch("http://localhost:4000/user/signup", options)
      .then((data) => {
        if(data.status===409)
        {
            document.getElementById("mypara").style.visibility="visible";
        }
        if (!data.ok) {
          throw Error(data.status);
        }
        return data.json();
      })
      .then((update) => {
        console.log(data)
        location.href="login.html";
      })
      .catch((e) => {
        console.log(e);
      });
  };
  //signup()
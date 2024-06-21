const form = document.getElementById("form");
    const input = document.getElementById("input");
    const info = document.getElementById("info");
    const apiKey = "40a8f4335ef2193ddbde3f2a6333ccb9";

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      info.textContent = "";
      const inputValue = input.value;
      //alert(inputValue);
      const url =`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`;
      fetch(url)
      .then(response=>response.json())
      
      .then(data=>{
        const {main,name}=data;
        console.log(main);
        console.log(name);
        const para=document.createElement("div");
        const out = `<p>City:${name}</p>
                     <div>Temparature is:${main.temp}℃</div>`
        para.innerHTML=out;
        info.appendChild(para);
      })
      .catch(()=>{
        alert("Please enter a valid city")
      })
    form.reset();
    });

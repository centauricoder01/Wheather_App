// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=26ef319fb48768b0db64d7f486f335b4;
callme();
let va = document.getElementById("gmap_canvas");
let apikey = "26ef319fb48768b0db64d7f486f335b4";
async function callme() {
    document.querySelector("form").addEventListener("submit", async () => {
        try{
        let values = document.querySelector("#cityname").value;

            let catch_value = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${values}&appid=${apikey}&units=metric`);
    
            let data = await catch_value.json();
            console.log(data)
            console.log(data.weather[0].description)
            showData(data);
        }
        catch(err){
            alert("Please Enter Valid City 😃")
        }
    })
}

let main_data = document.getElementById("temperature")
function showData (data){
        main_data.innerHTML = "";
        let first = document.createElement("div");

        let one = document.createElement("h2")
        one.innerText = `City → ${data.name}`;

        let second = document.createElement("p")
        second.innerText = `Country → ${data.sys.country}`;

        let third = document.createElement("p")
        third.innerText = `Temperature → ${data.main.temp}℃`;

        let fourth = document.createElement("p");
        fourth.innerText = `Pressure → ${data.main.pressure}`;

        let fifth = document.createElement("p");
        fifth.innerText = `Humidity → ${data.main.humidity}`;

        let sixth = document.createElement("p");
        if(data.main.sea_level === undefined){
            sixth.innerText = `Sea - Level → 1000`;
        }
        else{
            sixth.innerText = `Sea - Level → ${data.main.sea_level}`;
        }

        let seventh = document.createElement("p");
        if(data.weather[0].description === undefined){
            seventh.innerText = `Weather → Normal Weather`;
        }
        else{
            seventh.innerText = `Weather → ${data.weather[0].description}`;
        }

        let eight = document.createElement("p");
        eight.innerText = `Wind-speed → ${data.wind.speed}`;

        first.append(one,second, third, fourth,fifth,sixth,seventh,eight)
        main_data.append(first);

        va.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
}



document.addEventListener("DOMContentLoaded",()=>{
    setInterval(()=>{
        fetch("https://206.189.146.138/api/sensors")
        .then(response => response.json())
        .then(data => {
            const time   = data.timestamp;
            const temp   = data.temperature.toFixed(3);
            const hum    = data.humidity.toFixed(3);
            const light  = data.luxsensor.toFixed(3);
            const motion = data.motion ? "Motion" : "No motion";

            const date   = new Date(time)
            const day    = date.getDate();
            const month  = date.getMonth()+1;
            const year   = date.getFullYear();
            
            document.querySelector("#time").innerHTML   = `Day : ${day}/${month}/${year}`
            document.querySelector("#temp").innerHTML   = `${temp} celsius`
            document.querySelector("#hum").innerHTML    = `${hum} %`
            document.querySelector("#light").innerHTML  = `${light} luxes`
            document.querySelector("#motion").innerHTML = motion;

            var temp_b = document.getElementById("temp");
            var hum_b = document.getElementById("hum");
            var lux_b = document.getElementById("light");
            temp_b.style.width = temp + "%";
            hum_b.style.width = hum + "%";
            lux_b.style.width = light + "%";
        });
    },1000)
    
});
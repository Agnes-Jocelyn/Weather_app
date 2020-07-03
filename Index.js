 

const URLjakarta = "http://api.openweathermap.org/data/2.5/weather?q=Jakarta,ID&appid=08c63bb12c5a4132f5d570f08f17872d"

fetch(`${URLjakarta}`)
.then(response => {
    return response.json()
})
.then(data =>{
    console.log(data);
    
    const cityName = document.querySelector("#city_name");
    cityName.innerHTML = data.name;
    const cityIcon = document.querySelector("#icon");
    cityIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const date = new Date()
    const cityDate = document.querySelector("#city_date")
    cityDate.innerHTML = date;
    const cityDesc = document.querySelector("#city_desc");
    cityDesc.innerHTML = data.weather[0].main;
    const cityInfo = document.querySelector("#city_info");
    cityInfo.innerHTML = data.weather[0].description;
    const cityTemp = document.querySelector("#city_temp");
    cityTemp.innerHTML = data.main.temp;
})

const URLjawa = "http://api.openweathermap.org/data/2.5/weather?id=1642672&appid=08c63bb12c5a4132f5d570f08f17872d"

fetch(`${URLjawa}`)
.then(response => {
    return response.json()
})
.then(data =>{
    console.log(data);

    const cityName2 = document.querySelector("#city_name2");
    cityName2.innerHTML = data.name;
    const cityIcon2 = document.querySelector("#icon2");
    cityIcon2.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const date = new Date()
    const cityDate2 = document.querySelector("#city_date2")
    cityDate2.innerHTML = date;
    const cityDesc2 = document.querySelector("#city_desc2");
    cityDesc2.innerHTML = data.weather[0].main;
    const cityInfo2 = document.querySelector("#city_info2");
    cityInfo2.innerHTML = data.weather[0].description;
    const cityTemp2 = document.querySelector("#city_temp2");
    cityTemp2.innerHTML = data.main.temp;
})

const URLkepri = "http://api.openweathermap.org/data/2.5/weather?id=1629652&appid=08c63bb12c5a4132f5d570f08f17872d"

fetch(`${URLkepri}`)
.then(response => {
    return response.json()
})
.then(data =>{
    console.log(data);

    const cityName3 = document.querySelector("#city_name3");
    cityName3.innerHTML = data.name;
    const cityIcon3 = document.querySelector("#icon3");
    cityIcon3.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const date = new Date()
    const cityDate3 = document.querySelector("#city_date3")
    cityDate3.innerHTML = date;
    const cityDesc3 = document.querySelector("#city_desc3");
    cityDesc3.innerHTML = data.weather[0].main;
    const cityInfo3 = document.querySelector("#city_info3");
    cityInfo3.innerHTML = data.weather[0].description;
    const cityTemp3 = document.querySelector("#city_temp3");
    cityTemp3.innerHTML = data.main.temp;
})
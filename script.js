const apiKey="247f7c7848863e86dba27b3e5f9a3e2a";
const apiUrl=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const cityname=document.querySelector(".header input");
const buttonvalue=document.querySelector(".header button");
async function getData(city){
    const dataresponse=await fetch(apiUrl+city+`&appid=${apiKey}`);
    const response=await dataresponse.json();
    console.log(response);
    if(city===''){
        document.querySelector(".invaliddata").style.display='block';
        return;
    }
    if(response.cod==='404'){
        document.querySelector(".invaliddata").style.display='block';
        return;
    }
    else{
        document.querySelector(".temp").innerHTML=Math.round(response.main.temp)+`°c`;
        document.querySelector(".city").innerHTML=response.name;
        document.querySelector(".humidity").innerHTML=response.main.humidity+'%';
        document.querySelector(".wind").innerHTML=Math.round(response.wind.speed)+'Km/h';
        document.querySelector(".weather").style.display='block';
        document.querySelector(".invaliddata").style.display='none';
        if(response.weather[0].main==='Clouds'){
            document.querySelector(".weather-icon").src="images/clouds.png";
        }
        else if(response.weather[0].main==='Clear'){
            document.querySelector(".weather-icon").src="images/clear.png";
        }
        else if(response.weather[0].main==='Drizzle'){
            document.querySelector(".weather-icon").src="images/drizzle.png";
        }
        else if(response.weather[0].main==='Mist'){
            document.querySelector(".weather-icon").src="images/mist.png";
        }
        else if(response.weather[0].main==='Snow'){
            document.querySelector(".weather-icon").src="images/snow.png";
        }
    }

}
buttonvalue.addEventListener('click',()=>{
    getData(cityname.value);
})
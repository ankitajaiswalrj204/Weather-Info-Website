const submitBtn =document.getElementById('submitbtn');
const inputBtn=document.getElementById('city-name');
const message =document.getElementById('message');
const datahide=document.querySelector('.temInfo');
const msg=document.querySelector('.message');



const getinfo = async(event)=>{
    event.preventDefault();
    console.log(inputBtn.value);
    city=inputBtn.value;
    let app_key='59a45fa71bb8024cbb5f60668db55b9d';
    baseURL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${app_key}&units=metric`; 


    if(city ==""){
        datahide.classList.add('data-hide');
        msg.classList.remove('message');
        message.innerText =`Please enter the city name`;
        
    }

    else{

        
        try{
                    

                    await fetch(baseURL).then(weather =>
                    {
                        return weather.json();
                    }).then(ShowWeatherReport);

                    msg.classList.add('message');
                    datahide.classList.remove('data-hide');


        }

        catch{
            datahide.classList.add('data-hide');
            msg.classList.remove('message');
            message.innerHTML=`Please enter the name properly`;
        }
    }



}
function ShowWeatherReport(weather){
   
    console.log(weather);

    city=document.getElementById('city');
    city.innerText = `${weather.name} , ${weather.sys.country}`

    let temp=document.getElementById('temp');
    temp.innerHTML=`${weather.main.temp}`;



    let Icon = document.getElementById('icon');

    let weatherType=weather.weather[0].main ;

    let showhtml="";

    if(weatherType == "Clear")
    {
        Icon.innerHTML=`<i class="fa fa-sun" aria-hidden="true" style='color:#eccc68' ></i>`
    }

    else if(weatherType=="Clouds")
    {
        Icon.innerHTML=`<i class="fa fa-cloud" aria-hidden="true"  style='color:sky blue'></i>`
    }
    else if(weatherType=="Mist")
    {
        Icon.innerHTML=`<i class="fas fa-smog" style='color:#fff'></i>`
    }
    else if(weatherType=="Haze")
    {
        Icon.innerHTML=`<i class="fas fa-smog" style='color:#fff'></i>`
    }
    else if(weatherType=="Thundestorm")
    {
        Icon.innerHTML=`<i class="fas fa-poo-storm"  style='color:#fff'></i>`
    }
    else if(weatherType=="Rain")
    {
        Icon.innerHTML=`<i class="fas fa-cloud-rain" aria-hidden="true"  style='color:#f1f2f6'></i>`
    }


    let date = document.getElementById('C-date')
    let TDate = new Date();
    date.innerText=managedate(TDate);



}

function managedate(dt)
{
    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let days=["Sunday","Monday","Tuesday","Wednessday","Thursday","Friday","Saturday"];
    

    let month=months[dt.getMonth()];
    let day=days[dt.getDay()];
    let date=dt.getDate();
    return `${date} ${month} (${day}) `;

}

submitBtn.addEventListener('click',getinfo);

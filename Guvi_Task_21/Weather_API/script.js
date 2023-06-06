//get all reference
let form=document.querySelector('.weatherForm');
let cityInput=document.querySelector('.cityinput');
let weatherInfo=document.querySelector('.weatherinfo');
let searchButton=document.querySelector('.searchbutton');
let icon=document.querySelector('.icon')

//function when user Pressed button or enter
function handleSubmit(event)
{
    event.preventDefault();
    let city=cityInput.value;
    const api='7afa2025a4dbf3d5c8a2a9f683402c9e';
    const c_code='IN'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${c_code}&appid=${api}`)
    .then(res=>{
        //console.log('res.status: ', res.status);
        //To check whether the requested city is exists or not
    if (res.status==404)
    {
        //console.log("No")
        weatherInfo.innerHTML=''
        let error_div=document.createElement('row')
        error_div.setAttribute('class','row')
        let error_col=document.createElement('col')
        error_col.setAttribute('class','col-sm-12')
        error_col.innerHTML=`<p><span style="color:red">Sorry, No results found:(  Please enter any other city or state within India </span></p>`
        error_div.append(error_col)
        weatherInfo.append(error_div)
    }
    //If city exists
    else
    {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${c_code}&appid=${api}`)
    .then(response=>response.json())
    .then(data=>
        {
           // console.log(data)
            //Fetching the neccessary data to show in page
            weatherInfo.innerHTML=''
            let div=document.createElement('div')
            div.setAttribute('class','card text-center')
            let Icon=data.weather[0].icon
            let img=`https://openweathermap.org/img/wn/${Icon}.png`
            let name=data.name; //chennai
            let temp=((data.main.temp)-273.15).toFixed(1) ; //31.1
            let feels_like=((data.main.feels_like)-273.15).toFixed(1) ; //38.1
            let visibilty=(data.visibility)/1000; //4000
            let humidity=data.main.humidity; //83
            let wind=(data.wind.speed); //5.66
            let main=data.weather[0].main; //Thunderstorm
            let description=data.weather[0].description; //thunderstorm
            //console.log(name+"  "+temp+"  "+feels_like+"  "+visibilty+"  "+humidity+"  "+wind+"  "+main+"  "+description)
            div.innerHTML=`<div class="card text-center" >
                                <div class="card-header name back_color">
                                    ${name}
                                </div>
                                <div class="card-body b_image">
                                    <img src=${img} alt="..." height="50px" width="100px" class="i_color">
                                    <h3 class="card-title" font>${main}</h3>                                   
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item font1 b_ul">Temperature: ${temp}&deg;C</li>
                                    <li class="list-group-item font1 b_ul">Humidity: ${humidity}&percnt;</li>
                                    <li class="list-group-item font1 b_ul">Feels_Like: ${feels_like}&deg;</li>
                                    <li class="list-group-item font1 b_ul">Wind: ${wind} km/h</li>
                                    <li class="list-group-item font1 b_ul">Visibility: ${visibilty} km</li>
                                </ul>
                                <div class="card-body back_color">
                                <p class="card-text font1">There will be ${description}!!!</p>
                                </div>
                                </div>`
            
            weatherInfo.append(div)
            
        })
        .catch((error)=>{
            console.log(error);
        })
    }
})
}

form.addEventListener('submit',handleSubmit)
searchButton.addEventListener('click',handleSubmit)
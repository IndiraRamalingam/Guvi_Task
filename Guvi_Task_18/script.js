//Getting values from Rest countries API
fetch('https://restcountries.com/v3.1/all')
    .then(response=>response.json())
    .then(data=> 
        {
            getData(data)
        })

//Create a div with class container
let div=document.createElement('div');
div.setAttribute('class','container')
document.body.append(div)

//create h1
let header=document.createElement('h1')
header.setAttribute('class','text-center')
header.id="title"
header.innerHTML="Rest Countries"

      
//Create row and columns and append it
let div_row=document.createElement('div')
div_row.setAttribute('class','row row-cols-1 row-cols-md-3 g-4')

//Fetching Restcountries data
function getData(data)
{   
    for(e of data)
    {
        let country_name=e.name.common;
        let capital =e.capital
        let region=e.region
        let country_code=e.cca3
        let flags=e.flags.png;
        let lat=e.latlng[0]
        let lon=e.latlng[1]
        // console.log(e.latlng)
        //console.log(e.name.common,e.region,e.capital,e.latlng[0],e.latlng[1],e.flags,e.cca3)
        
         //create cards and append it to column        
         let div_col=document.createElement('div')
         div_col.setAttribute('class','col')
        let card_group=document.createElement('div')
        card_group.setAttribute('class','card-group')

        function create_cards(country_name,capital,region,country_code,flags)
        {
            let card_div=document.createElement('div')
            card_div.setAttribute('class','card h-100')
            card_div.id="div_card"
            card_div.setAttribute('style','width:18rem')
            //create header for card
            let card_header=document.createElement('h4')
            card_header.setAttribute('class','card-header text-center fw-bold')
            card_header.innerHTML=country_name;
            //create image
            let card_img=document.createElement('img')
            card_img.setAttribute('class','card-img-top')
            card_img.width='150';
            card_img.height='200';
            card_img.src=flags
            //create card-body
            let card_body=document.createElement('div')
            card_body.setAttribute('class','card-body')
            let p1=document.createElement('p')
            let p2=document.createElement('p')
            let p3=document.createElement('p')
            p1.setAttribute('class','card-text text-center')
            p2.setAttribute('class','card-text text-center')
            p3.setAttribute('class','card-text text-center')
            p1.innerHTML="Capital: "+capital            
            p2.innerHTML="Region: "+region
            p3.innerHTML="Country Code: "+country_code    
            card_body.append(p1,p2,p3)                
            //create button inside card
            let card_btn=document.createElement('button')
            card_btn.id='weather-info'
            card_btn.setAttribute('type','button')
            card_btn.setAttribute('class','btn btn-primary')
            card_btn.innerHTML="Click for weather"
            card_btn.onclick=fetchWeather;
            card_btn.setAttribute('role','button')
            card_btn.setAttribute('data-toggle','popover')
            card_btn.setAttribute('data-trigger','focus')
            card_btn.setAttribute('data-placement','top')
            
        //Function for fetchWeather    
        function fetchWeather()
        {
            $(function () {
                //Getting values from weather API
                //API KEY 
                const api_key='7afa2025a4dbf3d5c8a2a9f683402c9e'
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`)
                .then(response=>response.json())
                .then(data=> 
                    {
                        console.log(data)
                        let name_li=document.getElementById('name')
                        name_li.innerHTML=`${data.weather[0].main}`
                        let temp_li=document.getElementById('temp')
                        temp_li.innerHTML=`Temp: ${data.main.temp}&deg;C `
                        let descrip=document.getElementById('description')
                        descrip.innerHTML=`<h6>There will be ${data.weather[0].description}<h6>`
                        let humidity_li=document.getElementById('humidity')
                        humidity_li.innerHTML=`Humidity: ${data.main.humidity}&percnt;`
                    })   

                //Popover function
                $('[data-toggle="popover"]').popover({
                    placement: 'top',
                    trigger: 'focus',
                    html: true,
                    content: ' <div><img src="https://shorturl.at/alwD7" class="card-img-top" alt="weather" height="100px" width="200px"><h4 class=" text-center" id="name"></h4><h5 class=" text-center" id="temp"></h5><h5 class=" text-center" id="humidity"></h5><p class="text-center" id="description"></p></div>'
                  })
              })
            //Popover dismiss function
            $('.popover-dismiss').popover({
                trigger: 'focus'
              })
                
        }

        //Append to card_div
        card_div.append(card_header,card_img,card_body,card_btn)
        return card_div;
        }      
        let card=create_cards(country_name,capital,region,country_code,flags)
        card_group.append(card)
        div_col.append(card_group)      
        div_row.append(div_col)       

    }
}
//Append all to div
div.append(header,div_row)  








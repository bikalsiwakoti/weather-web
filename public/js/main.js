const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");

const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_value_real = document.getElementById('temp_value_real');
const data_hide = document.querySelector(".middle_layer");

const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;

    if(cityVal === ""){
        city_name.innerHTML= `You haven't Enter Any City Name`
        data_hide.classList.add('data_hide')
    }else {
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=a490adf152667a5548d18365d380c0a6`
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            const arrData = [data];

            city_name.innerHTML= `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_value_real.innerText = arrData[0].main.temp;

            const tempMood = arrData[0].weather[0].main;
            
            //to check sunny or clouds
            if (tempMood == "Clear"){
                temp_status.innerHTML = 
                "<i class='fas fa-sun' style='color: rgb(252, 252, 47);'></i>"
            }
            else if (tempMood== "Clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #5fcef3de;'></i>"
            }
            else if (tempMood== "Rainy"){
                temp_status.innerHTML = "<i class='fas fa-rain' style='color: #a4b0be;'></i>"
            }
            else {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: rgb(252, 252, 47);'></i>"
            };
            data_hide.classList.remove('data_hide')


        }catch { 
            city_name.innerHTML= `Please fill the city name properly`
            data_hide.classList.add('data_hide')
        }
        
    }

}
submitBtn.addEventListener('click', getInfo);
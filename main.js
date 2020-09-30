
  // global variables
  const select = document.querySelectorAll('select');
  const input = document.querySelector('input');
  const result = document.querySelector('.result');
  const dateToday = document.querySelector('.data');
  const buttonChange = document.querySelector('.change')
  const API_url = "https://api.exchangeratesapi.io/latest";
  let html = '';
  const licznik = document.querySelector('.licznik');
  const img = document.querySelectorAll('img')
  const fullName = document.querySelectorAll('.currFUllName p');

const currData = [
  {
    name : "USD",
    fullName : "American Dollar",
    symbol: "$",
    flagUrl : "flaga usa"
  },
  {
    name : "PLN",
    symbol: "&#926;",
    fullName: "Polski zloty",
    flagUrl : "flaga eur"
  }
]






    
// fetch Api
  async function currency(){
    const res = await fetch(API_url);
    const data = await res.json();

    const arrKeys = Object.keys(data.rates);
    const rates = data.rates;
    
    //set today date
    dateToday.textContent = data.date
    // add options into select
    arrKeys.map(item =>{
      return html += `<option value=${item}>${item}</option>`;
    });
    console.log(data.rates)

    html0 = html.replace("value=USD", "selected value=USD");
    html1 = html.replace("value=PLN", "selected value=PLN");
          
    select[0].innerHTML =html0;
    select[1].innerHTML= html1
    // auto result
    licznik.textContent = `1  ${select[0].value} = ${(rates[select[1].value]/ rates[select[0].value]).toFixed(2)} ${select[1].value}`

    function convert(){
      if(input.value !== ""){

        result.innerHTML = `<p>${input.value} ${select[0].value}</p>
        <text>=</text>
        <span>${(input.value * rates[select[1].value]/ rates[select[0].value]).toFixed(2)} ${select[1].value}</span>
        ` };
      };

    function changeFlag(){
      // wyswietlenie flagi i numerow
  
      currData.forEach(element => {
            if(select[0].value == element.name){
              console.log(element.name)}
              
            if(select[1].value == element.name){
              console.log(element.name)
            };
            if(select[0].value == element.name){
              fullName[0].innerHTML = element.fullName + element.symbol;
            }
            if(select[1].value == element.name){
              fullName[1].innerHTML = element.fullName + element.symbol;
            }


          });
    };
    

      
      
    input.addEventListener('keyup', ()=> {
      if(!isNaN(input.value)){
        if(input.value === "")result.textContent = '';
        if(input.value < 0) input.value = -input.value;
        convert();
      }
      else input.value = '';
          
    } );

    select[0].addEventListener('change', ()=>{

      convert();

      licznik.textContent = `1  ${select[0].value} = ${(rates[select[1].value]/ rates[select[0].value]).toFixed(2)} ${select[1].value}`;
      changeFlag();


        
        
      });



      select[1].addEventListener('change', ()=>{
        convert();
        licznik.textContent = `1  ${select[0].value} = ${(rates[select[1].value]/ rates[select[0].value]).toFixed(2)} ${select[1].value}`;
        changeFlag();
  
      });
    
      buttonChange.addEventListener('click', ()=>{
        // swap values
      [select[0].value, select[1].value] = [select[1].value, select[0].value];
      input.value= '';
      result.textContent= '';
      
      licznik.textContent = `1  ${select[0].value} = ${(rates[select[1].value]/ rates[select[0].value]).toFixed(2)} ${select[1].value}`;
      
        // swap img
        [img[0].src, img[1].src ] = [img[1].src, img[0].src ];
        // img[0].src = img[1].src

        // swap full name
        [fullName[0].textContent, fullName[1].textContent] = [fullName[1].textContent, fullName[0].textContent] 

        
      });

    };
currency();
  



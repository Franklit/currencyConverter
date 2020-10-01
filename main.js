
  // global variables
  const select = document.querySelectorAll('select');
  const input = document.querySelector('input');
  const result = document.querySelector('.result');
  const dateToday = document.querySelector('.data');
  const buttonChange = document.querySelector('.change')
  const API_url = "https://api.exchangeratesapi.io/latest";
  let html = '';
  const licznik = document.querySelector('.licznik');
  const img = document.querySelectorAll('.flags')
  const fullName = document.querySelectorAll('.currFullName .name');

const currencyList = [

  {
    name : "AUD",
    symbol: "&#36;",
    fullName: "Australian dollars",
    flagUrl : "foto/au.gif"
  },
  {
    name : "BGN",
    symbol: "лв",
    fullName: "Bulgarian lev",
    flagUrl : "foto/bg.gif"
  },
  {
    name : "BRL",
    symbol: "R$",
    fullName: "Brazilian real",
    flagUrl : "foto/br.gif"
  },
  {
    name : "CAD",
    symbol: "&#x24;",
    fullName: "Canadian dollars",
    flagUrl : "foto/ca.gif"
  },
  {
    name : "CHF",
    symbol: "CHF",
    fullName: "Swiss franc",
    flagUrl : "foto/ch.gif"
  },
  {
    name : "CNY",
    symbol: "&#20803;",
    fullName: "Chinese yuan",
    flagUrl : "foto/cn.gif"
  },
  {
    name : "CZK",
    symbol: "Kč",
    fullName: "Czech koruna",
    flagUrl : "foto/cz.gif"
  },
  {
    name : "DKK",
    symbol: "kr",
    fullName: "Danish krone",
    flagUrl : "foto/dk.gif"
  },
  {
    name : "GBP",
    symbol: "&#xA3;",
    fullName: "Pounds sterling",
    flagUrl : "foto/gb.gif"
  },
  {
    name : "HKD",
    symbol: "&#36;",
    fullName: "Hong Kong dollar",
    flagUrl : "foto/hk.gif"
  },
  {
    name : "HRK",
    symbol: "kn",
    fullName: "Croatian Kuna",
    flagUrl : "foto/hr.gif"
  },
  {
    name : "HUF",
    symbol: "ft",
    fullName: "Hungarian forint",
    flagUrl : "foto/hu.gif"
  },
  {
    name : "IDR",
    symbol: "Rp",
    fullName: "Indonesian rupiah",
    flagUrl : "foto/id.gif"
  },
  {
    name : "ILS",
    symbol: "&#x20AA;",
    fullName: "Israeli shekel",
    flagUrl : "foto/il.gif"
  },
  {
    name : "INR",
    symbol: "&#8377;",
    fullName: "Indian rupee",
    flagUrl : "foto/in.gif"
  },
  {
    name : "ISK",
    symbol: "kr",
    fullName: "Icelandic Krona",
    flagUrl : "foto/is.gif"
  },
  {
    name : "JPY",
    symbol: "&#165;",
    fullName: "Japanese yen",
    flagUrl : "foto/jp.gif"
  },
  {
    name : "KRW",
    symbol: "&#8361;",
    fullName: "South Korean won",
    flagUrl : "foto/kr.gif"
  },
  {
    name : "MXN",
    symbol: "&#x24;",
    fullName: "Mexican peso",
    flagUrl : "foto/mx.gif"
  },
  {
    name : "MYR",
    symbol: "RM",
    fullName: "Malaysian ringgit",
    flagUrl : "foto/my.gif"
  },
  {
    name : "NOK",
    symbol: "kr",
    fullName: "Norwegian krone",
    flagUrl : "foto/no.gif"
  },
  {
    name : "NZD",
    symbol: "&#36;",
    fullName: "New Zealand dollar",
    flagUrl : "foto/nz.gif"  
  },
  {
    name : "PHP",
    symbol: "&#8369;",
    fullName: "Philippine peso",
    flagUrl : "foto/ph.gif"
  },
  {
    name : "PLN",
    symbol: "zł",
    fullName: "Polish zloty",
    flagUrl : "foto/pl.gif"
  },
  {
    name : "RON",
    symbol: "lei",
    fullName: "Romanian leu",
    flagUrl : "foto/ro.gif"
  },
  {
    name : "RUB",
    symbol: "&#x20BD;",
    fullName: "Russian ruble",
    flagUrl : "foto/ru.gif"
  },
  {
    name : "SEK",
    symbol: "kr",
    fullName: "Swedish krona",
    flagUrl : "foto/se.gif"
  },
  {
    name : "SGD",
    symbol: "&#36;",
    fullName: "Singapore dollar",
    flagUrl : "foto/sg.gif"
  },
  {
    name : "THB",
    symbol: "&#3647;",
    fullName: "Thai baht",
    flagUrl : "foto/th.gif"
  },
  {
    name : "TRY",
    symbol: "&#x20BA;",
    fullName: "Turkish lira",
    flagUrl : "foto/tr.gif"
  },
  {
    name : "USD",
    symbol: "&#x24;",
    fullName: "US dollar",
    flagUrl : "foto/us.gif"
  },
  {
    name : "ZAR",
    symbol: "R",
    fullName: "South african rand",
    flagUrl : "foto/za.gif"
  },
  {
    name : "EUR",
    symbol: "&#x20AC;",
    fullName: "Euro",
    flagUrl : "foto/eu.jpg"
  },
]






    
// fetch Api
  async function currency(){
    const res = await fetch(API_url);
    const data = await res.json();
    // add euro
    data.rates['EUR'] = 1;
    console.log(data.rates)

    const arrKeys = Object.keys(data.rates);
    const rates = data.rates;
    
    //set today date
    dateToday.textContent = data.date;


    // add options into select
    arrKeys.map(item =>{
      return html += `<option value=${item}>${item}</option>`;
    });
    console.log(data.rates)
    // add default display on select
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
  
      currencyList.forEach(element => {
            if(select[0].value == element.name){
              img[0].src=element.flagUrl}
              
            if(select[1].value == element.name){
              img[1].src=element.flagUrl
            };
            if(select[0].value == element.name){
              fullName[0].innerHTML =` <div>${element.symbol}</div> ${element.fullName}`;
            }
            if(select[1].value == element.name){
              fullName[1].innerHTML = ` <div>${element.symbol}</div> ${element.fullName}`;
            }


          });
    };
    // <div>$</div><br>US dollar 

      
      
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
        [fullName[0].innerHTML, fullName[1].innerHTML] = [fullName[1].innerHTML, fullName[0].innerHTML] 

        
      });

    };
currency();
  



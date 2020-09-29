
  const select = document.querySelectorAll('select');
  const input = document.querySelector('input');
  const result = document.querySelector('.result')
  const dateToday = document.querySelector('.data');
  const buttonChange = document.querySelector('.change')
  const API_url = "https://api.exchangeratesapi.io/latest";

  let html = '';

    
   const licznik = document.querySelector('div p')

  async function currency(){
    const res = await fetch(API_url);
    const data = await res.json();
    console.log(data)
    const arrKeys = Object.keys(data.rates);
    const rates = data.rates;
    console.log(rates);
    dateToday.textContent = data.date

    arrKeys.map(item =>{
      return html += `<option value=${item}>${item}</option>`;
    });
    html1 = html.replace("value=PLN", "selected value=PLN");
    html2 = html.replace("value=USD", "selected value=USD");
    // console.log(html)
 
      
      select[0].innerHTML =html1;
      select[1].innerHTML= html2

    

    function convert(){

      result.textContent = 
      (input.value * rates[select[1].value]/ rates[select[0].value]).toFixed(2);
      // input.value == "" ? result.textContent = '': console.log('siema')
      // input[0].value === "0.00"? input[0].value='': console.log('lol')

    };
    function dontshowCurrency(){
      (select[0].value == "" || select[1].value == "") ? licznik.textContent='' : console.log('siema') 
     
    }

    input.addEventListener('keyup', ()=> convert());
    // input[1].addEventListener('keyup', ()=> convert());


    select[0].addEventListener('change', ()=>{

      convert();


      licznik.textContent = `1  ${select[0].value} = ${(rates[select[1].value]/ rates[select[0].value]).toFixed(2)} ${select[1].value}`;
      dontshowCurrency()
    });



    select[1].addEventListener('change', ()=>{
      convert(1,0);
      licznik.textContent = `1  ${select[0].value} = ${(rates[select[1].value]/ rates[select[0].value]).toFixed(2)} ${select[1].value}`;
      dontshowCurrency()
    });
    
    buttonChange.addEventListener('click', ()=>{
      // swap values
    [select[0].value, select[1].value] = [select[1].value, select[0].value];
    input.value= '';
    result.textContent= '';
    
    licznik.textContent = `1  ${select[0].value} = ${(rates[select[1].value]/ rates[select[0].value]).toFixed(2)} ${select[1].value}`

      
    });

  };

  currency();
  



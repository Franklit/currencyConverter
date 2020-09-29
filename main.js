
  const select = document.querySelectorAll('select');
  const input = document.querySelectorAll('input');
  const API_url = "https://api.exchangeratesapi.io/latest";

  let html = '';

    
   const licznik = document.querySelector('div p')

  async function currency(){
    const res = await fetch(API_url);
    const data = await res.json();
    // console.log(data.rates)
    const arrKeys = Object.keys(data.rates);
    const rates = data.rates;
    console.log(rates);
    

    arrKeys.map(item =>{
      return html += `<option value=${item}>${item}</option>`;
    });
    // console.log(html)
    for(let i=0; i<select.length; i++){
      select[i].innerHTML = '<option hidden disabled selected value> -- select an option -- </option>'+html;

    };

    function convert(a,b){

      input[a].value = (input[b].value * rates[select[a].value]/ rates[select[b].value]).toFixed(2);
      input[0].value === "0.00"? input[0].value='': console.log('lol')

    };
    function dontshowCurrency(){
      (select[0].value == "" || select[1].value == "") ? licznik.textContent='' : console.log('siema') 
     
    }

    input[0].addEventListener('keyup', ()=> convert(1,0));
    input[1].addEventListener('keyup', ()=> convert(0,1));


    select[0].addEventListener('change', ()=>{

      convert(1,0);


      licznik.textContent = `1  ${select[0].value} = ${(rates[select[0].value]/ rates[select[1].value]).toFixed(2)} ${select[1].value}`;
      dontshowCurrency()
    });



    select[1].addEventListener('change', ()=>{
      convert(1,0);
      licznik.textContent = `1  ${select[0].value} = ${(rates[select[0].value]/ rates[select[1].value]).toFixed(2)} ${select[1].value}`;
      dontshowCurrency()
    });


  };

  currency();
  



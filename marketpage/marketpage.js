function searchInfo(){
    let userInput = document.getElementById('userInputBox').value;
    let apiKey = '2cc11b6f558b90e7e81d410711573cc9';
    let apiCall =`https://financialmodelingprep.com/api/v3/quote/${userInput}?apikey=${apiKey}`;

        fetch(apiCall)
            .then(
            function(response){
              return response.json();
            })
            .then(
            function(data){

                console.log(data);

                if(Object.keys(data).length === 0){
                  document.getElementById("userInputBox").placeholder = 'Error! Please Enter a Valid Stock Symbol';
                  setTimeout(function(){
                  document.getElementById("userInputBox").placeholder = 'Enter Stock Symbol';
                  }, 2500)
                }

                const {name , price , change , priceAvg200, dayHigh , dayLow , earningsAnnouncement , eps , marketCap , volume, avgVolume , sharesOutstanding} = data[0]

                document.getElementById("companyName").innerHTML = name;

                document.getElementById("stockPrice").innerHTML = '$' + price;

                document.getElementById("stockPriceChange").innerHTML = '$ ' + change;

                document.getElementById("stockPriceAvg200").innerHTML = 'Average Price for past 200 exchanged: $' + priceAvg200;

                document.getElementById("stockDayHigh").innerHTML = 'Todays high: $' + dayHigh;

                document.getElementById("stockDayLow").innerHTML = 'Todays low: $' + dayLow;

                document.getElementById("volume").innerHTML = 'Volume: ' + volume;

                document.getElementById("avgVolume").innerHTML = 'Daily Average Volume: ' + avgVolume;

                document.getElementById("earningsAnnouncement").innerHTML = 'Most Recent Earnings Announcement: ' + earningsAnnouncement;

                document.getElementById("earningsPerShare").innerHTML = 'Earnings Per Share: ' + eps;

                document.getElementById("outstandingShares").innerHTML = 'Outstanding Shares: ' + sharesOutstanding;

                document.getElementById("marketCap").innerHTML = 'Market Cap: $' + marketCap;

            if(change < 0){
              document.getElementById("stockPriceChange").style.color = 'red';
            }  
            if(change === 0){
              document.getElementById("stockPriceChange").style.color = 'white';
            } else {
              document.getElementById("stockPriceChange").style.color = 'green';
              document.getElementById("stockPriceChange").innerHTML = '$ +' + change;
            } 

            })
}

function clearUserInput(){
  document.getElementById('userInputBox').value ='';
}

function clearRating(){
  document.getElementById('ratingScore').innerHTML ='';
  document.getElementById('ratingRecommendation').innerHTML ='';
}

function fadeIn(){
  document.getElementById("stockInformation").style += '-webkit-animation: fadeEffect 2s;' + 'animation: fadeEffect 2s;';
  setTimeout(function(){
    document.getElementById("stockInformation").style -= '-webkit-animation: fadeEffect 2s;' + 'animation: fadeEffect 2s;';
  } , 1500)

  document.getElementById("stockRating").style += '-webkit-animation: fadeEffect 2s;' + 'animation: fadeEffect 2s;';
  setTimeout(function(){
    document.getElementById("stockRating").style -= '-webkit-animation: fadeEffect 2s;' + 'animation: fadeEffect 2s;';
  } , 1500)
}

function searchRating(){
  let userInput = document.getElementById('userInputBox').value;
  let apiKey = '2cc11b6f558b90e7e81d410711573cc9';
  const apiCall = `https://financialmodelingprep.com/api/v3/rating/${userInput}?apikey=${apiKey}`;

  fetch(apiCall)
  .then(
    function (response) {
      return response.json();
    }
  )
  .then(
    function(data){
        console.log(data);
        const {ratingScore , ratingRecommendation} = data[0]

        document.getElementById("ratingScore").innerHTML = 'Overall Stock Rating: ' + ratingScore + '/5';

        document.getElementById("ratingRecommendation").innerHTML = ratingRecommendation;

        if(ratingRecommendation === 'Strong Buy'){
          document.getElementById("ratingRecommendation").style.color = '#03fc30'
        }

        if(ratingRecommendation === 'Buy'){
          document.getElementById("ratingRecommendation").style.color = '#93f542'
        }

        if(ratingRecommendation === 'Neutral'){
          document.getElementById("ratingRecommendation").style.color = '#f2f542'
        }
    })
}

function fetchStockRating(stockSymbol){
  let apiKey = '2cc11b6f558b90e7e81d410711573cc9';
  const apiCall = `https://financialmodelingprep.com/api/v3/rating/${stockSymbol}?apikey=${apiKey}`;

  fetch(apiCall)
  .then(
    function (response) {
      return response.json();
    }
  )
  .then(
    function(data){
        console.log(data);
        const {ratingScore , ratingRecommendation} = data[0]

        document.getElementById("ratingScore").innerHTML = 'Overall Stock Rating: ' + ratingScore + '/5';

        document.getElementById("ratingRecommendation").innerHTML = ratingRecommendation;

        if(ratingRecommendation === 'Strong Buy'){
          document.getElementById("ratingRecommendation").style.color = '#03fc30'
        }

        if(ratingRecommendation === 'Buy'){
          document.getElementById("ratingRecommendation").style.color = '#93f542'
        }

        if(ratingRecommendation === 'Neutral'){
          document.getElementById("ratingRecommendation").style.color = '#f2f542'
        }
    })
}

function fetchInfo(symbol) {
    let apiKey = '2cc11b6f558b90e7e81d410711573cc9';
    let apiCall = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`;

    fetch(apiCall)
      .then(
        function (response) {
          return response.json();
        }
      )
      .then(
        function(data){
            console.log(data);
            const {name , price , change , priceAvg200, dayHigh , dayLow , earningsAnnouncement , eps , marketCap , volume, avgVolume , sharesOutstanding} = data[0]

            document.getElementById("companyName").innerHTML = name;

            document.getElementById("stockPrice").innerHTML = '$' + price;

            document.getElementById("stockPriceChange").innerHTML = '$ ' + change;

            document.getElementById("stockPriceAvg200").innerHTML = 'Average Price for past 200 exchanged: $' + priceAvg200;

            document.getElementById("stockDayHigh").innerHTML = 'Todays high: $' + dayHigh;

            document.getElementById("stockDayLow").innerHTML = 'Todays low: $' + dayLow;

            document.getElementById("volume").innerHTML = 'Volume: ' + volume;

            document.getElementById("avgVolume").innerHTML = 'Daily Average Volume: ' + avgVolume;

            document.getElementById("earningsAnnouncement").innerHTML = 'Most Recent Earnings Announcement: ' + earningsAnnouncement;

            document.getElementById("earningsPerShare").innerHTML = 'Earnings Per Share: ' + eps;

            document.getElementById("outstandingShares").innerHTML = 'Outstanding Shares: ' + sharesOutstanding;

            document.getElementById("marketCap").innerHTML = 'Market Cap: $' + marketCap;

            if(change < 0){
              document.getElementById("stockPriceChange").style.color = 'red';
            } else {
              document.getElementById("stockPriceChange").style.color = 'green';
              document.getElementById("stockPriceChange").innerHTML = '$ +' + change;
            } 
        })
  }

  function displayStockInfo(){
    let apiKey = '2cc11b6f558b90e7e81d410711573cc9';
    let apiCall = `https://financialmodelingprep.com/api/v3/quote/MSFT,AAPL,AMZN,GOOGL,FB,JNJ?apikey=${apiKey}`;

    fetch(apiCall)
    .then(
      function (response) {
        return response.json();
      }
    )
    .then(
      function(data){
          console.log(data);
          for(let i = 0; i < data.length; i++){
            if(i === 0){
              document.getElementById('Stock1').innerHTML = data[i].symbol;
              document.getElementById('Stock1Price').innerHTML = '$'+data[i].price;
            }

            if(i === 1){
              document.getElementById('Stock2').innerHTML = data[i].symbol;
              document.getElementById('Stock2Price').innerHTML = '$'+data[i].price;
            }

            if(i === 2){
              document.getElementById('Stock3').innerHTML = data[i].symbol;
              document.getElementById('Stock3Price').innerHTML = '$'+data[i].price;
            }

            if(i === 3){
              document.getElementById('Stock4').innerHTML = data[i].symbol;
              document.getElementById('Stock4Price').innerHTML = '$'+data[i].price;
            }

            if(i === 4){
              document.getElementById('Stock5').innerHTML = data[i].symbol;
              document.getElementById('Stock5Price').innerHTML = '$'+data[i].price;
            }

            if(i === 5){
              document.getElementById('Stock6').innerHTML = data[i].symbol;
              document.getElementById('Stock6Price').innerHTML = '$'+data[i].price;
            }
          }
      })
  }

  function displayCryptoInfo(){
    let apiKey = '2cc11b6f558b90e7e81d410711573cc9';
    let apiCall = `https://financialmodelingprep.com/api/v3/quote/ETHUSD,XRPUSD,LTCUSD,USDTUSD,BCHUSD,TAASUSD?apikey=${apiKey}`;

    fetch(apiCall)
    .then(
      function (response) {
        return response.json();
      }
    )
    .then(
      function(data){
          console.log(data);
          for(let i = 0; i < data.length; i++){
            if(i === 0){
              document.getElementById('Crypto1').innerHTML = data[i].symbol;
              document.getElementById('Crypto1Price').innerHTML = '$'+data[i].price;
            }

            if(i === 1){
              document.getElementById('Crypto2').innerHTML = data[i].symbol;
              document.getElementById('Crypto2Price').innerHTML = '$'+data[i].price;
            }

            if(i === 2){
              document.getElementById('Crypto3').innerHTML = data[i].symbol;
              document.getElementById('Crypto3Price').innerHTML = '$'+data[i].price;
            }

            if(i === 3){
              document.getElementById('Crypto4').innerHTML = data[i].symbol;
              document.getElementById('Crypto4Price').innerHTML = '$'+data[i].price;
            }

            if(i === 4){
              document.getElementById('Crypto5').innerHTML = data[i].symbol;
              document.getElementById('Crypto5Price').innerHTML = '$'+data[i].price;
            }

            if(i === 5){
              document.getElementById('Crypto6').innerHTML = data[i].symbol;
              document.getElementById('Crypto6Price').innerHTML = '$'+data[i].price;
            }
          }
      })
  }

  function displayIndexInfo(){
    let apiKey = '2cc11b6f558b90e7e81d410711573cc9';
    let apiCall = `https://financialmodelingprep.com/api/v3/quote/VFIAX,SPY,VTI,VTSAX,IVV,QQQ?apikey=${apiKey}`;

    fetch(apiCall)
    .then(
      function (response) {
        return response.json();
      }
    )
    .then(
      function(data){
          console.log(data);
          for(let i = 0; i < data.length; i++){
            if(i === 0){
              document.getElementById('Index1').innerHTML = data[i].symbol;
              document.getElementById('Index1Price').innerHTML = '$'+data[i].price;
            }

            if(i === 1){
              document.getElementById('Index2').innerHTML = data[i].symbol;
              document.getElementById('Index2Price').innerHTML = '$'+data[i].price;
            }

            if(i === 2){
              document.getElementById('Index3').innerHTML = data[i].symbol;
              document.getElementById('Index3Price').innerHTML = '$'+data[i].price;
            }

            if(i === 3){
              document.getElementById('Index4').innerHTML = data[i].symbol;
              document.getElementById('Index4Price').innerHTML = '$'+data[i].price;
            }

            if(i === 4){
              document.getElementById('Index5').innerHTML = data[i].symbol;
              document.getElementById('Index5Price').innerHTML = '$'+data[i].price;
            }

            if(i === 5){
              document.getElementById('Index6').innerHTML = data[i].symbol;
              document.getElementById('Index6Price').innerHTML = '$'+data[i].price;
            }
          }
      })
  }
  
// function fileIO() { //work in progress
//   const input = document.querySelector('input[type = "file"]')

//   input.addEventListener('change', function (e) {
//     console.log(input.files);
//     const reader = new FileReader()
//     reader.onload = function() {
//       console.log(reader.result)
//     }
//     reader.readAsText(input.files[0])
//   }, false)
// }

  function ChangeColor(tableRow, highLight) {
    if (highLight) {
      tableRow.style.backgroundColor = '#dcfac9';
      tableRow.style.transition = '0.5s';
    }
    else {
      tableRow.style.backgroundColor = '#0E2131';
      tableRow.style.transition = '0.5s';
    }
  }

  function ChangeColor2(tableRow, highLight) {
    if (highLight) {
      tableRow.style.backgroundColor = '#dcfac9';
      tableRow.style.transition = '0.5s';
    }
    else {
      tableRow.style.backgroundColor = '#064551';
      tableRow.style.transition = '0.5s';
    }
  }
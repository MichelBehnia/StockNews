function searchStockInfo(){
    let userInput = document.getElementById('userInputBox').value;
    let apiKey = '2cc11b6f558b90e7e81d410711573cc9';
    let apiCall =`https://financialmodelingprep.com/api/v3/quote/${userInput}?apikey=${apiKey}`;

    if(userInput !== '' && userInput.length <= 5){

        fetch(apiCall)
            .then(
            function(response){
                if(response){
                    return response.json();
                }
                throw Error('Error!');
            })
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

                document.getElementById("marketCap").innerHTML = 'Market Cap: ' + marketCap;

            if(change < 0){
              document.getElementById("stockPriceChange").style.color = 'red';
            } else {
              document.getElementById("stockPriceChange").style.color = 'green';
              document.getElementById("stockPriceChange").innerHTML = '$ +' + change;
            } 

            })
            .catch(
            function(error){
                console.log(error);
            })

    } else {
        document.getElementById("stockInformation").innerHTML = 'enter valid input';
    }
}

function fadeIn(){
  document.getElementById("stockInformation").style += '-webkit-animation: fadeEffect 2s;' + 'animation: fadeEffect 2s;';
  setTimeout(function(){
    document.getElementById("stockInformation").style -= '-webkit-animation: fadeEffect 2s;' + 'animation: fadeEffect 2s;';
  } , 2000)
}


function fetchStockInfo(stockSymbol) {
    let apiKey = '2cc11b6f558b90e7e81d410711573cc9';
    let apiCall = `https://financialmodelingprep.com/api/v3/quote/${stockSymbol}?apikey=${apiKey}`;

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

            document.getElementById("marketCap").innerHTML = 'Market Cap: ' + marketCap;

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
              document.getElementById('Stock1Price').innerHTML = data[i].price;
            }

            if(i === 1){
              document.getElementById('Stock2').innerHTML = data[i].symbol;
              document.getElementById('Stock2Price').innerHTML = data[i].price;
            }

            if(i === 2){
              document.getElementById('Stock3').innerHTML = data[i].symbol;
              document.getElementById('Stock3Price').innerHTML = data[i].price;
            }

            if(i === 3){
              document.getElementById('Stock4').innerHTML = data[i].symbol;
              document.getElementById('Stock4Price').innerHTML = data[i].price;
            }

            if(i === 4){
              document.getElementById('Stock5').innerHTML = data[i].symbol;
              document.getElementById('Stock5Price').innerHTML = data[i].price;
            }

            if(i === 5){
              document.getElementById('Stock6').innerHTML = data[i].symbol;
              document.getElementById('Stock6Price').innerHTML = data[i].price;
            }
          }
      })
  }

  function fetchMutualFunds() {
    let apiKey = '2cc11b6f558b90e7e81d410711573cc9';
    let apiCall = `https://financialmodelingprep.com/api/v3/quote/VFIAX?apikey=${apiKey}`;

    fetch(apiCall)
      .then(
        function (response) {
          return response.json();
        }
      )
      .then(
        function(data){
            console.log(data);
            const {name , price , change , priceAvg50, priceAvg200 , changesPercentage} = data[0]

            document.getElementById("companyName2").innerHTML = name;

            document.getElementById("stockPrice2").innerHTML = '$' + price;

            document.getElementById("stockPriceChange2").innerHTML = '$' + change;

            document.getElementById("stockPriceAvg502").innerHTML = 'Average Price for past 50 exchanged: $' + priceAvg50;

            document.getElementById("stockPriceAvg2002").innerHTML =  'Average Price for past 200 exchanged: $' + priceAvg200;

            document.getElementById("changePercentage2").innerHTML = 'Change percentage: ' + changesPercentage;
        })
  }
  
  function ChangeColor(tableRow, highLight) {
    if (highLight) {
      tableRow.style.backgroundColor = '#dcfac9';
    }
    else {
      tableRow.style.backgroundColor = '#0E2131';
    }
  }

  function ChangeColor2(tableRow, highLight) {
    if (highLight) {
      tableRow.style.backgroundColor = '#dcfac9';
    }
    else {
      tableRow.style.backgroundColor = '#064551';
    }
  }





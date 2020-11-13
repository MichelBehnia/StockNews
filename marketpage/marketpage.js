function searchInfo(){

    let userInput = document.getElementById('userInputBox').value; // saves the value that the user has entered into the text field to a variable called "userInput"
    let apiKey = '2cc11b6f558b90e7e81d410711573cc9'; // Our unique API key that allows us to use all of the APIs that Financial Modeling Prep provides
    let apiCall =`https://financialmodelingprep.com/api/v3/quote/${userInput}?apikey=${apiKey}`; // The URL to the stock quote API that gets all info on the stock symbol that the user inputted

        fetch(apiCall) // Requests data from the API to be returned in JSON format
            .then(
            function(response){
              return response.json();
            })
            .then(
            function(data){ // Then with the data that we got from the response execute the following code...

                console.log(data); // Log all of the data we got from the API call into the console

                if(Object.keys(data).length === 0){ // Failsafe that checks to see if the user inputted an invalid stock symbol, because if the user entered an invalid symbol we would get an empty array of objects which would cause this code to be executed
                  document.getElementById("userInputBox").placeholder = 'Error! Please Enter a Valid Stock Symbol'; // Changes the placeholder to display error message
                  setTimeout(function(){ // After 2.5 seconds the placeholder changes back to the original placeholder text
                  document.getElementById("userInputBox").placeholder = 'Enter Stock Symbol';
                  }, 2500)
                }

                const {name , price , change , priceAvg200, priceAvg50 , dayHigh , dayLow , earningsAnnouncement , eps , marketCap , volume, avgVolume , sharesOutstanding} = data[0] // saves all of the values of the key value pairs in the first object in the array into variables

                document.getElementById("companyName").innerHTML = name; // Fills in the table with the corresonding value from the data we recived from the API

                document.getElementById("stockPrice").innerHTML = 'Price: $' + price; // Refer to the previous comment

                document.getElementById("stockPriceChange").innerHTML = '$ ' + change; // Refer to the previous comment

                document.getElementById("stockPriceAvg50").innerHTML = 'Average Price for past 50 exchanged: $' + priceAvg50; // Refer to the previous comment

                document.getElementById("stockPriceAvg200").innerHTML = 'Average Price for past 200 exchanged: $' + priceAvg200; // Refer to the previous comment

                document.getElementById("stockDayHigh").innerHTML = 'Todays high: $' + dayHigh; // Refer to the previous comment

                document.getElementById("stockDayLow").innerHTML = 'Todays low: $' + dayLow; // Refer to the previous comment

                document.getElementById("volume").innerHTML = 'Volume: ' + volume; // Refer to the previous comment 

                document.getElementById("avgVolume").innerHTML = 'Daily Average Volume: ' + avgVolume; // Refer to the previous comment

                document.getElementById("earningsAnnouncement").innerHTML = 'Most Recent Earnings Announcement: ' + earningsAnnouncement; // Refer to the previous comment

                document.getElementById("earningsPerShare").innerHTML = 'Earnings Per Share: ' + eps; // Refer to the previous comment 

                document.getElementById("outstandingShares").innerHTML = 'Outstanding Shares: ' + sharesOutstanding; // Refer to the previous comment

                document.getElementById("marketCap").innerHTML = 'Market Cap: $' + marketCap; // Refer to the previous comment

            if(change < 0){ // If the price change of the stock is less than 0 then change the color of it to red
              document.getElementById("stockPriceChange").style.color = 'red';
            }  
            if(change === 0){ // If the price change of the stock is equal to 0 then change the color of it to white
              document.getElementById("stockPriceChange").style.color = 'white';
            } 
            if(change > 0){ // If the price change of the stock is greater than 0 then change the color of it to green and show a plus sign next to it
              document.getElementById("stockPriceChange").style.color = 'green';
              document.getElementById("stockPriceChange").innerHTML = '$ +' + change;
            } 

            })
}

function clearUserInput(){ // Clears the users input
  document.getElementById('userInputBox').value ='';
}

function clearRating(){ // Clears the stock rating table
  document.getElementById('ratingScore').innerHTML ='';
  document.getElementById('ratingRecommendation').innerHTML ='';
}

function hideInfoTables(){ // Hides the stock information table
  document.getElementById("stockInformation").style.display = "none";
  document.getElementById("stockRating").style.display = "none";
}

function fadeIn(){ // Adds the fade animation to the stockInformation table and the stockRating table
  document.getElementById("stockInformation").style += '-webkit-animation: fadeEffect 2s;' + 'animation: fadeEffect 2s;';
  setTimeout(function(){
    document.getElementById("stockInformation").style -= '-webkit-animation: fadeEffect 2s;' + 'animation: fadeEffect 2s;';
  } , 1500)

  document.getElementById("stockRating").style += '-webkit-animation: fadeEffect 2s;' + 'animation: fadeEffect 2s;';
  setTimeout(function(){
    document.getElementById("stockRating").style -= '-webkit-animation: fadeEffect 2s;' + 'animation: fadeEffect 2s;';
  } , 1500)
}

function searchRating(){ // This function is the same idea as the previous function except its in getting data from the stock rating API by way of user input
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
          document.getElementById("ratingRecommendation").style.color = '#2ff207'
        }

        if(ratingRecommendation === 'Buy'){
          document.getElementById("ratingRecommendation").style.color = '#96e087'
        }

        if(ratingRecommendation === 'Neutral'){
          document.getElementById("ratingRecommendation").style.color = '#f2f542'
        }
    })
}

function fetchStockRating(stockSymbol){ // This function is the same idea as the previous function except its in getting data from the stock rating API by getting a stock symbol passed as an argument
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

function fetchInfo(symbol) { // This function is the same as the previous function but it gets stock info based on the value being passed into it as an argument
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
            const {name , price , change , priceAvg200, priceAvg50 , dayHigh , dayLow , earningsAnnouncement , eps , marketCap , volume, avgVolume , sharesOutstanding} = data[0]

            document.getElementById("companyName").innerHTML = name;

            document.getElementById("stockPrice").innerHTML = 'Price: $' + price;

            document.getElementById("stockPriceChange").innerHTML = '$ ' + change;

            document.getElementById("stockPriceAvg50").innerHTML = 'Average Price for past 50 exchanged: $' + priceAvg50;

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

          for(let i = 0; i < data.length; i++){ // For loop that goes through the all of the objects in the array of data with if statements to fill in the table with the corresponding data
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
          for(let i = 0; i < data.length; i++){ // For loop that goes through the all of the objects in the array of data with if statements to fill in the table with the corresponding data
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
          for(let i = 0; i < data.length; i++){ // For loop that goes through the all of the objects in the array of data with if statements to fill in the table with the corresponding data
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

  function ChangeColor(tableRow, highLight) { // If cursor is hovering over this element change color
    if (highLight) {
      tableRow.style.backgroundColor = '#dcfac9';
      tableRow.style.transition = '0.5s';
    }
    else {
      tableRow.style.backgroundColor = '#0E2131';
      tableRow.style.transition = '0.5s';
    }
  }

  function ChangeColor2(tableRow, highLight) { // If cursor is hovering over this element change color 
    if (highLight) {
      tableRow.style.backgroundColor = '#dcfac9';
      tableRow.style.transition = '0.5s';
    }
    else {
      tableRow.style.backgroundColor = '#064551';
      tableRow.style.transition = '0.5s';
    }
  }
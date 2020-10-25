function fetchStockInfo(){
    let apiKey = "S7654FSF3ELETV8H";
    let apiCall = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=${apiKey}`;

    fetch(apiCall)
        .then(
            function(response){
                return response.json();
            }
        )
        .then(
            function(data){
                console.log(data);
                document.getElementById("Info").innerHTML=data;
            }
        )
}

function displayNewsFeed(){
    let apiKey = '2cc11b6f558b90e7e81d410711573cc9'; // Our unique API key that allows us to use all of the APIs that Financial Modeling Prep provides
    let apiCall =`https://financialmodelingprep.com/api/v3/stock_news?limit=50&apikey=${apiKey}`; // The URL to the stock news API

        fetch(apiCall) // Fetch info from this API URL
            .then(
            function(response){ // If we get a response then execute this code...
                return response.json(); // Requests data from the API to be returned in JSON format
            })
            .then(
            function(data){ // Then with the data that we got from the response execute the following code...

                console.log(data); // Log all of the data we got from the API call into the console

                for(let i = 0; i < data.length; i++){ // Loop through the object array that the API provides
                    document.getElementById("newsFeed").innerHTML += "<div id = 'newsArticle'><img style='float:left; width: 150px;'src='" + data[i].image + "'><h2>" 
                                                                      + data[i].title + "</h2>" + data[i].site + " - " + data[i].publishedDate + "<br><br>" + data[i].text + 
                                                                      "<br><a href='" + data[i].url + "'target='_blank'>"  + data[i].url + "</a></div>"; // Put this code into the "newsFeed" div tag so every single article we get from the API are in their own respective divs that contain their own respective information 
                }
            })
}
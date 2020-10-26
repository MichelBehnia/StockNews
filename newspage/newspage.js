function displayNewsFeed(){
    let apiKey = '2cc11b6f558b90e7e81d410711573cc9';
    let apiCall =`https://financialmodelingprep.com/api/v3/stock_news?limit=50&apikey=${apiKey}`;

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
                for(let i = 0; i < data.length; i++){
                    document.getElementById("newsFeed").innerHTML += "<div id = 'newsArticle'><img style='float:left; width: 150px;'src='" + data[i].image + "'><h2>" 
                                                                      + data[i].title + "</h2>" + data[i].site + " - " + data[i].publishedDate + "<br><br>" + data[i].text + 
                                                                      "<br><a href='" + data[i].url + "'target='_blank'>"  + data[i].url + "</a></div>";
                }
            })
            .catch(
            function(error){
                console.log(error);
            })
}
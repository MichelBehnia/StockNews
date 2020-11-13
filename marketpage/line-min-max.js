//This is the javascript file used to make all the graphs on the market summary page

var dateArray = []; //Global variables that declar the different arrays used in the functions
var priceArray = [];
var dateArray2 = [];
var priceArray2 = [];
var dateArray3 = [];
var priceArray3 = [];
var dateArrayfetch = [];
var priceArrayfetch = [];
$(document).ready(function () { // Shows graph when page is loaded for the stocks table
	let apiKey = '2cc11b6f558b90e7e81d410711573cc9'; // Our unique API key that allows us to use all of the APIs that Financial Modeling Prep provides
	let apiCall = `https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?apikey=${apiKey}`; // The URL to the historical price API that gets all info on the stock symbol that the user inputted

	fetch(apiCall) // Fetch info from this API URL
		.then(
			function (response) { // If we get a response then execute this code...
				return response.json(); // Requests data from the API to be returned in JSON format
			}
		)
		.then(
			function (data) { // Then with the data that we got from the response execute the following code...
				console.log(data);  // Log all of the data we got from the API call into the console




				for (i = 0; i < 31; i++) { // Repeat 30 times(1 month)
					mydate = data['historical'][i]['date']; // Set mydate to the current date
					openPrice = data['historical'][i]['open']; // Set openPrice to the current price
					dateArray.push(mydate); // Push mydate to the dateArray
					priceArray.push(openPrice); // Push openPrice to priceArray
				}
				dateArray.reverse(); // Reverse the order of the items in the array to make the oldest dates appear first
				priceArray.reverse(); // Reverse the order of the items in the array to make the oldest prices appear first
				//get canvas
				var ctx = $("#line-chartcanvas"); // Create canvas

				var data = { // Data that is used in the graph
					labels: [],
					datasets: [
						{
							label: "Price($)",
							data: [],
							backgroundColor: "blue",
							borderColor: "lightblue",
							fill: false,
							lineTension: 0,
							pointRadius: 5
						}

					]
				};
				data.labels = dateArray; //Sets data.labels from the array in the console to dateArray
				data.datasets[0].data = priceArray; //Sets data.datsets[0].data from the console to priceArray

				var options = { // Settings of the graph
					title: {
						display: true,
						position: "top",
						text: "AAPL Historical Price",
						fontSize: 18,
						fontColor: "#111"
					},
					legend: {
						display: true,
						position: "bottom"
					},

				};

				var chart = new Chart(ctx, { // Sets the graph to a line-graph
					type: "line",
					data: data,
					options: options
				});

			});
})

$(document).ready(function () { // Same function as the first on load function except draws graph for the crypto-crruency table
	let apiKey = '2cc11b6f558b90e7e81d410711573cc9';
	let apiCall = `https://financialmodelingprep.com/api/v3/historical-price-full/BCHUSD?apikey=${apiKey}`;
	fetch(apiCall)
		.then(
			function (response) {
				return response.json();
			}
		)
		.then(
			function (data) {
				console.log(data);



				for (i = 0; i < 31; i++) {
					mydate2 = data['historical'][i]['date'];
					openPrice2 = data['historical'][i]['open'];
					dateArray2.push(mydate2);
					priceArray2.push(openPrice2);
				}
				dateArray2.reverse();
				priceArray2.reverse();
				//get canvas
				var ctx = $("#line-chartcanvas2");

				var data = {
					labels: [],
					datasets: [
						{
							label: "Price($)",
							data: [],
							backgroundColor: "blue",
							borderColor: "lightblue",
							fill: false,
							lineTension: 0,
							pointRadius: 5
						}

					]
				};
				data.labels = dateArray2;
				data.datasets[0].data = priceArray2;

				var options = {
					title: {
						display: true,
						position: "top",
						text: "BCHUSD Historical Price",
						fontSize: 18,
						fontColor: "#111"
					},
					legend: {
						display: true,
						position: "bottom"
					},

				};

				var chart = new Chart(ctx, {
					type: "line",
					data: data,
					options: options
				});

			});
})

$(document).ready(function () { // Same function as the other on load functions except draws graph for the indexes table
	let apiKey = '2cc11b6f558b90e7e81d410711573cc9';
	let apiCall = `https://financialmodelingprep.com/api/v3/historical-price-full/IVV?apikey=${apiKey}`;
	fetch(apiCall)
		.then(
			function (response) {
				return response.json();
			}
		)
		.then(
			function (data) {
				console.log(data);




				for (i = 0; i < 31; i++) {
					mydate3 = data['historical'][i]['date'];
					openPrice3 = data['historical'][i]['open'];
					dateArray3.push(mydate3);
					priceArray3.push(openPrice3);
				}
				dateArray3.reverse();
				priceArray3.reverse();
				//get canvas
				var ctx = $("#line-chartcanvas3");

				var data = {
					labels: [],
					datasets: [
						{
							label: "Price($)",
							data: [],
							backgroundColor: "blue",
							borderColor: "lightblue",
							fill: false,
							lineTension: 0,
							pointRadius: 5
						}

					]
				};
				data.labels = dateArray3;
				data.datasets[0].data = priceArray3;

				var options = {
					title: {
						display: true,
						position: "top",
						text: "IVV Historical Price",
						fontSize: 18,
						fontColor: "#111"
					},
					legend: {
						display: true,
						position: "bottom"
					},

				};

				var chart = new Chart(ctx, {
					type: "line",
					data: data,
					options: options
				});

			});
})
function fetchGraph(symbol) { // Fetches a graph based on the symbol selected by the user

	let apiKey = '2cc11b6f558b90e7e81d410711573cc9';
	let apiCall = `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?apikey=${apiKey}`; // Gets the historical price of a specific stock
	fetch(apiCall)
		.then(
			function (response) {
				return response.json();
			}
		)
		.then(
			function (data) {
				console.log(data);
				dateArrayfetch.length = 0; // Sets the array length to 0 to delete previous array's data
				priceArrayfetch.length = 0; //Sets the array length to 0 to delete previous aray's data


				for (i = 0; i < 31; i++) {
					mydatefetch = data['historical'][i]['date'];
					openPricefetch = data['historical'][i]['open'];
					dateArrayfetch.push(mydatefetch);
					priceArrayfetch.push(openPricefetch);
				}
				dateArrayfetch.reverse();
				priceArrayfetch.reverse();
				//get canvas
				var ctx = $("#line-chartcanvasfetch");

				var data = {
					labels: [],
					datasets: [
						{
							label: "Price($)",
							data: [],
							backgroundColor: "blue",
							borderColor: "lightblue",
							fill: false,
							lineTension: 0,
							pointRadius: 5
						}

					]
				};
				data.labels = dateArrayfetch;
				data.datasets[0].data = priceArrayfetch;

				var options = {
					title: {
						display: true,
						position: "top",
						text: symbol + " Historical Price",
						fontSize: 18,
						fontColor: "#111"
					},
					legend: {
						display: true,
						position: "bottom"
					},

				};

				var chart = new Chart(ctx, {
					type: "line",
					data: data,
					options: options
				});

			});

}

function searchGraph() { // Fetches a graph based on the stock symbol the user inputs
	let userInput = document.getElementById('userInputBox').value;
	let apiKey = '2cc11b6f558b90e7e81d410711573cc9';
	let apiCall = `https://financialmodelingprep.com/api/v3/historical-price-full/${userInput}?apikey=${apiKey}`; // Gets the historical price of a specific stock from the user input box
	fetch(apiCall)
		.then(
			function (response) {
				return response.json();
			}
		)
		.then(
			function (data) {
				console.log(data);
				dateArrayfetch.length = 0;
				priceArrayfetch.length = 0;


				for (i = 0; i < 31; i++) {
					mydatefetch = data['historical'][i]['date'];
					openPricefetch = data['historical'][i]['open'];
					dateArrayfetch.push(mydatefetch);
					priceArrayfetch.push(openPricefetch);
				}
				dateArrayfetch.reverse();
				priceArrayfetch.reverse();
				//get canvas
				var ctx = $("#line-chartcanvasfetch");

				var data = {
					labels: [],
					datasets: [
						{
							label: "Price($)",
							data: [],
							backgroundColor: "blue",
							borderColor: "lightblue",
							fill: false,
							lineTension: 0,
							pointRadius: 5
						}

					]
				};
				data.labels = dateArrayfetch;
				data.datasets[0].data = priceArrayfetch;

				var options = {
					title: {
						display: true,
						position: "top",
						text: userInput + " Historical Price",
						fontSize: 18,
						fontColor: "#111"
					},
					legend: {
						display: true,
						position: "bottom"
					},

				};

				var chart = new Chart(ctx, {
					type: "line",
					data: data,
					options: options
				});

			});

}

function hoverMiddle(symbol) { // Fetches a graph for the stock table based on whatever the user is hovering over
	let apiKey = '2cc11b6f558b90e7e81d410711573cc9';
	let apiCall = `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?apikey=${apiKey}`; // Gets historical data of the stock the user is currently hovering over

	fetch(apiCall)
		.then(
			function (response) {
				return response.json();
			}
		)
		.then(
			function (data) {
				console.log(data);
				dateArray.length = 0;
				priceArray.length = 0;



				for (i = 0; i < 31; i++) {
					mydate = data['historical'][i]['date'];
					openPrice = data['historical'][i]['open'];
					dateArray.push(mydate);
					priceArray.push(openPrice);
				}
				dateArray.reverse();
				priceArray.reverse();
				//get canvas
				var ctx = $("#line-chartcanvas");

				var data = {
					labels: [],
					datasets: [
						{
							label: "Price($)",
							data: [],
							backgroundColor: "blue",
							borderColor: "lightblue",
							fill: false,
							lineTension: 0,
							pointRadius: 5
						}

					]
				};
				data.labels = dateArray;
				data.datasets[0].data = priceArray;

				var options = {
					title: {
						display: true,
						position: "top",
						text: symbol + " Historical Price",
						fontSize: 18,
						fontColor: "#111"
					},
					legend: {
						display: true,
						position: "bottom"
					},

				};

				var chart = new Chart(ctx, {
					type: "line",
					data: data,
					options: options
				});

			});
}

function hoverLeft(symbol) { // Fetches a graph for the crypto-currency table based on whatever the user is hovering over
	let apiKey = '2cc11b6f558b90e7e81d410711573cc9';
	let apiCall = `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?apikey=${apiKey}`; // Gets historical data of the crypto-currency the user is currently hovering over
	fetch(apiCall)
		.then(
			function (response) {
				return response.json();
			}
		)
		.then(
			function (data) {
				console.log(data);
				dateArray2.length = 0;
				priceArray2.length = 0;



				for (i = 0; i < 31; i++) {
					mydate2 = data['historical'][i]['date'];
					openPrice2 = data['historical'][i]['open'];
					dateArray2.push(mydate2);
					priceArray2.push(openPrice2);
				}
				dateArray2.reverse();
				priceArray2.reverse();
				//get canvas
				var ctx = $("#line-chartcanvas2");

				var data = {
					labels: [],
					datasets: [
						{
							label: "Price($)",
							data: [],
							backgroundColor: "blue",
							borderColor: "lightblue",
							fill: false,
							lineTension: 0,
							pointRadius: 5
						}

					]
				};
				data.labels = dateArray2;
				data.datasets[0].data = priceArray2;

				var options = {
					title: {
						display: true,
						position: "top",
						text: symbol + " Historical Price",
						fontSize: 18,
						fontColor: "#111"
					},
					legend: {
						display: true,
						position: "bottom"
					},

				};

				var chart = new Chart(ctx, {
					type: "line",
					data: data,
					options: options
				});

			});
}

function hoverRight(symbol) { // Fetches a graph for the index table based on whatever the user is hovering over
	let apiKey = '2cc11b6f558b90e7e81d410711573cc9';
	let apiCall = `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?apikey=${apiKey}`; // Gets historical data of the index the user is currently hovering over
	fetch(apiCall)
		.then(
			function (response) {
				return response.json();
			}
		)
		.then(
			function (data) {
				console.log(data);
				dateArray3.length = 0;
				priceArray3.length = 0;




				for (i = 0; i < 31; i++) {
					mydate3 = data['historical'][i]['date'];
					openPrice3 = data['historical'][i]['open'];
					dateArray3.push(mydate3);
					priceArray3.push(openPrice3);
				}
				dateArray3.reverse();
				priceArray3.reverse();
				//get canvas
				var ctx = $("#line-chartcanvas3");

				var data = {
					labels: [],
					datasets: [
						{
							label: "Price($)",
							data: [],
							backgroundColor: "blue",
							borderColor: "lightblue",
							fill: false,
							lineTension: 0,
							pointRadius: 5
						}

					]
				};
				data.labels = dateArray3;
				data.datasets[0].data = priceArray3;

				var options = {
					title: {
						display: true,
						position: "top",
						text: symbol + " Historical Price",
						fontSize: 18,
						fontColor: "#111"
					},
					legend: {
						display: true,
						position: "bottom"
					},

				};

				var chart = new Chart(ctx, {
					type: "line",
					data: data,
					options: options
				});

			});
}
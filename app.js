document.getElementById("searchBtn").addEventListener("click", () => {
    let searchVal = document.getElementById("searchTxt").value;
    let requestOptions = {
        method: 'GET'
    };

    fetch(`http://api.weatherapi.com/v1/current.json?key=2a5b6d6f02964d368d585400233012&q=${searchVal}`, requestOptions)
        .then(response => response.json())
        .then(data => {
            document.getElementById("temp").innerHTML = data['current']['temp_c'] + "c";
            document.getElementById("textSample").innerHTML = data['current']['condition']['text'];
            document.getElementById("textCountry").innerHTML = data['location']['country'];
            document.getElementById("img").src = data['current']['condition']['icon'];
        })
        .catch(error => console.error("error", error));
});


// alert('test')

var apiUrl = "https://github.com/r-spacex/SpaceX-API/wiki/Upcoming-Launches";

function getSpaceData() {
    axios.get(apiUrl)
    .then(function (response) {
        spaceData.innerHTML = response.data.forms[0].name;
    })
    .catch(function (error) {
        spaceData.innerHTML = "An error has occurred";
    });
}

var button = document.querySelector(".spaceButton");
button.addEventListener("click", getSpaceData);
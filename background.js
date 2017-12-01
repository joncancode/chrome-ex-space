var xhr = new XMLHttpRequest();

xhr.open("GET", "https://github.com/r-spacex/SpaceX-API/wiki/Upcoming-Launches", false);
xhr.send();

var result = xhr.responseText;
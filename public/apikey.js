let apiKey = "AIzaSyDfO3JcQmtsmhw8CkUcf0qGlteRQv0W-Zw"
console.log(apiKey);
const script = document.createElement('script'); script.src ="https://maps.googleapis.com/maps/api/js?key="+`${apiKey}`+"&libraries=places&callback=initAutocomplete";
document.head.append(script);
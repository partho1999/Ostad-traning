function geolocation(){
    navigator.geolocation.getCurrentPosition(function(position){
        
        let latitude =position.coords.latitude;
        let longitude=position.coords.longitude;
        
    

        document.write("latitude:"+latitude+"<br>");
        document.write("longitude:"+longitude+"<br>");

    })
}

geolocation()
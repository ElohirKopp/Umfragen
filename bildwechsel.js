function myFunction() {
    x = x + 1;
    y = document.getElementById("bewertung").value;
    document.getElementById("bewertung").value = 0;
    window.alert("hallo");
    if (x==0){
        var img = document.createElement("img");
       img.src = "https://www.kinderzeitmaschine.de/fileadmin/user_upload/Neuzeit/Reformation/Mona_Lisa_by_Leonardo_da_Vinci.jpg";
       var src = document.getElementById("header");
       src.appendChild(img);
      }
  if (x==1){
       var img = document.createElement("img");
       img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png";
       var src2 = document.getElementById("header2");
       src2.appendChild(img);
    }
       
}
    
   
  
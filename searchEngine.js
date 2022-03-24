
var inputElement = document.getElementById("movie-name")

var searchButton = document.getElementById("search-btn");

var moviesWrapper = document.getElementById("movies-wrapper")


  var resultDiv =  document.getElementById("result-div")

  var loaderDiv = document.getElementById("loader")

searchButton.onclick = function(){

    if(inputElement.value !== "" ){
 
    resultDiv.innerHTML = ""
    
    moviesWrapper.innerHTML = ""

    loaderDiv.innerText = "Loading......."


    
 var http = new XMLHttpRequest();

 http.onreadystatechange = function(){

      if(this.readyState == 4){

        inputElement.value = ""

        loaderDiv.innerText = ""
    
       
      var result =  JSON.parse(this.responseText)

      console.log(result)
      
      if(result.Response == "True"  ){
        var movies = result.Search
        resultDiv.innerText = "Total results : "+ movies.length
         for( var i = 0 ; i < movies.length ; i++ ){
             // POSTER , TITLE , RELEASE YEAR , TYPE
             var movieCard = document.createElement("div");
             movieCard.className = "movie-card"
          
             var movieImage =  document.createElement("img");
             movieImage.src = movies[i].Poster
             movieImage.className = "movie-image"
             var movieTitle = document.createElement("p");
             movieTitle.innerText = "Title : " +movies[i].Title
             var Type = document.createElement("p");
             Type.innerText = "Type : " + movies[i].Type
             var releaseYear = document.createElement("p")
             releaseYear.innerText = "Release Year : " + movies[i].Year
             movieCard.append(movieImage, movieTitle,Type,releaseYear )
             moviesWrapper.appendChild(movieCard)
            

         }
      }else{
        resultDiv.innerHTML = `404 Movies not found !`
          console.log("Movies not found")
      }

      
      }

 }

 http.open("GET" , "https://www.omdbapi.com/?apikey=c951ff1&s="+ inputElement.value , true);

http.send()

}else{
    alert("Type something")
}
}

var arrhex=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];

var b=document.getElementById("bulb");
b.addEventListener("click",function(){
  var clrda="#"
  var clrda2="#"
  // #f1f324
  for(var i=0;i<6;i++){
    clrda+=arrhex[rand()];
  }
  for(var j=0;j<6;j++){
    clrda2+=arrhex[rand()];
  }
      var srch=document.getElementById("s");
      srch.style.color=clrda;
      var bul=document.getElementById("bulb");
      bul.style.backgroundColor=clrda;
      document.body.style.backgroundColor=clrda2;
})

function rand(){

  return Math.floor(Math.random()*arrhex.length);
}







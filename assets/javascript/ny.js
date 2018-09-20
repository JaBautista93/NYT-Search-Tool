var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
queryURL += '?' + $.param({
  'api-key': "be2afc3fbee24813a76cdf43d3138d50"});
// ajax method ( makes a call to the API)
$.ajax({
  url: queryURL,
  method: "GET"
})

// promise resolve
  .then(function(response) {
      console.log(response);

    
     var search = response.docs;
     var ratingDisplay = $("<div>").append( search);
     $("#searchTerm").append(ratingDisplay);

  })
$(document).ready(function() {
 $("#homepage-submit").on("click", function(event) {
    var input = $("#search").val();
    // console.log(input);
    makeCall(input);
  });

  function makeCall(input) {
    $.ajax( {
      method:"GET",
      url: `https://itunes.apple.com/search?term=${input}&limit=5`,
       dataType: "JSONP",
        success: function(data) {
          console.log(data), 

          getData(data);
        }
      })
    };

    function getData(responseData){
  var song= responseData.results.forEach(function(albumData) {
  $(".homepage-container").append($("<div>").text(albumData.collectionName).addClass('friendly').css('background-image', 'url("' +albumData.artworkUrl100+ '")'))
                })
      // appendToDom(song);

}
function appendToDom(song) {
      $(".homepage-container").append($("<div>").text(`result : ${song}`));
}



$('#createTrack').submit(function(e){
    // preventing form from submitting
    e.preventDefault();
    // grabbing form data
    const data = $(this).serialize();    
    $.ajax({
      // console.log('im in the ajax');
      url: "/users/songs",
      data: data,
      type: 'POST',
      success: function(data) {
        // console.log('response  ', data , "+++++++++++++++++++++++++++++++++++++++++++++++");
        // redirecting to the users's show page on success
        window.location.href = `/users/track/${data.id}`;
      }, 
      error: function(xhr, status, error) {
       console.log("there is an error in the POST Ajax call", error);
      }

    })

  })




  $('#edit-track').submit(function(e){
    console.log('here');
    const id = $('#singleTrackId').val()
    console.log(id);

    // preventing form from submitting
    e.preventDefault();
    // grabbing form data
    const data = $(this).serialize();
    console.log(data);    
    $.ajax({
      url: `/users/track/${id}`,
      data: data,
      type: 'PUT',
      success: function(data) {
        console.log(' from put response  ', data , "+++++++++++++++++++++++++++++++++++++++++++++++");
        window.location.href = `/users/track/${data.id}`;
      }, 
      error: function(xhr, status, error) {
       // console.log(err);
      }

    })

  })



  $('#delete').click(function() {
  const id = $('#trackId').val();
    console.log(id)
 // return(alert);

  const confirm = window.confirm('Are you sure you want to delete this?');
 if(confirm) {
     $.ajax({
      url: `/users/track/${id}`,
      method:"DELETE",
      success:function(data) {
        console.log('delete', data);
        window.location.href = `/users/profile`;


      }
    })
  }

  })



});

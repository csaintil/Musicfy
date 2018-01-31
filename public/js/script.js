$(document).ready(function() {
    // console.log('loading up');
    // const $userDataCounterButton = $('#user-data-counter-button');
    // $userDataCounterButton.click((e) => {
    //   e.preventDefault();
    //   $.ajax({
    //     url: "counter",
    //     type: "POST"
    //   })
    //   .done(function(data){
    //     console.log('done with ajax, data: ', data);
    //     const $userDataCounter = $('#user-data-counter');
    //     $userDataCounter.text(data.counter);
    //   });
    // });



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
       // console.log(err);
      }

    })

  })

//   $('#edit-track').submit(function(e){
//     console.log('here');
//     const id = $('#singleTrackId').val()
//     console.log(id);

//     // preventing form from submitting
//     e.preventDefault();
//     // grabbing form data by storing it in an object
//     const artist = $('#artistName').val(),
//     track = $('#trackName').val(), 
//     country = $('#country').val(), 
//     genre = $('#genre').val(),
//     price = $('#price').val()
//     // const data = $(this).serialize();
//     // console.log(data); 

//     const uptodateTrack = {
//       artistName: artist,
//       trackName:track,
//       country: country,
//       primaryGenreName: genre,
//       price: price

//     }
// console.log(uptodateTrack);

//     $.ajax({
//       url: `/users/track/${id}`,
//       data: uptodateTrack,
//       type: 'PUT',
//       success: function(data) {
//         console.log(' from put response  ', uptodateTrack , "+++++++++++++++++++++++++++++++++++++++++++++++");
//         window.location.href = `/users/track/${data.id}`;
//       }, 
//       error: function(xhr, status, error) {
//        console.log("wrong ", error);
//       }

//     })

//   })





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

$(document).ready(function() {
    console.log('loading up');
    const $userDataCounterButton = $('#user-data-counter-button');
    $userDataCounterButton.click((e) => {
      e.preventDefault();
      $.ajax({
        url: "counter",
        type: "POST"
      })
      .done(function(data){
        console.log('done with ajax, data: ', data);
        const $userDataCounter = $('#user-data-counter');
        $userDataCounter.text(data.counter);
      });
    });



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
        console.log('response  ', data + "+++++++++++++++++++++++++++++++++++++++++++++++");
        // redirecting to the users's show page on success
        // window.location.href = `/users/${data.id}`;
      }, 
      error: function(xhr, status, error) {
       // console.log(err);
      }

    })

  })


 //  $('#delete').click(function() {
 //  const id = $('track-id').val();
 //    console.log("heloo " + '+++++++++++++++++++++++++++++++++++')
 // // return(alert);

 //  const confirm = window.confirm('Are you sure you want to delete this?');
 // if(confirm) {
 //     $.ajax({
 //      url: "/users/saveSongs",
 //      method:"DELETE",
 //      success:function(data) {
 //        console.log('delete', data);

 //      }
 //    })
 //  }

 //  })

});

$('.list-group').on('click', '#listItem', function() {

  $('#commentSection').empty();

  const articleID = $(this).attr('data-id');

  $('#submitBtn').attr('data-id', articleID);

  console.log(articleID);

  // $.get(`/articles/${articleID}`)
  //   .then((article) => {
  //     console.log(article);
  //   });
});

$('#submitBtn').on('click', function() {

  $.noConflict();

  const articleID = $(this).attr('data-id');

  console.log($('#commentTitle').val(), $('#commentText').val());

  $.post(`/comment/${articleID}`, {
    title: $('#commentTitle').val(),
    body: $('#commentText').val()
  })
    .then(function(data) {
      console.log(data);
    });

  $('#commentTitle').val('');
  $('#commentText').val('');

});
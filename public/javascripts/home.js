$.noConflict();
$('.list-group').on('click', '#listItem', function() {


  $('#commentSection').empty();

  const articleID = $(this).attr('data-id');

  $('#submitBtn').attr('data-id', articleID);

  console.log(articleID);

  $.get(`/articles/${articleID}`)
    .then(function(article) {
      const comment = article.comment;
      
      if (comment) {
        $('#commentSection').append(`<h5>${comment.title}</h5>`);
        $('#commentSection').append(`<p>${comment.body}</p>`);
      } else {
        $('#commentSection').append('<h5>No Comments Yet!</h5>');
      }

      console.log(article);
    });
});

$('#submitBtn').on('click', function() {

  const articleID = $(this).attr('data-id');

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
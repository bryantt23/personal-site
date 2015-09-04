$(document).on('ajax:success', 'a.vote', function(status, data, xhr) {
  $(".votes-count[data-id=" + data.id + "]").text(data.count);
});

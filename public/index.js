/* global $ location */

$('#next').on('click', function () {
  if ($('.current').next().length > 0) {
    $('.current').removeClass('current').addClass('hide').next().removeClass('hide').addClass('current')
    page++
    $('#location').text(page + ' / 6')
  }
})

$('#prev').on('click', function () {
  if ($('.current').prev().length > 0) {
    $('.current').removeClass('current').addClass('hide').prev().removeClass('hide').addClass('current')
    page--
    $('#location').text(page + ' / 6')
  }
})

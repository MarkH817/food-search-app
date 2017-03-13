/* global $ */

$('#next').on('click', function () {
  if ($('.current').next().length > 0) {
    $('.current').removeClass('current').addClass('hide').next().removeClass('hide').addClass('current')
  }
})

$('#prev').on('click', function () {
  if ($('.current').prev().length > 0) {
    $('.current').removeClass('current').addClass('hide').prev().removeClass('hide').addClass('current')
  }
})

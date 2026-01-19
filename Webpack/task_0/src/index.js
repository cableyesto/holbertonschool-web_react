import $ from 'jquery';

$('body').append($('<p>').text('Holberton Dashboard'));

$('body').append(
  $('<p>')
    .append('Dashboard ')
    .append($('<b>').text('data for'))
    .append(' the students')
);

$('body').append($('<p>').text('Copyright - Holberton School'));
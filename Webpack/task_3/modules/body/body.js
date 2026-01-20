const $ = require('jquery');
const _ = require('lodash');
require('./body.css');

$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append(`<p id='count'></p>`);

let counter = 0;

function updateCounter() {
  counter++;
  $('#count').text(`${counter} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter, 500));
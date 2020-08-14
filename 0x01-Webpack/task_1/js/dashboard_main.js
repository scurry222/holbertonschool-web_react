import $ from 'jquery'
import _ from 'lodash';

$('body').append(
  '<p>Holberton Dashboard</p>',
  '<p>Dashboard data for the students</p>',
  '<button><p>Click here to get started<p></button>',
  '<p id="count"></p>',
  '<p>Copyright - Holberton School</p>'
);

const counter = () => {
  let count = 0;

  return () => {
    return (count += 1);
  };
};

const updateCounter = counter();

const buttonOnClick = () => {
  const count = updateCounter();
  $('#count').text(`${count} clicks on the button`);
};

$('button').on('click', _.debounce(buttonOnClick));

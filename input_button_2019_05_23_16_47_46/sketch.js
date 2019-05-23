let input, button, milevalue;

function setup() {
  // create canvas
  createCanvas(710, 400);
  background(100,200,100)

  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(milestokilometers);

  milevalue = createElement('h2', 'How many miles?');
  milevalue.position(20, 5);

  textAlign(CENTER);
  textSize(50);
}

function milestokilometers() {
  const miles = input.value();

  if (isNaN(8/5 * miles)) {
    print(8/5 * miles)
  milevalue.html(miles + ' miles is 8/5 x ' + miles + ' kilometers');
  input.value('');
  }
  else  {
  print(8/5 * miles)
  milevalue.html(miles + ' miles is '  + 8/5 * miles + ' kilometers');
  input.value('');
  }
}

let input, button, milevalue;

function setup() {
  // create canvas
  createCanvas(710, 400);
  background(100,200,100)

  input = createInput();
  input.position(100,140);

  button = createButton('submit');
  button.position(input.x + input.width+5, 134);
  button.mousePressed(milestokilometers);

  milevalue = createElement('h2', 'How many miles?');
  milevalue.position(100,90);

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

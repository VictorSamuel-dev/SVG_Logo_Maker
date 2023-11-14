const inquirer = require('inquirer');
const svgdom = require('svgdom');

async function main() {
  // Get the user's input.
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'number',
      name: 'age',
      message: 'What is your age?',
    },
    {
      type: 'list',
      name: 'color',
      message: 'What is your favorite color?',
      choices: [
        'red',
        'green',
        'blue',
      ],
    },
  ]);

  // Create the SVG logo.
  const svg = svgdom.createSVGDocument();
  const circle = svg.createElement('circle');
  circle.setAttribute('cx', 100);
  circle.setAttribute('cy', 100);
  circle.setAttribute('r', 50);
  circle.setAttribute('fill', answers.color);
  svg.appendChild(circle);

  // Save the SVG logo to a file.
  svgdom.writeSVGToString(svg, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      fs.writeFileSync('logo.svg', data);
      console.log('Logo saved to logo.svg');
    }
  });
}

main();
// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let x = '1332fsd-werweff';

const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
] as const;

type Color = typeof COLORS[number];

function decodedValue([color1, color2, zerosColor]: Color[]) {
  const mainColor = +`${COLORS.indexOf(color1)}${COLORS.indexOf(color2)}`;
  const numberOfZeros = COLORS.indexOf(zerosColor);
  const number = +`${mainColor}${'0'.repeat(numberOfZeros)} `;
  console.log({ number, mainColor });
  console.log(numberOfZeros / 3);
  let units: 'ohms' | 'kiloohms' | 'megaohms' | 'gigaohms' = 'ohms';
  if (number / 1000 < 1) {
    units = 'ohms';
    return `${mainColor}${'0'.repeat(numberOfZeros)} ${units}`;
  } else {
    units = 'kiloohms';
    return `${number / 1000} ${units}`;
  }
}

console.log(decodedValue(['red', 'black', 'violet']));

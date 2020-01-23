//| Switch statement to select what gif to return based off of type
//|------------------------------------------------------------------------
export default function imageSwitch(param) {
  const path = '../resources/gif/';
  switch(param) {
  case 'slinky-cat-01':
    return 'https://giphy.com/gifs/W80Y9y1XwiL84/html5';
  case 'slinky-cat-02':
    return `${path}pizza-taco-cat.gif`;
  case 'jedi-cat-01':
    return `${path}jedi-cat.gif`;
  case 'jedi-cat-02':
    return `${path}flipflop-cat.gif`;
  case 'fancy-cat-01':
    return `${path}dinner-cat.gif`;
  case 'fancy-cat-02':
    return `${path}bipedal-cat.gif`;
  default:
    return `${path}shaq-cat.gif`;
  }
}
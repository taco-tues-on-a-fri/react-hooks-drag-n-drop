import shaqCat from '../../resources/gif/shaq-cat.gif';
import pizzaTacoCat from '../../resources/gif/pizza-taco-cat.gif';
import jediCat from '../../resources/gif/jedi-cat.gif';
import flipFlopCat from '../../resources/gif/flipflop-cat.gif';
import dinnerCat from '../../resources/gif/dinner-cat.gif';
import bipedalCat from '../../resources/gif/bipedal-cat.gif';

//| Switch statement to select what gif to return based off of type
//|------------------------------------------------------------------------
export default function imageSwitch(param) {
  const path = '../resources/gif/';
  switch(param) {
  case 'slinky-cat-01':
    return shaqCat;
  case 'slinky-cat-02':
    return pizzaTacoCat;
  case 'jedi-cat-01':
    return jediCat;
  case 'jedi-cat-02':
    return flipFlopCat;
  case 'fancy-cat-01':
    return dinnerCat;
  case 'fancy-cat-02':
    return bipedalCat;
  default:
    return shaqCat;
  }
}
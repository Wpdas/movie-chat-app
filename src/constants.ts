import { DropdownItem } from './components/Dropdown';
import dropdownItemFactory from './utils/dropdownItemFactory';

export const GENRES_ITEMS: DropdownItem[] = [
  dropdownItemFactory('All'),
  dropdownItemFactory('Action'),
  dropdownItemFactory('Animation'),
  dropdownItemFactory('Adventure'),
  dropdownItemFactory('Mystery'),
  dropdownItemFactory('Sci-Fi'),
  dropdownItemFactory('Horror'),
  dropdownItemFactory('Thriller'),
  dropdownItemFactory('Comedy'),
  dropdownItemFactory('Family'),
  dropdownItemFactory('Fantasy'),
  dropdownItemFactory('Drama'),
  dropdownItemFactory('Music'),
  dropdownItemFactory('Biography'),
  dropdownItemFactory('Romance'),
  dropdownItemFactory('History'),
  dropdownItemFactory('Crime'),
];

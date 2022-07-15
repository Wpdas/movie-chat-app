import { DropdownItem } from '@app/components/Dropdown';

const dropdownItemFactory = (genre: string) => {
  return { value: genre, label: genre } as DropdownItem;
};

export default dropdownItemFactory;

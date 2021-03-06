import React, { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export type DropdownItem = {
  value: string;
  label: string;
};

type Props = {
  defaultValue: string;
  items: DropdownItem[];
  onChange: (value: string) => void;
};

const Dropdown: React.FC<Props> = ({ defaultValue, items, onChange }) => {
  const [selectedItem, setSelectedItem] = useState(defaultValue);

  const handleChange = (event: SelectChangeEvent) => {
    const currentValue = event.target.value as string;
    setSelectedItem(currentValue || '');
    onChange(currentValue);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedItem}
          onChange={handleChange}>
          {items.map(item => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Dropdown;

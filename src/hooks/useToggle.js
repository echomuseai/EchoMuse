import { useState } from 'react';

const useToggle = (initial = false) => {
  const [value, setValue] = useState(initial);
  const toggle = () => setValue(v => !v);
  return [value, toggle];
};

export default useToggle;

import { useRef, useState } from 'react';

const useBoolean = (initialValue: boolean = false) => {
  const [value, setValue] = useState(initialValue);

  const updateValue = useRef({
    on: () => setValue(true),
    off: () => setValue(false),
  });

  return [value, updateValue.current] as const;
};

export default useBoolean;

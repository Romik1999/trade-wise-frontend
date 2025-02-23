import { useSearchParams } from 'react-router-dom';
import { useCallback, useState } from 'react';
import debounce from 'lodash/debounce';

export const useSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(
    searchParams.get('search') || ''
  );

  const debouncedUpdateSearchParams = useCallback(
    debounce((value: string) => {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        if (value) {
          newParams.set('search', value);
        } else {
          newParams.delete('search');
        }
        return newParams;
      });
    }, 500),
    [setSearchParams]
  );

  const handleInputChange = (event: { target: { value: string } }) => {
    const value = event.target.value;
    setInputValue(value);
    debouncedUpdateSearchParams(value);
  };

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === 'Enter') {
      debouncedUpdateSearchParams.cancel();
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        if (inputValue) {
          newParams.set('search', inputValue);
        } else {
          newParams.delete('search');
        }
        return newParams;
      });
    }
  };

  const clearSearch = () => {
    setInputValue('');
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.delete('search');
      return newParams;
    });
  };

  return { inputValue, handleInputChange, handleKeyDown, clearSearch };
};

import type { ChangeEvent, FC } from 'react';
import { useCallback } from 'react';
import { IconInputClose, IconInputSearch } from '@component/packages-ui/icon';
import type { InputProps } from './types';
import s from './index.module.less';

const Input: FC<InputProps> = (props) => {
  const { onChange, onClear, placeholder = 'Select a country', value } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  const handleClear = useCallback(() => {
    onClear?.();
  }, []);

  return (
    <div className={s['input-wrapper']}>
      <IconInputSearch />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        autoComplete="chrome-off"
      />
      {value && <IconInputClose onClick={handleClear} />}
    </div>
  );
};

export default Input;

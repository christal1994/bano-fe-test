import React, { useImperativeHandle, useRef } from 'react';
import type { InputProps, InputRefValue } from './types';
import s from './index.module.less';

const InitalInput = (props: InputProps, ref: React.ForwardedRef<InputRefValue>) => {
  const { onChange, onClear, placeholder = 'Select a country', value } = props;

  const refInput = useRef<HTMLInputElement | null>(null);
  useImperativeHandle(ref, () => ({
    getInput: () => {
      return refInput.current;
    },
  }));

  const handleChange = () => {
    onChange?.();
  };

  const handleClear = () => {
    onClear?.();
  };

  return (
    <div className={s['input-wrapper']}>
      <svg aria-hidden="true" width="14px" height="14px">
        <use href="#icon-search" fill="#999" />
      </svg>
      <input
        ref={refInput}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        autoComplete="chrome-off"
      />
      {value && (
        <svg aria-hidden="true" width="16px" height="16px" onClick={handleClear}>
          <use href="#icon-putclose" fill="#999" />
        </svg>
      )}
    </div>
  );
};

const Input = React.forwardRef(InitalInput);

export default Input;

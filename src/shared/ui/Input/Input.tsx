import { memo, InputHTMLAttributes, ChangeEvent, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

type DefaultInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'placeholder' | 'width' | 'height'
>;

interface InputProps extends DefaultInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  width?: number | string;
  height?: number | string;
}

export const Input = memo(
  ({
    className,
    onChange,
    value,
    placeholder,
    width,
    height,
    ...otherProps
  }: InputProps) => {
    const changeHandler = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
      },
      [onChange],
    );

    return (
      <input
        className={classNames('', [className])}
        value={value}
        placeholder={placeholder}
        onChange={changeHandler}
        width={width}
        height={height}
        {...otherProps}
      />
    );
  },
);

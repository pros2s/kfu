import { memo, ReactElement, SVGProps } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './SVGIcon.module.scss';

interface SVGIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  Svg: (props: SVGProps<SVGElement>) => ReactElement;
  size?: number;
}

export const SVGIcon = memo(
  ({ className, Svg, size, ...otherProps }: SVGIconProps) => (
    <Svg
      className={classNames(cls.SVGIcon, [className])}
      width={size}
      height={size}
      {...otherProps}
    />
  ),
);

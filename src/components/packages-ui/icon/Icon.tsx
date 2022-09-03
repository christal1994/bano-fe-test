import type { FC } from 'react';
import { memo } from 'react';
import { ReactComponent as SVGClose } from './svgs/close.svg';
import { ReactComponent as SVGPutClose } from './svgs/putclose.svg';
import { ReactComponent as SVGSearch } from './svgs/search.svg';
import s from './index.module.less';

function factory(SVGComp: FC, displyName: string) {
  function IconFactory(props: Record<string, any>) {
    return (
      <span {...props} className={s.root}>
        <SVGComp />
      </span>
    );
  }
  IconFactory.displayName = displyName;
  return IconFactory;
}

const IconModalClose = memo(factory(SVGClose, 'IconModalClose'));
const IconInputClose = memo(factory(SVGPutClose, 'IconInputClose'));
const IconInputSearch = memo(factory(SVGSearch, 'IconInputSearch'));

export { IconModalClose, IconInputClose, IconInputSearch };

import type { FC } from 'react';
import { useRef, useState } from 'react';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import classNames from 'classnames';
import throttle from 'loadsh/throttle';
import s from './index.module.less';
import type { ItemProps, ListProps } from './types';

const SCEEENLEN = 20; // 默认渲染 20 条

const heightVirable = getComputedStyle(document.documentElement).getPropertyValue(
  '--list-item-height',
);
const itemHeight = parseInt(heightVirable, 10);

const List: FC<ListProps> = ({ onChose, countryList }) => {
  const [startInex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(SCEEENLEN - 1);
  const slider = useRef<HTMLDivElement | null>(null);
  const itemRef = useRef<HTMLDivElement | null>(null);

  const scroll = () => {
    let scrollTop = slider?.current?.scrollTop || 0;
    scrollTop = scrollTop > 0 ? scrollTop : 0; // ios 橡皮条上滑会瞬间 scrolltop < 0

    const currentStartIndex = Math.floor(scrollTop / itemHeight);
    const currentEndIndex = currentStartIndex + SCEEENLEN;

    if (currentStartIndex === startInex && currentEndIndex === endIndex) return;
    requestAnimationFrame(() => {
      setStartIndex(currentStartIndex);
      setEndIndex(currentEndIndex);
    });
  };

  const countryH = countryList.length * itemHeight;
  const scrollH = parseInt(countryH.toString());
  return (
    <div className={s['list-wrapper']} onScroll={throttle(scroll, 200)} ref={slider}>
      <div style={{ height: scrollH + 'px', marginBottom: `${itemHeight * 5}px` }}>
        {countryList.slice(startInex, endIndex).map((item: ItemProps, idx) => {
          return (
            <div
              ref={itemRef}
              className={s.item}
              key={idx}
              onClick={() => onChose(item.country)}
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                transform: `translateY(${(startInex + idx) * itemHeight}px)`,
              }}
            >
              <span
                className={classNames('fi', 'fis', `fi-${item.code}`)}
                style={{ width: '30px', height: '30px' }}
              />

              <div className={s.name} style={{ border: idx === 0 ? 'none' : '' }}>
                {item.country}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;

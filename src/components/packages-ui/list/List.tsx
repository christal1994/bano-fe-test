import type { FC } from 'react';
import { useCallback, useRef, useState } from 'react';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import classNames from 'classnames';
import throttle from 'loadsh/throttle';
import s from './index.module.less';
import type { ItemProps, ListProps } from './types';

const MAXCLIENT = 768;
const IPHONESTAND = 375;
const clientWidth = document.documentElement.clientWidth;
const finalwidth = clientWidth > MAXCLIENT ? IPHONESTAND : clientWidth;

const SCEEENLEN = 20; // 默认渲染 20 条

const { itemHeight: itemH } = s;
const itemHeight = Number(itemH);

const List: FC<ListProps> = ({ onChose, countryList }) => {
  const [startInex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(SCEEENLEN - 1);
  const slider = useRef<HTMLDivElement | null>(null);

  const scroll = useCallback(() => {
    const scrollTop = slider?.current?.scrollTop || 0;

    const currentStartIndex = Math.floor(scrollTop / (itemHeight * ((finalwidth / 375) * 100)));
    const currentEndIndex = currentStartIndex + SCEEENLEN;

    if (currentStartIndex === startInex && currentEndIndex === endIndex) return;
    requestAnimationFrame(() => {
      setStartIndex(currentStartIndex);
      setEndIndex(currentEndIndex);
    });
  }, [slider?.current?.scrollTop]);

  const countryH = countryList.length * itemHeight;
  const scrollH = parseInt(countryH.toString());
  return (
    <div className={s['list-wrapper']} onScroll={throttle(scroll, 100)} ref={slider}>
      <div style={{ height: scrollH + 'rem', marginBottom: `${itemHeight * 5}rem` }}>
        {countryList.slice(startInex, endIndex).map((item: ItemProps, idx) => {
          return (
            <div
              className={s.item}
              key={idx}
              onClick={() => onChose(item.country)}
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                transform: `translateY(${(startInex + idx) * itemHeight}rem)`,
              }}
            >
              <span
                className={classNames('fi', 'fis', `fi-${item.code}`)}
                style={{ width: '.3rem', height: '.3rem' }}
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

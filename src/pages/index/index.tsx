import type { FC } from 'react';
import { useContext, useEffect } from 'react';
import SelectModal from '@component/packages-biz/select-modal';
import { SearchContext } from '@component/context/searchContext';
import inobounce from 'inobounce';
import s from './index.module.less';

const App: FC = () => {
  const { searchValue, updateModalVisible } = useContext(SearchContext);

  const handleClick = () => {
    updateModalVisible(true);
  };

  useEffect(() => {
    const u = navigator.userAgent;
    if (u.includes('iPhone')) {
      inobounce.enable();
    }
    return () => {
      inobounce.disable();
    };
  }, []);

  return (
    <div className={s.app}>
      <div className={s.banner}>
        <img
          src="https://asset.cailiwo.net/app/banofinancial-home/assets/logo-6290b9f9.svg"
          alt="Bano"
        />
      </div>

      <div className={s.text}>Country：{searchValue}</div>

      <button type="button" className={s['idx-btn']} onClick={handleClick}>
        choose a country
      </button>

      <div className={s.container} />

      <SelectModal />
    </div>
  );
};

export default App;

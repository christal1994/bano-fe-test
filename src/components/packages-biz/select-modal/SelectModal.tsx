import type { FC } from 'react';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import Modal from '@component/packages-ui/modal';
import type { InputRefValue } from '@component/packages-ui/input';
import Input from '@component/packages-ui/input';
import type { ItemProps } from '@component/packages-ui/list';
import List from '@component/packages-ui/list';
import { SearchContext } from '@component/context/searchContext';
import country from '@src/lib/country.json';
import debounce from 'loadsh/debounce';
import s from './index.module.less';

const SelectModal: FC = () => {
  const [countryList, setCountryList] = useState<ItemProps[]>([]);
  const [resultText, setResultText] = useState('No result');

  const { modalVisible, searchValue, updateValue, updateModalVisible } = useContext(SearchContext);

  const searchCountry = debounce(() => {
    const list = country.filter((item) =>
      item.country.toLowerCase().includes(searchValue.toLowerCase()),
    );
    setCountryList(list);
  }, 200);
  useEffect(() => {
    searchCountry();
  }, [searchValue]);

  const handleChose = (country: string) => {
    updateModalVisible(false);
    updateValue(country);
  };

  const refInput = useRef<InputRefValue | null>(null);

  const handleChange = useCallback(() => {
    const val = refInput?.current?.getInput()?.value || '';
    if (/[^a-zA-Z]/.test(val)) {
      setResultText('Countries can only be made up of letters');
    } else {
      setResultText('No result');
    }
    updateValue(val);
  }, [refInput?.current?.getInput()?.value]);

  return (
    <Modal
      visible={modalVisible}
      title="Choose a country or region"
      onClose={() => updateModalVisible(false)}
    >
      <Input
        ref={refInput}
        value={searchValue}
        onClear={() => updateValue('')}
        onChange={handleChange}
      />

      <div className={s['search-list']}>
        {searchValue && !countryList.length ? (
          <div className={s['no-result']}>{resultText}</div>
        ) : (
          <List onChose={handleChose} countryList={countryList.length ? countryList : country} />
        )}
      </div>
    </Modal>
  );
};

export default SelectModal;

import type { ReactElement } from 'react';
import { createContext, useState } from 'react';

interface SearchProviderProps {
  searchValue: string;
  modalVisible: boolean;
  updateValue: (val: string) => void;
  updateModalVisible: (val: boolean) => void;
}

interface SearchContextProps {
  children: ReactElement;
}

const createProvider = (Context: typeof SearchContext) => {
  const provider = (props: SearchContextProps) => {
    const [searchValue, setSearchValue] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const updateValue = (value: string) => {
      setSearchValue(value);
    };

    const updateModalVisible = (value: boolean) => {
      setModalVisible(value);
    };

    const value = {
      searchValue,
      modalVisible,
      updateValue,
      updateModalVisible,
    };
    return <Context.Provider value={value}>{props.children}</Context.Provider>;
  };

  return provider;
};

const defaultValue: SearchProviderProps = {
  searchValue: '',
  modalVisible: false,
  updateValue: () => {},
  updateModalVisible: () => {},
};

const SearchContext = createContext<SearchProviderProps>(defaultValue);
const SerachProvider = createProvider(SearchContext);

export { SearchContext, SerachProvider };
export type { SearchProviderProps };

import React, { useState } from 'react';

interface SearchProviderProps {
  searchValue: string;
  modalVisible: boolean;
  updateValue: (val: string) => void;
  updateModalVisible: (val: boolean) => void;
}

interface SearchContextProps {
  children: React.ReactElement;
}

const createProvider = (Context: typeof SearchContext) => {
  // eslint-disable-next-line react/display-name
  return (props: SearchContextProps) => {
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
};

const defaultValue: SearchProviderProps = {
  searchValue: '',
  modalVisible: false,
  updateValue: () => {},
  updateModalVisible: () => {},
};

const SearchContext = React.createContext<SearchProviderProps>(defaultValue);
const SerachProvider = createProvider(SearchContext);

export { SearchContext, SerachProvider };

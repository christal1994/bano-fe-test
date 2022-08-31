export interface ItemProps {
  code: string;
  country: string;
}

export interface ListProps {
  onChose: (value: string) => void;
  countryList: ItemProps[];
}

type InputEleProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'>;

export interface InputProps extends InputEleProps {
  placeholder?: string;
  value?: string;
  onChange?: () => void;
  onClear?: () => void;
}

export interface InputRefValue extends InputEleProps {
  getInput: () => HTMLInputElement | null;
}

export type InputProps = {
  type: string;
  placeholder: string;
  classname?: string;
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

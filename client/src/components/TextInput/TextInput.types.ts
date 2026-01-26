export interface TextInputProps {
  multiline?: boolean;
  maxLines?: number;
  autoSize?: boolean;
  textStyling?: string;
  textInputLabel?: string;
  error?: string;
  onChange?: (value: string) => void;
}

import { ChangeEvent, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { TextInputProps } from './TextInput.types';
import { twMerge } from 'tailwind-merge';

type BaseInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;
type BaseTextAreaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'>;

const TextInput = ({
  multiline = false,
  maxLines = 1,
  autoSize = false,
  textStyling,
  textInputLabel,
  error,
  onChange,
  ...props
}: TextInputProps & (BaseInputProps | BaseTextAreaProps)) => {

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange?.(e.target.value);
  };

  const containerClasses = twMerge(
    "w-full flex flex-col px-4 py-2 border rounded-lg transition-all duration-200 cursor-text",
    "border-gray-200 hover:border-gray-300",
    "focus-within:ring-2 focus-within:border-blue-500 focus-within:ring-blue-500/20",
    error && "border-red-500 hover:border-red-600 focus-within:border-red-500 focus-within:ring-red-500/20",
    props.className
  );

  const inputClasses = twMerge(
    "w-full bg-transparent border-none outline-none p-0",
    "placeholder:text-gray-400 placeholder:italic",
    textStyling ? textStyling : "text-color-primary",
    "disabled:cursor-not-allowed"
  );

  return (
    <div className="w-full">
      <label className={containerClasses}>

        <div className="flex justify-between items-center mb-0.5">
          {textInputLabel && (
            <span className="text-[10px] font-bold uppercase tracking-wider text-color-primary select-none">
              {textInputLabel}
            </span>
          )}
          {error && (
            <span className="text-red-500 text-[10px] font-medium animate-in fade-in slide-in-from-right-1">
              {error}
            </span>
          )}
        </div>

        {multiline || maxLines > 1 ? (
          <textarea
            rows={maxLines}
            onChange={handleChange}
            {...props as any}
            className={twMerge(inputClasses, "resize-none min-h-[80px]")}
          />
        ) : (
          <input
            type="text"
            onChange={handleChange}
            {...props as any}
            className={inputClasses}
          />
        )}
      </label>
    </div>
  );
};

export default TextInput;

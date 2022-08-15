import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { FieldErrorsImpl } from 'react-hook-form';
import { UseFormRegister } from 'react-hook-form/dist/types/form';
import { RegisterOptions } from 'react-hook-form/dist/types/validator';

type FormFieldProps = {
  fieldName: string;
  register: UseFormRegister<any>;
  options: RegisterOptions;
  errors: FieldErrorsImpl;
  label?: string;
  type?: string;
  placeholder?: string;
  helperText?: string;
  isDisabled?: boolean;
};

const FormField = ({
  fieldName,
  register,
  options,
  errors,
  label,
  type,
  placeholder,
  helperText,
  isDisabled,
}: FormFieldProps) => (
  <FormControl
    isRequired={!!options.required}
    isInvalid={!!errors[fieldName]}
    isDisabled={isDisabled}
  >
    <FormLabel htmlFor={fieldName}>{label || fieldName}</FormLabel>

    <Input
      id={fieldName}
      type={type || 'text'}
      placeholder={placeholder}
      {...register(fieldName, options)}
    />

    {errors[fieldName] ? (
      <FormErrorMessage>
        {(errors[fieldName]?.message as string) ??
          'Sorry, your input is not valid.'}
      </FormErrorMessage>
    ) : (
      helperText && <FormHelperText>{helperText}</FormHelperText>
    )}
  </FormControl>
);

export default FormField;

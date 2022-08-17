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
  helperText,
  isDisabled,
}: FormFieldProps) => (
  <FormControl
    variant={'floating'}
    isRequired={!!options.required}
    isInvalid={!!errors[fieldName]}
    isDisabled={isDisabled}
  >
    <Input
      id={fieldName}
      type={type || 'text'}
      placeholder={' '}
      {...register(fieldName, options)}
    />

    <FormLabel htmlFor={fieldName}>{label || fieldName}</FormLabel>

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

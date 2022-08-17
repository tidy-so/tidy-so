import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { emailRegex, inviteCodeRegex, usernameRegex } from '@tidy-so/utils';
import FormField from '~components/functional/form-field';

type BetaSignUpProps = {
  triggerLabel: string;
  triggerColorScheme: string;
  triggerSize: string;
};

type BetaSignUpForm = {
  email: string;
  username: string;
  inviteCode: string;
  firstName: string;
};

const BetaSignUp = ({
  triggerColorScheme,
  triggerLabel,
  triggerSize,
}: BetaSignUpProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  // Signup Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BetaSignUpForm>();
  const onSubmit = handleSubmit((/*formData*/) => {
    // console.log(formData);
    // reset();
    toast({
      status: 'warning',
      title: 'Sorry, this feature is not ready yet...',
      description: "We're currently working on it. Please come back soon!",
      position: 'top-right',
      isClosable: true,
      duration: 10000,
    });
    // onClose();
  });

  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme={triggerColorScheme}
        size={triggerSize}
      >
        {triggerLabel}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent rounded={'2xl'}>
          <ModalHeader>Sign up</ModalHeader>
          <form onSubmit={onSubmit} noValidate={true}>
            <ModalBody mb={12}>
              <VStack spacing={8}>
                {/*Email field*/}
                <FormField
                  fieldName={'email'}
                  register={register}
                  options={{
                    required: 'Please enter an email address.',
                    pattern: {
                      value: emailRegex,
                      message: "Mmm... that doesn't look like a valid email...",
                    },
                  }}
                  errors={errors}
                  label={'Email address'}
                  type={'email'}
                  helperText={
                    'We will never share or sell your email, pinky promise.'
                  }
                />

                {/*Username field*/}
                <FormField
                  fieldName={'username'}
                  register={register}
                  options={{
                    required: 'Please enter your desired username.',
                    pattern: {
                      value: usernameRegex,
                      message:
                        'Between 3 and 20 characters long; letters, numbers and underscores; start and end with an alphanumeric character.',
                    },
                  }}
                  errors={errors}
                  label={'Username'}
                  helperText={"Reserve it before it's taken."}
                />

                {/*Invite code field*/}
                <FormField
                  fieldName={'inviteCode'}
                  register={register}
                  label={'Invite code'}
                  options={{
                    required: 'Please enter an invite code.',
                    pattern: {
                      value: inviteCodeRegex,
                      message:
                        'The format of the code is not the expected one. Please double check your code.',
                    },
                  }}
                  errors={errors}
                  helperText={
                    "We're currently on beta, but we promise to let you in ASAP."
                  }
                />

                {/*First name field*/}
                <FormField
                  fieldName={'firstName'}
                  register={register}
                  label={'First name'}
                  options={{
                    minLength: { value: 3, message: 'The name is too short.' },
                    maxLength: { value: 96, message: 'The name is too long.' },
                  }}
                  errors={errors}
                  helperText={
                    "Just so that we know who to write to when you're invite is ready."
                  }
                />
              </VStack>
            </ModalBody>

            <ModalFooter>
              <Button type={'submit'} colorScheme={'brand'}>
                Continue
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BetaSignUp;

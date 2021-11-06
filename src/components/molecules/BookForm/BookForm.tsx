import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'components/atoms/Button/Button';
import FormInput from 'components/atoms/FormInput/FormInput';
import Header from 'components/atoms/Header/Header';
import Wrapper from 'components/molecules/Wrapper/Wrapper';
import { IFormData } from 'utils/apiHandlers/books';
import * as yup from 'yup';

import styles from './BookForm.module.scss';

interface IBookFormProps {
  headerText: string;
  submitText: string;
  submitHandler: SubmitHandler<IFormData>;
  formDefaultData: IFormData | null;
}

const validationSchema = yup
  .object({
    title: yup.string().required('Pole wymagane.'),
    author: yup.string().required('Pole wymagane.'),
    genre: yup.string().required('Pole wymagane.'),
    rating: yup
      .number()
      .required('Pole wymagane.')
      .typeError('Podaj liczbę.')
      .min(1, 'Minimalna ocena to 1.')
      .max(30, 'Maksymalna ocena to 10'),
  })
  .required();

const BookForm: React.FC<IBookFormProps> = ({
  headerText,
  submitText,
  submitHandler,
  formDefaultData,
}) => {
  console.log(formDefaultData);
  const defaultData: FieldValues | undefined = formDefaultData
    ? {
        title: formDefaultData.title,
        author: formDefaultData.author,
        genre: formDefaultData.genre,
        rating: formDefaultData.rating,
        id: formDefaultData.id,
      }
    : undefined;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: defaultData,
  });

  return (
    <Wrapper additionalCssClass={styles.form__Container}>
      <form
        className={styles.form__Form}
        onSubmit={handleSubmit(submitHandler)}
      >
        <Header priority={2} text={headerText} />
        <FormInput
          errorMsg={errors.title?.message}
          formRegister={register}
          labelText="Tytuł"
          name="title"
        />
        <FormInput
          errorMsg={errors.author?.message}
          formRegister={register}
          labelText="Autor"
          name="author"
        />
        <FormInput
          errorMsg={errors.genre?.message}
          formRegister={register}
          labelText="Gatunek"
          name="genre"
        />
        <FormInput
          errorMsg={errors.rating?.message}
          formRegister={register}
          labelText="Ocena"
          name="rating"
          type="number"
        />
        <Button
          additionalCssClassModificator="biggerPadding"
          text={submitText}
          type="submit"
        />
      </form>
    </Wrapper>
  );
};

export default BookForm;

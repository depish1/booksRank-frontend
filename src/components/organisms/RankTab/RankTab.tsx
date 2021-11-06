import { useCallback, useEffect, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

import Description from 'components/atoms/Description/Description';
import EmptyMsg from 'components/atoms/EmptyMsg/EmptyMsg';
import HoverTooltip, {
  ITooltipConfig,
  TooltipPositionEnum,
} from 'components/atoms/HoverTooltip/HoverTooltip';
import IconButton, { IconsType } from 'components/atoms/IconButton/IconButton';
import Loader from 'components/atoms/Loader/Loader';
import BookForm from 'components/molecules/BookForm/BookForm';
import Footer from 'components/molecules/Footer/Footer';
import useModal from 'components/molecules/Modal/useModal';
import Wrapper from 'components/molecules/Wrapper/Wrapper';
import TableBody from 'components/organisms/Table/TableBody/TableBody';
import TableHeader from 'components/organisms/Table/TableHeader/TableHeader';
import TableRow from 'components/organisms/Table/TableRow/TableRow';
import {
  deleteBook,
  getBooksData,
  IBooksData,
  IFormatedData,
  IFormData,
  postNewBook,
  updateBook,
} from 'utils/apiHandlers/books';

import styles from './RankTab.module.scss';

const columns = ['Lp', 'Ocena', 'Tytuł', ''];

const RankTab: React.FC = () => {
  const [books, setBooks] = useState<IFormatedData[] | null>(null);
  const [Modal, isModalOpen, openModal, closeModalEvent, closeModal] =
    useModal();

  const [formDefaultData, setFormDefaultData] = useState<IFormData | null>(
    null
  );

  const formatData = (data: IBooksData[]): IFormatedData[] =>
    data.map((book) => ({
      mainData: {
        rating: book.rating,
        title: book.title,
      },
      otherData: {
        author: book.author,
        createDate: book.createDate,
        genre: book.genre,
      },
      id: book._id,
    }));

  const refreshData = useCallback(async () => {
    const data = await getBooksData();
    const formatedData = formatData(data);
    setBooks(formatedData);
  }, []);

  const addHandler = () => {
    setFormDefaultData(null);
    openModal();
  };

  const deleteHandler = useCallback(
    async (id: string) => {
      const data = await deleteBook(id);
      refreshData();
    },
    [refreshData]
  );
  const editHandler = (data: IFormatedData) => {
    const defaultData = {
      title: data.mainData.title,
      author: data.otherData.author,
      rating: data.mainData.rating,
      genre: data.otherData.genre,
      id: data.id,
    };
    setFormDefaultData(defaultData);
    openModal();
  };

  useEffect(() => {
    refreshData();
  }, [refreshData]);

  const submitHandler: SubmitHandler<IFormData> = async (data) => {
    const res = data.id ? await updateBook(data) : await postNewBook(data);
    refreshData();
    closeModal();
  };

  const renderTableBodyContent = () => {
    if (!books) return <Loader />;
    if (!books.length) return <EmptyMsg text="Brak danych do wyświetlenia" />;

    return books.map((book, index) => (
      <TableRow
        columnsCount={columns.length}
        handlerDelete={deleteHandler}
        handlerEdit={() => editHandler(book)}
        id={book.id}
        key={book.id}
        lp={index + 1}
        mainData={book.mainData}
        otherData={book.otherData}
      />
    ));
  };
  const addTooltipConfig: ITooltipConfig = {
    text: 'Dodaj książkę',
    position: TooltipPositionEnum.TOP_RIGHT,
    withArrow: true,
  };
  return (
    <>
      <Wrapper additionalCssClass={styles.rank__wrapper}>
        <Description>Ranking ocenionych książek</Description>
        <TableHeader columns={columns} />
        <TableBody>{renderTableBodyContent()}</TableBody>
        <Footer>
          <HoverTooltip config={addTooltipConfig}>
            <IconButton clickHandler={addHandler} iconType={IconsType.ADD} />
          </HoverTooltip>
        </Footer>
      </Wrapper>
      {isModalOpen && (
        <Modal handleCloseModal={closeModalEvent}>
          <BookForm
            formDefaultData={formDefaultData}
            headerText="Dodaj książkę"
            submitHandler={submitHandler}
            submitText="Dodaj"
          />
        </Modal>
      )}
    </>
  );
};

export default RankTab;

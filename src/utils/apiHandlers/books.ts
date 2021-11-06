// import { ITableData } from 'components/Table/ITableTypes';

export interface IFormData {
  title: string;
  author: string;
  genre: string;
  rating: number;
  id?: string;
}

export interface IBooksData {
  author: string;
  createDate: string;
  genre: string;
  _id: string;
  rating: number;
  title: string;
}
interface IBooksApiData {
  author: string;
  createDate: number;
  genre: string;
  _id: string;
  rating: number;
  title: string;
}

export interface IFormatedData {
  mainData: { [key: string]: any };
  otherData: { [key: string]: any };
  id: string;
}

export const getBooksData = async (): Promise<IBooksData[]> => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}books`);
    const dataSet = await res.json();
    const books: IBooksData[] = dataSet.books.map((book: IBooksApiData) => ({
      _id: book._id,
      rating: book.rating,
      title: book.title,
      genre: book.genre,
      author: book.author,
      createDate: new Date(book.createDate).toISOString().split('T')[0],
    }));
    return books;
  } catch (err) {
    throw new Error(err as string);
  }
};

export const postNewBook = async (data: IFormData): Promise<any> => {
  const url = `${process.env.REACT_APP_API_URL}books`;
  const settings = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  try {
    const fetchResponse = await fetch(url, settings);
    const res = await fetchResponse.json();

    return res;
  } catch (err) {
    console.error(err);
    return null;
  }
};
export const updateBook = async (data: IFormData): Promise<any> => {
  const url = `${process.env.REACT_APP_API_URL}books`;
  const settings = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  try {
    const fetchResponse = await fetch(url, settings);
    const res = await fetchResponse.json();

    return res;
  } catch (err) {
    console.error(err);
    return null;
  }
};
export const deleteBook = async (id: string): Promise<any> => {
  const url = `${process.env.REACT_APP_API_URL}books`;
  const settings = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ book_id: id }),
  };
  try {
    const fetchResponse = await fetch(url, settings);
    const res = await fetchResponse.json();

    return res;
  } catch (err) {
    throw new Error(err as string);
  }
};

export const xd = 'xs';

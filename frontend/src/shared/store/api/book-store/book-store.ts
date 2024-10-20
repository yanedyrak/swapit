import { makeAutoObservable } from "mobx";
import { getBooks } from "../../../api/books/api";
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";
import { BooksResponse } from "../../../api/books/types";

class BookStore {
  constructor() {
    makeAutoObservable(this);
  }
  booksData?: IPromiseBasedObservable<BooksResponse>;
  getBooksAction = async () => {
    try {
      this.booksData = fromPromise(getBooks());
    } catch (err) {
      console.log(err);
    }
  };
}

export const bookStore = new BookStore();

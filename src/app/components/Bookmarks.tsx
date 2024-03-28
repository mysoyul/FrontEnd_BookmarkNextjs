import React from 'react';
import Bookmark from './Bookmark';
import { BookmarksResponse } from '@/types';
import Pagination from './Pagination';

type Props = {
    //bookmarks: BookmarkType[]
    bookmarks: BookmarksResponse
}

const Bookmarks: React.FC<Props> = ({bookmarks}) => {
    return (
        <div>
            <Pagination bookmarks={bookmarks} />
            {
            bookmarks.data.map(book => <Bookmark key={book.id} bookmark={book} />)
            }            
        </div>
    );
};

export default Bookmarks;
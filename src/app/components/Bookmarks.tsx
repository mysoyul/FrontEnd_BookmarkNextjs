import React from 'react';
import Bookmark from './Bookmark';
import { BookmarksResponse } from '@/types';

type Props = {
    //bookmarks: BookmarkType[]
    bookmarks: BookmarksResponse
}

const Bookmarks: React.FC<Props> = ({bookmarks}) => {
    return (
        <div>
            <h1>Welcome to Bookmarks Comp</h1>
            {
            bookmarks.data.map(book => <Bookmark key={book.id} bookmark={book} />)
            }            
        </div>
    );
};

export default Bookmarks;
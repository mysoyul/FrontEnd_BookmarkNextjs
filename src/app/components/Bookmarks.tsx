import { BookmarkType } from '@/types';
import React from 'react';
import Bookmark from './Bookmark';

type Props = {
    bookmarks: BookmarkType[]
}

const Bookmarks: React.FC<Props> = ({bookmarks}) => {
    return (
        <div>
            <h1>Welcome to Bookmarks Comp</h1>
            {
            bookmarks.map(book => <Bookmark key={book.id} bookmark={book} />)
            }            
        </div>
    );
};

export default Bookmarks;
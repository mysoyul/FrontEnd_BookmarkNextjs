
import axios from "axios"
import { BookmarksResponse } from "@/types"

const API_BASE_URL = 'http://localhost:8080'

export async function getAllBookmarks(): Promise<BookmarksResponse> {
    const res = await axios.get<BookmarksResponse>(`${API_BASE_URL}/api/bookmarks`)

    return res.data
}
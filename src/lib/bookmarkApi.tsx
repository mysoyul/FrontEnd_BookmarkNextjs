
import axios from "axios"
import { BookmarksResponse } from "@/types"
import getConfig from 'next/config'
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

const getApiUrl = () => {
    return serverRuntimeConfig.API_BASE_URL || publicRuntimeConfig.API_BASE_URL;
}

export async function getAllBookmarks(page: number, query: string): Promise<BookmarksResponse> {
    let API_URL = `${getApiUrl()}/api/bookmarks?page=${page}`
    if(query) {
        API_URL += `&query=${query}`
    }
    console.log(`url = ${API_URL}`)

    const res = await axios.get<BookmarksResponse>(API_URL)

    return res.data
}
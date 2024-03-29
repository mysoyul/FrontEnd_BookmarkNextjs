import axios from "axios"

const getApiUrl = () => {
    return process.env.NEXT_PUBLIC_SERVER_API_BASE_URL || process.env.NEXT_PUBLIC_CLIENT_API_BASE_URL
}

export async function saveBookmark(bookmark:{title: string, url: string}) {
    const res = await axios.post(`${getApiUrl()}/api/bookmarks`, bookmark)
    return res.data
}
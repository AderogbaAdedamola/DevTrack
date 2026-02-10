import axios from "axios"

export default axios.create(
    {
        BASEURL: import.meta.env.VITE_BASE_URL,
    }
)
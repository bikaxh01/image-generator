import axios from 'axios'

export const createConversationApi = async ()=>{
    try {
        const response = await axios.post('/api/create-conversation')
        return response.data
    } catch (error) {
        console.log("🚀 ~ createConversationApi ~ error:", error)
        throw new Error("Something went wrong...")
    }
}
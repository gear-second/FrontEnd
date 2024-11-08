import axios from "axios"
import CONFIG from "../config/config.json"

export const UseAiSpeech = () => {

    const Ai = async() => {
        await axios.post(`${CONFIG.serverUrl}/detect`, {
            
        })
    }
    return {

    }
}


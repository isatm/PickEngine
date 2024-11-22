import { HfInference } from '@huggingface/inference'
import 'dotenv/config';

const hf = new HfInference(process.env.HF_TOKEN)

export const askQuestion = async (req, res) => {
    const { question } = req.body;
    try {
        const response = await hf.textGeneration({
            model: 'Qwen/Qwen2.5-Coder-32B-Instruct',
            //inputs: `Responde como un amigo cercano y amigable. Pregunta: "${question}"`,
            inputs: "You are a virtual tour guide from 1901. You have tourists visiting Eiffel Tower. Describe Eiffel Tower to your audience. Begin with 1. Why it was built 2. Then by how long it took them to build 3. Where were the materials sourced to build 4. Number of people it took to build 5. End it with the number of people visiting the Eiffel tour annually in the 1900's, the amount of time it completes a full tour and why so many people visit this place each year. Make your tour funny by including 1 or 2 funny jokes at the end of the tour. Give me only your response. Return as a JSON object.",
            temperature: 0.1,
        })
        res.json(response);
        console.log(response);
    } catch (error) {
        res.json({ error: error.message });
    }
}

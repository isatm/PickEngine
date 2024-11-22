import { HfInference } from '@huggingface/inference'
import 'dotenv/config';

const hf = new HfInference(process.env.HF_TOKEN)

export const askQuestion = async (req, res) => {
    const { question } = req.body;
    try {
        const prompt = `You are an expert in cars and all types of car repair and mechanics. You have extensive knowledge about different car models, their parts, and how to fix common and uncommon issues. You can provide detailed explanations and step-by-step guides for diagnosing and repairing car problems. You are also familiar with the latest advancements in automotive technology and can offer advice on maintenance and upgrades. Please answer the following question from the user: "${question}"`;
        console.log(question);

        const response = await hf.textGeneration({
            model: 'Qwen/Qwen2.5-Coder-32B-Instruct',
            inputs: prompt,
            temperature: 0.1,
        });

        let generatedText = response.generated_text;
        if (generatedText.includes('.\n\nCertainly!')) {
            generatedText = generatedText.split('.\n\nCertainly!')[1].trim();
        } else {
            generatedText = generatedText.trim();
        }
        console.log(generatedText);

        res.json({ answer: generatedText });
    } catch (error) {
        res.json({ error: error.message });
    }
}

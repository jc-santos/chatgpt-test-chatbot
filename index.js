import OpenAI from "openai";

const openai = new OpenAI();

const main = async() => {
    try {
        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: "You're a helpful assistant."}],
            model: "gpt-3.5-turbo",
        })
    
        console.log(completion.choices[0]);
        
    } catch (e) {
        console.log(e)
    }
}

main();
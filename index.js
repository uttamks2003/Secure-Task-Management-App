//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
const express = require('express')
const app = express()
const port = 3080;
const cors = require('cors');
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);



app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post('/chat', async (req, res) => {
    const prompt = req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    console.log(response.data.choices[0].text);
    res.send(response.data.choices[0].text)
});
app.listen(port, () => {
    console.log(`Example app listening at port ${port}`);
})
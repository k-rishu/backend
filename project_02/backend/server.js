import express from 'express';


const app = express();

// app.get('/', (req, res) => {
//     res.send("server is ready");
// })

// get a list of 5 jokes

const jokes = [
    {
        id: 1,
        title: "Joke 1",
        Contnet: "Why don't scientists trust atoms anymore? Because they make up everything!"
    },
    {
        id: 2,
        title: "Joke 2",
        Contnet: "Did you hear about the mathematician who’s afraid of negative numbers? He'll stop at nothing to avoid them."
    },
    {
        id: 3,
        title: "Joke 3",
        Contnet: "What do you call fake spaghetti? An impasta!"
    },
    {
        id: 4,
        title: "Joke 4",
        Contnet: "Why did the scarecrow win an award? Because he was outstanding in his field!"
    },
    {
        id: 5,
        title: "Joke 5",
        Contnet: "What's orange and sounds like a parrot? A carrot!"
    }
]

app.get('/api/jokes', (req, res)=>{
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost: ${port}`);
})
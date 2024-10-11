import express, { Request, Response } from 'express';

const app = express();

// Define a route for the root URL '/'
app.get('/', (req: Request, res: Response) => {
    // Redirect to another page
    res.redirect('myapp://openPage');
});

// Define a route for the new page '/new-page'
app.get('/new-page', (req: Request, res: Response) => {
    // Send a simple response to the new page
    res.send('Welcome to the redirect page!');
    res.status(200);
});

// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
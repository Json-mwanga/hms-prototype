export const setRoutes = (app) => {
    app.get('/', (req, res) => {
        res.send('Welcome to the API');
    });

    // Additional routes can be added here
};
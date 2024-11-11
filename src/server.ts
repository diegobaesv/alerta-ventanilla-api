import app, { startServer } from "./app";

const PORT = 3000;

const main = async () => {
    await startServer();
    app.listen(PORT,() => console.log(`App escuchando en puerto ${PORT}`));
    //test
};

main();
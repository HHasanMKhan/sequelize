const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const { addMovie, listMovies, updateMovies, deleteMovies } = require("./movie/functions")

app = async (yargsObject) => {
    try {
        await sequelize.sync();
        if (yargsObject.createMovie) {
            await addMovie({ title: yargsObject.title, actor: yargsObject.actor });
            let output = {}
            let table = await listMovies()
            for (let movie of table) {
                output.id = movie.id
                output.title = movie.title
                output.actor = movie.actor
                console.log(output)
            }
        } else if (yargsObject.readMovies) {
            let output = {}
            let table = await listMovies()
            for (let movie of table) {
                output.id = movie.id
                output.title = movie.title
                output.actor = movie.actor
                console.log(output)
            }
        } else if (yargsObject.updateMovie) {
            await updateMovies(yargsObject);
            let output = {}
            let table = await listMovies()
            for (let movie of table) {
                output.id = movie.id
                output.title = movie.title
                output.actor = movie.actor
                console.log(output)
            }
        } else if (yargsObject.deleteMovie) {
            await deleteMovies(yargsObject);
            let output = {}
            let table = await listMovies()
            for (let movie of table) {
                output.id = movie.id
                output.title = movie.title
                output.actor = movie.actor
                console.log(output)
            }
        } else {
            console.log("incorrect command")
        }
        await sequelize.close();
    } catch (error) {
        await sequelize.close();
        console.log(error)
    }
}

app(yargs.argv);
const Movie = require("./table");

exports.addMovie = async (movieObject) => {
    try {
        await Movie.create(movieObject);
    } catch (error) {
        console.log(error);
    }
}

exports.listMovies = async () => {
    try {
        return await Movie.findAll();
    } catch (error) {
        console.log(error);
    }
}

exports.updateMovies = async (movieObject) => {
    try {
        await Movie.update({title: movieObject.updatedTitle, actor: movieObject.updatedActor}, {
            where: {
                title: movieObject.title,
                actor: movieObject.actor
            }
        });
    } catch (error) {
        console.log(error);
    }
}

exports.deleteMovies = async (movieObject) => {
    try {
        await Movie.destroy( {
            where: {
                title: movieObject.title,
                actor: movieObject.actor
            }
        })
    } catch (error) {
        console.log(error);
    }
}
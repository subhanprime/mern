import mongoose from 'mongoose'
const Connection = async (username, password) => {

    const URL = `mongodb+srv://${username}:${password}@merncrudapp.gsywgdg.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('database conncet succesfullly')
    } catch (error) {
        console.log(error)
    }

}

export default Connection;
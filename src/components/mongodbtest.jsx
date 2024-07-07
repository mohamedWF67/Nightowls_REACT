import { MongoClient } from "mongodb";

function mongotest() {

    const mongoClient = new MongoClient(
        'mongodb+srv://mohamedwf67:z2pZyVuswN1dpym7@nightowls.1tznwws.mongodb.net/?retryWrites=true&w=majority&appName=nightowls'
    )

    const data = mongoClient.db().collection('server').find({}).toArray();

    console.log('!!!',data);

    return (
        <>

        </>
    );

}

export default mongotest

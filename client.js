// create a grpc client

const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync('proto/notes.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});
const notesProto = grpc.loadPackageDefinition(packageDefinition);
const NoteService = notesProto.NoteService;
const client = new NoteService('localhost:50051', grpc.credentials.createInsecure());
// create a note
const newNote = {
    title: 'New Note',
    content: 'Content of the note',
    date: new Date()
};
client.insert(newNote, (error, note) => {
    if (!error) {
        console.log('New note created successfully: ', note);
    } else {
        console.error(error);
    }
});



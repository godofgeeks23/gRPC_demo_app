// create a grpc server
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync('proto/notes.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});
const notesProto = grpc.loadPackageDefinition(packageDefinition);
const server = new grpc.Server();
const notes = require('./notes');
server.addService(notesProto.NoteService.service, notes);
server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure());
console.log('Server running at http:// 127.0 .0 .1 : 50051');

server.start();

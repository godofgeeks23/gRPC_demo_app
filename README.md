# gRPC Demo Application

A simple Node app to demonstrate gRPC (Remote Procedure Call).

## Theory

### RPC

RPC stands for Remote Procedure Call. It is a protocol that one program can use to request a service from a program located in another computer in a network without having to understand the network's details. A procedure call is also sometimes known as a function call or a subroutine call. RPC uses the client-server model. The requesting program is a client and the service-providing program is the server. Like a regular or local procedure call, an RPC is a synchronous operation requiring the requesting program to be suspended until the results of the remote procedure are returned. However, the use of lightweight processes or threads that share the same address space allows multiple RPCs to be performed concurrently.

### gRPC

gRPC is a modern, open source, high-performance remote procedure call (RPC) framework that can run anywhere. gRPC enables client and server applications to communicate transparently, and simplifies the building of connected systems. It is based on HTTP/2, Protocol Buffers and other modern technologies.

### Protocol Buffers

Protocol buffers are a language-neutral, platform-neutral extensible mechanism for serializing structured data. You define how you want your data to be structured once, then you can use special generated source code to easily write and read your structured data to and from a variety of data streams and using a variety of languages. You can even update your data structure without breaking deployed programs that are compiled against the "old" format.

### gRPC service

gRPC service is defined using Protocol Buffers IDL in a `.proto` file. It contains the definition of the service methods and the messages that are used by the service methods.

<br>

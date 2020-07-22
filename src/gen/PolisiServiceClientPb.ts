/**
 * @fileoverview gRPC-Web generated client stub for polisi
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

import {
  ReqAdd,
  ReqFindByEmail,
  ReqId,
  ReqUpdateAkun,
  ReqUpdateProfil,
  ResPolisi,
  ResPolisiArray} from './polisi_pb';

export class PolisiServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoFind = new grpcWeb.AbstractClientBase.MethodInfo(
    ResPolisiArray,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    ResPolisiArray.deserializeBinary
  );

  find(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<ResPolisiArray>;

  find(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ResPolisiArray) => void): grpcWeb.ClientReadableStream<ResPolisiArray>;

  find(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ResPolisiArray) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/polisi.PolisiService/Find',
        request,
        metadata || {},
        this.methodInfoFind,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/polisi.PolisiService/Find',
    request,
    metadata || {},
    this.methodInfoFind);
  }

  methodInfoFindByEmail = new grpcWeb.AbstractClientBase.MethodInfo(
    ResPolisiArray,
    (request: ReqFindByEmail) => {
      return request.serializeBinary();
    },
    ResPolisiArray.deserializeBinary
  );

  findByEmail(
    request: ReqFindByEmail,
    metadata: grpcWeb.Metadata | null): Promise<ResPolisiArray>;

  findByEmail(
    request: ReqFindByEmail,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ResPolisiArray) => void): grpcWeb.ClientReadableStream<ResPolisiArray>;

  findByEmail(
    request: ReqFindByEmail,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ResPolisiArray) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/polisi.PolisiService/FindByEmail',
        request,
        metadata || {},
        this.methodInfoFindByEmail,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/polisi.PolisiService/FindByEmail',
    request,
    metadata || {},
    this.methodInfoFindByEmail);
  }

  methodInfoFindMyProfil = new grpcWeb.AbstractClientBase.MethodInfo(
    ResPolisi,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    ResPolisi.deserializeBinary
  );

  findMyProfil(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<ResPolisi>;

  findMyProfil(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ResPolisi) => void): grpcWeb.ClientReadableStream<ResPolisi>;

  findMyProfil(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ResPolisi) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/polisi.PolisiService/FindMyProfil',
        request,
        metadata || {},
        this.methodInfoFindMyProfil,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/polisi.PolisiService/FindMyProfil',
    request,
    metadata || {},
    this.methodInfoFindMyProfil);
  }

  methodInfoAdd = new grpcWeb.AbstractClientBase.MethodInfo(
    ResPolisi,
    (request: ReqAdd) => {
      return request.serializeBinary();
    },
    ResPolisi.deserializeBinary
  );

  add(
    request: ReqAdd,
    metadata: grpcWeb.Metadata | null): Promise<ResPolisi>;

  add(
    request: ReqAdd,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ResPolisi) => void): grpcWeb.ClientReadableStream<ResPolisi>;

  add(
    request: ReqAdd,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ResPolisi) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/polisi.PolisiService/Add',
        request,
        metadata || {},
        this.methodInfoAdd,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/polisi.PolisiService/Add',
    request,
    metadata || {},
    this.methodInfoAdd);
  }

  methodInfoUpdateProfil = new grpcWeb.AbstractClientBase.MethodInfo(
    ResPolisi,
    (request: ReqUpdateProfil) => {
      return request.serializeBinary();
    },
    ResPolisi.deserializeBinary
  );

  updateProfil(
    request: ReqUpdateProfil,
    metadata: grpcWeb.Metadata | null): Promise<ResPolisi>;

  updateProfil(
    request: ReqUpdateProfil,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ResPolisi) => void): grpcWeb.ClientReadableStream<ResPolisi>;

  updateProfil(
    request: ReqUpdateProfil,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ResPolisi) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/polisi.PolisiService/UpdateProfil',
        request,
        metadata || {},
        this.methodInfoUpdateProfil,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/polisi.PolisiService/UpdateProfil',
    request,
    metadata || {},
    this.methodInfoUpdateProfil);
  }

  methodInfoUpdateAkun = new grpcWeb.AbstractClientBase.MethodInfo(
    ResPolisi,
    (request: ReqUpdateAkun) => {
      return request.serializeBinary();
    },
    ResPolisi.deserializeBinary
  );

  updateAkun(
    request: ReqUpdateAkun,
    metadata: grpcWeb.Metadata | null): Promise<ResPolisi>;

  updateAkun(
    request: ReqUpdateAkun,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ResPolisi) => void): grpcWeb.ClientReadableStream<ResPolisi>;

  updateAkun(
    request: ReqUpdateAkun,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ResPolisi) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/polisi.PolisiService/UpdateAkun',
        request,
        metadata || {},
        this.methodInfoUpdateAkun,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/polisi.PolisiService/UpdateAkun',
    request,
    metadata || {},
    this.methodInfoUpdateAkun);
  }

  methodInfoDelete = new grpcWeb.AbstractClientBase.MethodInfo(
    ResPolisi,
    (request: ReqId) => {
      return request.serializeBinary();
    },
    ResPolisi.deserializeBinary
  );

  delete(
    request: ReqId,
    metadata: grpcWeb.Metadata | null): Promise<ResPolisi>;

  delete(
    request: ReqId,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ResPolisi) => void): grpcWeb.ClientReadableStream<ResPolisi>;

  delete(
    request: ReqId,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ResPolisi) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/polisi.PolisiService/Delete',
        request,
        metadata || {},
        this.methodInfoDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/polisi.PolisiService/Delete',
    request,
    metadata || {},
    this.methodInfoDelete);
  }

}


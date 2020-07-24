/**
 * @fileoverview gRPC-Web generated client stub for laporan
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import {
  ReqAddLaporan,
  ReqFind,
  ReqId,
  ResLaporan,
  ResLaporanPaging} from './laporan_pb';

export class LaporanServiceClient {
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

  methodInfoAddLaporan = new grpcWeb.AbstractClientBase.MethodInfo(
    ResLaporan,
    (request: ReqAddLaporan) => {
      return request.serializeBinary();
    },
    ResLaporan.deserializeBinary
  );

  addLaporan(
    request: ReqAddLaporan,
    metadata: grpcWeb.Metadata | null): Promise<ResLaporan>;

  addLaporan(
    request: ReqAddLaporan,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ResLaporan) => void): grpcWeb.ClientReadableStream<ResLaporan>;

  addLaporan(
    request: ReqAddLaporan,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ResLaporan) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/laporan.LaporanService/AddLaporan',
        request,
        metadata || {},
        this.methodInfoAddLaporan,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/laporan.LaporanService/AddLaporan',
    request,
    metadata || {},
    this.methodInfoAddLaporan);
  }

  methodInfoTerimaLaporan = new grpcWeb.AbstractClientBase.MethodInfo(
    ResLaporan,
    (request: ReqId) => {
      return request.serializeBinary();
    },
    ResLaporan.deserializeBinary
  );

  terimaLaporan(
    request: ReqId,
    metadata: grpcWeb.Metadata | null): Promise<ResLaporan>;

  terimaLaporan(
    request: ReqId,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ResLaporan) => void): grpcWeb.ClientReadableStream<ResLaporan>;

  terimaLaporan(
    request: ReqId,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ResLaporan) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/laporan.LaporanService/TerimaLaporan',
        request,
        metadata || {},
        this.methodInfoTerimaLaporan,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/laporan.LaporanService/TerimaLaporan',
    request,
    metadata || {},
    this.methodInfoTerimaLaporan);
  }

  methodInfoFind = new grpcWeb.AbstractClientBase.MethodInfo(
    ResLaporanPaging,
    (request: ReqFind) => {
      return request.serializeBinary();
    },
    ResLaporanPaging.deserializeBinary
  );

  find(
    request: ReqFind,
    metadata: grpcWeb.Metadata | null): Promise<ResLaporanPaging>;

  find(
    request: ReqFind,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ResLaporanPaging) => void): grpcWeb.ClientReadableStream<ResLaporanPaging>;

  find(
    request: ReqFind,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ResLaporanPaging) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/laporan.LaporanService/Find',
        request,
        metadata || {},
        this.methodInfoFind,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/laporan.LaporanService/Find',
    request,
    metadata || {},
    this.methodInfoFind);
  }

  methodInfoDelete = new grpcWeb.AbstractClientBase.MethodInfo(
    ResLaporan,
    (request: ReqId) => {
      return request.serializeBinary();
    },
    ResLaporan.deserializeBinary
  );

  delete(
    request: ReqId,
    metadata: grpcWeb.Metadata | null): Promise<ResLaporan>;

  delete(
    request: ReqId,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ResLaporan) => void): grpcWeb.ClientReadableStream<ResLaporan>;

  delete(
    request: ReqId,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ResLaporan) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/laporan.LaporanService/Delete',
        request,
        metadata || {},
        this.methodInfoDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/laporan.LaporanService/Delete',
    request,
    metadata || {},
    this.methodInfoDelete);
  }

}


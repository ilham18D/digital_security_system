import * as jspb from "google-protobuf"

export class ResLaporan extends jspb.Message {
  getId(): string;
  setId(value: string): ResLaporan;

  getDiterima(): boolean;
  setDiterima(value: boolean): ResLaporan;

  getCreatedby(): string;
  setCreatedby(value: string): ResLaporan;

  getNama(): string;
  setNama(value: string): ResLaporan;

  getAlamat(): string;
  setAlamat(value: string): ResLaporan;

  getNomorhp(): string;
  setNomorhp(value: string): ResLaporan;

  getLon(): number;
  setLon(value: number): ResLaporan;

  getLat(): number;
  setLat(value: number): ResLaporan;

  getDarurat(): boolean;
  setDarurat(value: boolean): ResLaporan;

  getDeskripsi(): string;
  setDeskripsi(value: string): ResLaporan;

  getImageurl(): string;
  setImageurl(value: string): ResLaporan;

  getFcmpelapor(): string;
  setFcmpelapor(value: string): ResLaporan;

  getWaktukejadian(): string;
  setWaktukejadian(value: string): ResLaporan;

  getCreatedat(): string;
  setCreatedat(value: string): ResLaporan;

  getUpdatedat(): string;
  setUpdatedat(value: string): ResLaporan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResLaporan.AsObject;
  static toObject(includeInstance: boolean, msg: ResLaporan): ResLaporan.AsObject;
  static serializeBinaryToWriter(message: ResLaporan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResLaporan;
  static deserializeBinaryFromReader(message: ResLaporan, reader: jspb.BinaryReader): ResLaporan;
}

export namespace ResLaporan {
  export type AsObject = {
    id: string,
    diterima: boolean,
    createdby: string,
    nama: string,
    alamat: string,
    nomorhp: string,
    lon: number,
    lat: number,
    darurat: boolean,
    deskripsi: string,
    imageurl: string,
    fcmpelapor: string,
    waktukejadian: string,
    createdat: string,
    updatedat: string,
  }
}

export class ReqFind extends jspb.Message {
  getDarurat(): boolean;
  setDarurat(value: boolean): ReqFind;

  getPage(): number;
  setPage(value: number): ReqFind;

  getLimit(): number;
  setLimit(value: number): ReqFind;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReqFind.AsObject;
  static toObject(includeInstance: boolean, msg: ReqFind): ReqFind.AsObject;
  static serializeBinaryToWriter(message: ReqFind, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReqFind;
  static deserializeBinaryFromReader(message: ReqFind, reader: jspb.BinaryReader): ReqFind;
}

export namespace ReqFind {
  export type AsObject = {
    darurat: boolean,
    page: number,
    limit: number,
  }
}

export class MetaPaging extends jspb.Message {
  getTotalitems(): number;
  setTotalitems(value: number): MetaPaging;

  getItemcount(): number;
  setItemcount(value: number): MetaPaging;

  getItemsperpage(): number;
  setItemsperpage(value: number): MetaPaging;

  getTotalpages(): number;
  setTotalpages(value: number): MetaPaging;

  getCurrentpage(): number;
  setCurrentpage(value: number): MetaPaging;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetaPaging.AsObject;
  static toObject(includeInstance: boolean, msg: MetaPaging): MetaPaging.AsObject;
  static serializeBinaryToWriter(message: MetaPaging, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetaPaging;
  static deserializeBinaryFromReader(message: MetaPaging, reader: jspb.BinaryReader): MetaPaging;
}

export namespace MetaPaging {
  export type AsObject = {
    totalitems: number,
    itemcount: number,
    itemsperpage: number,
    totalpages: number,
    currentpage: number,
  }
}

export class ResLaporanPaging extends jspb.Message {
  getMeta(): MetaPaging | undefined;
  setMeta(value?: MetaPaging): ResLaporanPaging;
  hasMeta(): boolean;
  clearMeta(): ResLaporanPaging;

  getItemsList(): Array<ResLaporan>;
  setItemsList(value: Array<ResLaporan>): ResLaporanPaging;
  clearItemsList(): ResLaporanPaging;
  addItems(value?: ResLaporan, index?: number): ResLaporan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResLaporanPaging.AsObject;
  static toObject(includeInstance: boolean, msg: ResLaporanPaging): ResLaporanPaging.AsObject;
  static serializeBinaryToWriter(message: ResLaporanPaging, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResLaporanPaging;
  static deserializeBinaryFromReader(message: ResLaporanPaging, reader: jspb.BinaryReader): ResLaporanPaging;
}

export namespace ResLaporanPaging {
  export type AsObject = {
    meta?: MetaPaging.AsObject,
    itemsList: Array<ResLaporan.AsObject>,
  }
}

export class ReqAddLaporan extends jspb.Message {
  getNama(): string;
  setNama(value: string): ReqAddLaporan;

  getAlamat(): string;
  setAlamat(value: string): ReqAddLaporan;

  getNomorhp(): string;
  setNomorhp(value: string): ReqAddLaporan;

  getLon(): number;
  setLon(value: number): ReqAddLaporan;

  getLat(): number;
  setLat(value: number): ReqAddLaporan;

  getDarurat(): boolean;
  setDarurat(value: boolean): ReqAddLaporan;

  getDeskripsi(): string;
  setDeskripsi(value: string): ReqAddLaporan;

  getImageurl(): string;
  setImageurl(value: string): ReqAddLaporan;

  getFcmpelapor(): string;
  setFcmpelapor(value: string): ReqAddLaporan;

  getWaktukejadian(): string;
  setWaktukejadian(value: string): ReqAddLaporan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReqAddLaporan.AsObject;
  static toObject(includeInstance: boolean, msg: ReqAddLaporan): ReqAddLaporan.AsObject;
  static serializeBinaryToWriter(message: ReqAddLaporan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReqAddLaporan;
  static deserializeBinaryFromReader(message: ReqAddLaporan, reader: jspb.BinaryReader): ReqAddLaporan;
}

export namespace ReqAddLaporan {
  export type AsObject = {
    nama: string,
    alamat: string,
    nomorhp: string,
    lon: number,
    lat: number,
    darurat: boolean,
    deskripsi: string,
    imageurl: string,
    fcmpelapor: string,
    waktukejadian: string,
  }
}

export class ReqId extends jspb.Message {
  getId(): string;
  setId(value: string): ReqId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReqId.AsObject;
  static toObject(includeInstance: boolean, msg: ReqId): ReqId.AsObject;
  static serializeBinaryToWriter(message: ReqId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReqId;
  static deserializeBinaryFromReader(message: ReqId, reader: jspb.BinaryReader): ReqId;
}

export namespace ReqId {
  export type AsObject = {
    id: string,
  }
}


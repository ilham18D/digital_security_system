import * as jspb from "google-protobuf"

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

export class ResPolisi extends jspb.Message {
  getId(): string;
  setId(value: string): ResPolisi;

  getKtp(): string;
  setKtp(value: string): ResPolisi;

  getNama(): string;
  setNama(value: string): ResPolisi;

  getNomorhp(): string;
  setNomorhp(value: string): ResPolisi;

  getEmail(): string;
  setEmail(value: string): ResPolisi;

  getAlamat(): string;
  setAlamat(value: string): ResPolisi;

  getJeniskelamin(): JenisKelamin;
  setJeniskelamin(value: JenisKelamin): ResPolisi;

  getTanggallahir(): string;
  setTanggallahir(value: string): ResPolisi;

  getCreatedat(): string;
  setCreatedat(value: string): ResPolisi;

  getUpdatedat(): string;
  setUpdatedat(value: string): ResPolisi;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResPolisi.AsObject;
  static toObject(includeInstance: boolean, msg: ResPolisi): ResPolisi.AsObject;
  static serializeBinaryToWriter(message: ResPolisi, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResPolisi;
  static deserializeBinaryFromReader(message: ResPolisi, reader: jspb.BinaryReader): ResPolisi;
}

export namespace ResPolisi {
  export type AsObject = {
    id: string,
    ktp: string,
    nama: string,
    nomorhp: string,
    email: string,
    alamat: string,
    jeniskelamin: JenisKelamin,
    tanggallahir: string,
    createdat: string,
    updatedat: string,
  }
}

export class ResPolisiArray extends jspb.Message {
  getItemsList(): Array<ResPolisi>;
  setItemsList(value: Array<ResPolisi>): ResPolisiArray;
  clearItemsList(): ResPolisiArray;
  addItems(value?: ResPolisi, index?: number): ResPolisi;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResPolisiArray.AsObject;
  static toObject(includeInstance: boolean, msg: ResPolisiArray): ResPolisiArray.AsObject;
  static serializeBinaryToWriter(message: ResPolisiArray, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResPolisiArray;
  static deserializeBinaryFromReader(message: ResPolisiArray, reader: jspb.BinaryReader): ResPolisiArray;
}

export namespace ResPolisiArray {
  export type AsObject = {
    itemsList: Array<ResPolisi.AsObject>,
  }
}

export class ReqAdd extends jspb.Message {
  getKtp(): string;
  setKtp(value: string): ReqAdd;

  getNama(): string;
  setNama(value: string): ReqAdd;

  getNomorhp(): string;
  setNomorhp(value: string): ReqAdd;

  getEmail(): string;
  setEmail(value: string): ReqAdd;

  getAlamat(): string;
  setAlamat(value: string): ReqAdd;

  getJeniskelamin(): JenisKelamin;
  setJeniskelamin(value: JenisKelamin): ReqAdd;

  getTanggallahir(): string;
  setTanggallahir(value: string): ReqAdd;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReqAdd.AsObject;
  static toObject(includeInstance: boolean, msg: ReqAdd): ReqAdd.AsObject;
  static serializeBinaryToWriter(message: ReqAdd, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReqAdd;
  static deserializeBinaryFromReader(message: ReqAdd, reader: jspb.BinaryReader): ReqAdd;
}

export namespace ReqAdd {
  export type AsObject = {
    ktp: string,
    nama: string,
    nomorhp: string,
    email: string,
    alamat: string,
    jeniskelamin: JenisKelamin,
    tanggallahir: string,
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

export class ReqFindByEmail extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): ReqFindByEmail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReqFindByEmail.AsObject;
  static toObject(includeInstance: boolean, msg: ReqFindByEmail): ReqFindByEmail.AsObject;
  static serializeBinaryToWriter(message: ReqFindByEmail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReqFindByEmail;
  static deserializeBinaryFromReader(message: ReqFindByEmail, reader: jspb.BinaryReader): ReqFindByEmail;
}

export namespace ReqFindByEmail {
  export type AsObject = {
    email: string,
  }
}

export class ReqUpdateProfil extends jspb.Message {
  getKtp(): string;
  setKtp(value: string): ReqUpdateProfil;

  getNama(): string;
  setNama(value: string): ReqUpdateProfil;

  getNomorhp(): string;
  setNomorhp(value: string): ReqUpdateProfil;

  getAlamat(): string;
  setAlamat(value: string): ReqUpdateProfil;

  getJeniskelamin(): JenisKelamin;
  setJeniskelamin(value: JenisKelamin): ReqUpdateProfil;

  getTanggallahir(): string;
  setTanggallahir(value: string): ReqUpdateProfil;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReqUpdateProfil.AsObject;
  static toObject(includeInstance: boolean, msg: ReqUpdateProfil): ReqUpdateProfil.AsObject;
  static serializeBinaryToWriter(message: ReqUpdateProfil, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReqUpdateProfil;
  static deserializeBinaryFromReader(message: ReqUpdateProfil, reader: jspb.BinaryReader): ReqUpdateProfil;
}

export namespace ReqUpdateProfil {
  export type AsObject = {
    ktp: string,
    nama: string,
    nomorhp: string,
    alamat: string,
    jeniskelamin: JenisKelamin,
    tanggallahir: string,
  }
}

export class ReqUpdateAkun extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): ReqUpdateAkun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReqUpdateAkun.AsObject;
  static toObject(includeInstance: boolean, msg: ReqUpdateAkun): ReqUpdateAkun.AsObject;
  static serializeBinaryToWriter(message: ReqUpdateAkun, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReqUpdateAkun;
  static deserializeBinaryFromReader(message: ReqUpdateAkun, reader: jspb.BinaryReader): ReqUpdateAkun;
}

export namespace ReqUpdateAkun {
  export type AsObject = {
    email: string,
  }
}

export enum JenisKelamin { 
  LAKI_LAKI = 0,
  PEREMPUAN = 1,
}

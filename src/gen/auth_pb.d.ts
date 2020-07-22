import * as jspb from "google-protobuf"

import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

export class ReqSubscribe extends jspb.Message {
  getFcmtoken(): string;
  setFcmtoken(value: string): ReqSubscribe;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReqSubscribe.AsObject;
  static toObject(includeInstance: boolean, msg: ReqSubscribe): ReqSubscribe.AsObject;
  static serializeBinaryToWriter(message: ReqSubscribe, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReqSubscribe;
  static deserializeBinaryFromReader(message: ReqSubscribe, reader: jspb.BinaryReader): ReqSubscribe;
}

export namespace ReqSubscribe {
  export type AsObject = {
    fcmtoken: string,
  }
}

export class ReqVerifikasiToken extends jspb.Message {
  getRolesList(): Array<number>;
  setRolesList(value: Array<number>): ReqVerifikasiToken;
  clearRolesList(): ReqVerifikasiToken;
  addRoles(value: number, index?: number): ReqVerifikasiToken;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReqVerifikasiToken.AsObject;
  static toObject(includeInstance: boolean, msg: ReqVerifikasiToken): ReqVerifikasiToken.AsObject;
  static serializeBinaryToWriter(message: ReqVerifikasiToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReqVerifikasiToken;
  static deserializeBinaryFromReader(message: ReqVerifikasiToken, reader: jspb.BinaryReader): ReqVerifikasiToken;
}

export namespace ReqVerifikasiToken {
  export type AsObject = {
    rolesList: Array<number>,
  }
}

export class FirebaseProperty extends jspb.Message {
  getIdentitiesMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearIdentitiesMap(): FirebaseProperty;

  getSigninprovider(): string;
  setSigninprovider(value: string): FirebaseProperty;

  getSigninsecondfactor(): string;
  setSigninsecondfactor(value: string): FirebaseProperty;

  getSecondfactoridentifier(): string;
  setSecondfactoridentifier(value: string): FirebaseProperty;

  getTenant(): string;
  setTenant(value: string): FirebaseProperty;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FirebaseProperty.AsObject;
  static toObject(includeInstance: boolean, msg: FirebaseProperty): FirebaseProperty.AsObject;
  static serializeBinaryToWriter(message: FirebaseProperty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FirebaseProperty;
  static deserializeBinaryFromReader(message: FirebaseProperty, reader: jspb.BinaryReader): FirebaseProperty;
}

export namespace FirebaseProperty {
  export type AsObject = {
    identitiesMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    signinprovider: string,
    signinsecondfactor: string,
    secondfactoridentifier: string,
    tenant: string,
  }
}

export class ResVerifikasiToken extends jspb.Message {
  getAud(): string;
  setAud(value: string): ResVerifikasiToken;

  getAuthtime(): number;
  setAuthtime(value: number): ResVerifikasiToken;

  getEmail(): string;
  setEmail(value: string): ResVerifikasiToken;

  getEmailverified(): boolean;
  setEmailverified(value: boolean): ResVerifikasiToken;

  getExp(): number;
  setExp(value: number): ResVerifikasiToken;

  getFirebase(): FirebaseProperty | undefined;
  setFirebase(value?: FirebaseProperty): ResVerifikasiToken;
  hasFirebase(): boolean;
  clearFirebase(): ResVerifikasiToken;

  getIat(): number;
  setIat(value: number): ResVerifikasiToken;

  getIss(): string;
  setIss(value: string): ResVerifikasiToken;

  getPhonenumber(): string;
  setPhonenumber(value: string): ResVerifikasiToken;

  getPicture(): string;
  setPicture(value: string): ResVerifikasiToken;

  getSub(): string;
  setSub(value: string): ResVerifikasiToken;

  getUid(): string;
  setUid(value: string): ResVerifikasiToken;

  getRoles(): UserRoles;
  setRoles(value: UserRoles): ResVerifikasiToken;

  getParent(): string;
  setParent(value: string): ResVerifikasiToken;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResVerifikasiToken.AsObject;
  static toObject(includeInstance: boolean, msg: ResVerifikasiToken): ResVerifikasiToken.AsObject;
  static serializeBinaryToWriter(message: ResVerifikasiToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResVerifikasiToken;
  static deserializeBinaryFromReader(message: ResVerifikasiToken, reader: jspb.BinaryReader): ResVerifikasiToken;
}

export namespace ResVerifikasiToken {
  export type AsObject = {
    aud: string,
    authtime: number,
    email: string,
    emailverified: boolean,
    exp: number,
    firebase?: FirebaseProperty.AsObject,
    iat: number,
    iss: string,
    phonenumber: string,
    picture: string,
    sub: string,
    uid: string,
    roles: UserRoles,
    parent: string,
  }
}

export enum UserRoles { 
  ADMIN = 0,
  POLISI = 1,
  MASYARAKAT = 2,
}

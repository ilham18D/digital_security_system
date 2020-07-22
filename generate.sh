#!/bin/sh

SRC_DIR=./proto
PROTO_NAME='auth.proto polisi.proto'
GEN_DIR=./src/gen
if [ -d "$GEN_DIR" ]; then rm -Rf $GEN_DIR; fi
mkdir $GEN_DIR
protoc -I=$SRC_DIR $PROTO_NAME --js_out=import_style=commonjs,binary:$GEN_DIR --grpc-web_out=import_style=typescript,mode=grpcwebtext:$GEN_DIR
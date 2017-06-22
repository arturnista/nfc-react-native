import React from 'react-native';

const NfcReactNative = React.NativeModules.NfcReactNative;

export const reset = NfcReactNative.reset;
export const readTag = NfcReactNative.readTag;
export const writeTag = NfcReactNative.writeTag;
export const getTagId = NfcReactNative.getTagId;

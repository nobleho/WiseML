// @ts-ignore
import { t } from "typy";
export const num = 100;

export function isObject(v){
  return t(v).isObject && !isDate(v);
};

export function isFunction(v) {
    return t(v).isFunction;
}

export default function isString(v) {
  return t(v).isString;
};

export function isDate(v) {
  return Object.prototype.toString.call(v) === "[object Date]";
}

export function isBoolean(v) {
  return t(v).isBoolean;
}

export function isNumber(v) {
  return t(v).isNumber;
}

export function isArray(v) {
  return t(v).isArray;
}

export function isUndefined(v) {
  return v === undefined;
}

export function determineFormat(fileName){
    if (fileName.endsWith(".json")) {
        return "JSON";
    }
    else if (fileName.endsWith(".csv")) {
        return "CSV";
    }
    else if (fileName.endsWith(".tsv")) {
        return "TSV";
    }
    else if (fileName.endsWith(".yaml")) {
        return "YAML";
    }
    else if (fileName.endsWith(".yml")) {
        return "YAML";
    }
    else {
        throw new Error(`Failed to ext file name: "${fileName}"`);
    }
}
// Generated by CoffeeScript 1.9.2
var v, ƒ, √;

ƒ = require('flamda');

v = require('validator');

√ = {};

√.isbool = v.isBoolean;

√.isfloat = v.isFloat;

√.ishex = v.isHexadecimal;

√.isint = v.isInt;

√.isiso8601 = v.isISO8601;

√.isalpha = ƒ.curry(function(locale, str) {
  return v.isAlpha(str, locale);
});

√.isalphanumeric = ƒ.curry(function(locale, str) {
  return v.isAlphanumeric(str, locale);
});

√.isnumeric = v.isNumeric;

√.islowercase = v.isLowercase;

√.isuppercase = v.isUppercase;

√.isjson = v.isJSON;

√.isascii = v.isAscii;

√.isbase64 = v.isBase64;

√.containsfullwidth = v.isFullWidth;

√.containshalfwidth = v.isHalfWidth;

√.containsmultibyte = v.isMultibyte;

√.containsvariablewidth = v.isVariableWidth;

√.isbytelength = ƒ.curry(function(min, max, str) {
  return v.isByteLength(str, {
    min: min,
    max: max
  });
});

√.iscreditcard = v.isCreditCard;

√.isfqdn = v.isFQDN;

√.ishexcolor = v.isHexColor;

√.isuuid = v.isUUID;

√.isip = v.isIP;

√.ismac = v.isMACAddress;

√.isisbn = v.isISBN;

√.isisin = v.isISIN;

√.ismobilephone = ƒ.curry(function(locale, str) {
  return v.isMobilePhone(str, locale);
});

√.isdollar = v.isCurrency;

√.isemail = v.isEmail;

√.isurl = v.isURL;

√.exists = function(str) {
  return !v.isNull(str);
};

√.haslength = ƒ.curry(function(min, max, str) {
  return v.isLength(str, {
    min: min,
    max: max
  });
});

√.isdivisibleby = ƒ.curry(function(number, str) {
  return v.isDivisibleBy(str, number);
});

√.contains = ƒ.curry(function(seed, str) {
  return v.contains(str, seed);
});

√.equals = ƒ.curry(v.equals);

√["in"] = ƒ.curry(function(values, str) {
  return v.isIn(str, values);
});

√.onlychars = ƒ.curry(function(chars, str) {
  return v.isWhitelisted(str, chars);
});

module.exports = √;

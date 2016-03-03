// Generated by CoffeeScript 1.9.2
var v, ƒ, ψ;

ƒ = require('flamda');

v = require('validator');

ψ = {};

ψ.isbool = v.isBoolean;

ψ.isfloat = v.isFloat;

ψ.ishex = v.isHexadecimal;

ψ.isint = v.isInt;

ψ.isiso8601 = v.isISO8601;

ψ.isalpha = ƒ(function(locale, str) {
  return v.isAlpha(str, locale);
});

ψ.isalphanumeric = ƒ(function(locale, str) {
  return v.isAlphanumeric(str, locale);
});

ψ.isnumeric = v.isNumeric;

ψ.islowercase = v.isLowercase;

ψ.isuppercase = v.isUppercase;

ψ.isjson = v.isJSON;

ψ.isascii = v.isAscii;

ψ.isbase64 = v.isBase64;

ψ.containsfullwidth = v.isFullWidth;

ψ.containshalfwidth = v.isHalfWidth;

ψ.containsmultibyte = v.isMultibyte;

ψ.containsvariablewidth = v.isVariableWidth;

ψ.isbytelength = ƒ(function(min, max, str) {
  return v.isByteLength(str, {
    min: min,
    max: max
  });
});

ψ.iscreditcard = v.isCreditCard;

ψ.isfqdn = v.isFQDN;

ψ.ishexcolor = v.isHexColor;

ψ.isuuid = v.isUUID;

ψ.isip = v.isIP;

ψ.ismac = v.isMACAddress;

ψ.isisbn = v.isISBN;

ψ.isisin = v.isISIN;

ψ.ismobilephone = ƒ(function(locale, str) {
  return v.isMobilePhone(str, locale);
});

ψ.isdollar = v.isCurrency;

ψ.isemail = v.isEmail;

ψ.isurl = v.isURL;

ψ.exists = function(str) {
  return !v.isNull(str);
};

ψ.haslength = ƒ(function(min, max, str) {
  return v.isLength(str, {
    min: min,
    max: max
  });
});

ψ.isdivisibleby = ƒ(function(number, str) {
  return v.isDivisibleBy(str, number);
});

ψ.contains = ƒ(function(seed, str) {
  return v.contains(str, seed);
});

ψ.equals = ƒ(v.equals);

ψ["in"] = ƒ(function(values, str) {
  return v.isIn(str, values);
});

ψ.onlychars = ƒ(function(chars, str) {
  return v.isWhitelisted(str, chars);
});

module.exports = ψ;

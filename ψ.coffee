ƒ = require 'flamda'
v = require 'validator'

ψ = {}

ψ.isbool = v.isBoolean
ψ.isfloat = v.isFloat
ψ.ishex = v.isHexadecimal
ψ.isint = v.isInt
ψ.isiso8601 = v.isISO8601

ψ.isalpha = ƒ.curry (locale, str) -> v.isAlpha str, locale
ψ.isalphanumeric = ƒ.curry (locale, str) -> v.isAlphanumeric str, locale
ψ.isnumeric = v.isNumeric
ψ.islowercase = v.isLowercase
ψ.isuppercase = v.isUppercase

ψ.isjson = v.isJSON
ψ.isascii = v.isAscii
ψ.isbase64 = v.isBase64

ψ.containsfullwidth = v.isFullWidth
ψ.containshalfwidth = v.isHalfWidth
ψ.containsmultibyte = v.isMultibyte
ψ.containsvariablewidth = v.isVariableWidth
ψ.isbytelength = ƒ.curry (min, max, str) -> v.isByteLength str, min: min, max: max

ψ.iscreditcard = v.isCreditCard
ψ.isfqdn = v.isFQDN
ψ.ishexcolor = v.isHexColor
ψ.isuuid = v.isUUID
ψ.isip = v.isIP
ψ.ismac = v.isMACAddress
ψ.isisbn = v.isISBN
ψ.isisin = v.isISIN
ψ.ismobilephone = ƒ.curry (locale, str) -> v.isMobilePhone str, locale
ψ.isdollar = v.isCurrency
ψ.isemail = v.isEmail
ψ.isurl = v.isURL

ψ.exists = (str) -> not v.isNull str
ψ.haslength = ƒ.curry (min, max, str) -> v.isLength str, min: min, max: max
ψ.isdivisibleby = ƒ.curry (number, str) -> v.isDivisibleBy str, number
ψ.contains = ƒ.curry (seed, str) -> v.contains str, seed
ψ.equals = ƒ.curry v.equals
ψ.in = ƒ.curry (values, str) -> v.isIn str, values
ψ.onlychars = ƒ.curry (chars, str) -> v.isWhitelisted str, chars


module.exports = ψ

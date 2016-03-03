ƒ = require 'flamda'
v = require 'validator'

√ = {}

√.isbool = v.isBoolean
√.isfloat = v.isFloat
√.ishex = v.isHexadecimal
√.isint = v.isInt
√.isiso8601 = v.isISO8601

√.isalpha = ƒ.curry (locale, str) -> v.isAlpha str, locale
√.isalphanumeric = ƒ.curry (locale, str) -> v.isAlphanumeric str, locale
√.isnumeric = v.isNumeric
√.islowercase = v.isLowercase
√.isuppercase = v.isUppercase

√.isjson = v.isJSON
√.isascii = v.isAscii
√.isbase64 = v.isBase64

√.containsfullwidth = v.isFullWidth
√.containshalfwidth = v.isHalfWidth
√.containsmultibyte = v.isMultibyte
√.containsvariablewidth = v.isVariableWidth
√.isbytelength = ƒ.curry (min, max, str) -> v.isByteLength str, min: min, max: max

√.iscreditcard = v.isCreditCard
√.isfqdn = v.isFQDN
√.ishexcolor = v.isHexColor
√.isuuid = v.isUUID
√.isip = v.isIP
√.ismac = v.isMACAddress
√.isisbn = v.isISBN
√.isisin = v.isISIN
√.ismobilephone = ƒ.curry (locale, str) -> v.isMobilePhone str, locale
√.isdollar = v.isCurrency
√.isemail = v.isEmail
√.isurl = v.isURL

√.exists = (str) -> not v.isNull str
√.haslength = ƒ.curry (min, max, str) -> v.isLength str, min: min, max: max
√.isdivisibleby = ƒ.curry (number, str) -> v.isDivisibleBy str, number
√.contains = ƒ.curry (seed, str) -> v.contains str, seed
√.equals = ƒ.curry v.equals
√.in = ƒ.curry (values, str) -> v.isIn str, values
√.onlychars = ƒ.curry (chars, str) -> v.isWhitelisted str, chars


module.exports = √

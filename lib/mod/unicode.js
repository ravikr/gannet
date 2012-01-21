
exports.decompose = function ( str ) {
  return str.replace(/[\u00A0-\uFFFF]/g, function (m) {
    return character_decompose_data[m] || '';
  });
};

character_decompose_data = {
  '\u00a0': ' ',
  '\u00a8': ' ',
  '\u00aa': 'a',
  '\u00af': ' ',
  '\u00b2': '2',
  '\u00b3': '3',
  '\u00b4': ' ',
  '\u00b8': ' ',
  '\u00b9': '1',
  '\u00ba': 'o',
  '\u00bc': '14',
  '\u00bd': '12',
  '\u00be': '34',
  '\u00c0': 'A',
  '\u00c1': 'A',
  '\u00c2': 'A',
  '\u00c3': 'A',
  '\u00c4': 'A',
  '\u00c5': 'A',
  '\u00c6': 'AE',
  '\u00c7': 'C',
  '\u00c8': 'E',
  '\u00c9': 'E',
  '\u00ca': 'E',
  '\u00cb': 'E',
  '\u00cc': 'I',
  '\u00cd': 'I',
  '\u00ce': 'I',
  '\u00cf': 'I',
  '\u00d0': 'D',
  '\u00d1': 'N',
  '\u00d2': 'O',
  '\u00d3': 'O',
  '\u00d4': 'O',
  '\u00d5': 'O',
  '\u00d6': 'O',
  '\u00d9': 'U',
  '\u00da': 'U',
  '\u00db': 'U',
  '\u00dc': 'U',
  '\u00dd': 'Y',
  '\u00de': 'TH',
  '\u00e0': 'a',
  '\u00e1': 'a',
  '\u00e2': 'a',
  '\u00e3': 'a',
  '\u00e4': 'a',
  '\u00e5': 'a',
  '\u00e6': 'ae',
  '\u00e7': 'c',
  '\u00e8': 'e',
  '\u00e9': 'e',
  '\u00ea': 'e',
  '\u00eb': 'e',
  '\u00ec': 'i',
  '\u00ed': 'i',
  '\u00ee': 'i',
  '\u00ef': 'i',
  '\u00f0': 'd',
  '\u00f1': 'n',
  '\u00f2': 'o',
  '\u00f3': 'o',
  '\u00f4': 'o',
  '\u00f5': 'o',
  '\u00f6': 'o',
  '\u00f9': 'u',
  '\u00fa': 'u',
  '\u00fb': 'u',
  '\u00fc': 'u',
  '\u00fd': 'y',
  '\u00fe': 'th',
  '\u00ff': 'y',
  '\u0100': 'A',
  '\u0101': 'a',
  '\u0102': 'A',
  '\u0103': 'a',
  '\u0104': 'A',
  '\u0105': 'a',
  '\u0106': 'C',
  '\u0107': 'c',
  '\u0108': 'C',
  '\u0109': 'c',
  '\u010a': 'C',
  '\u010b': 'c',
  '\u010c': 'C',
  '\u010d': 'c',
  '\u010e': 'D',
  '\u010f': 'd',
  '\u0112': 'E',
  '\u0113': 'e',
  '\u0114': 'E',
  '\u0115': 'e',
  '\u0116': 'E',
  '\u0117': 'e',
  '\u0118': 'E',
  '\u0119': 'e',
  '\u011a': 'E',
  '\u011b': 'e',
  '\u011c': 'G',
  '\u011d': 'g',
  '\u011e': 'G',
  '\u011f': 'g',
  '\u0120': 'G',
  '\u0121': 'g',
  '\u0122': 'G',
  '\u0123': 'g',
  '\u0124': 'H',
  '\u0125': 'h',
  '\u0128': 'I',
  '\u0129': 'i',
  '\u012a': 'I',
  '\u012b': 'i',
  '\u012c': 'I',
  '\u012d': 'i',
  '\u012e': 'I',
  '\u012f': 'i',
  '\u0130': 'I',
  '\u0132': 'IJ',
  '\u0133': 'ij',
  '\u0134': 'J',
  '\u0135': 'j',
  '\u0136': 'K',
  '\u0137': 'k',
  '\u0139': 'L',
  '\u013a': 'l',
  '\u013b': 'L',
  '\u013c': 'l',
  '\u013d': 'L',
  '\u013e': 'l',
  '\u013f': 'L',
  '\u0140': 'l',
  '\u0143': 'N',
  '\u0144': 'n',
  '\u0145': 'N',
  '\u0146': 'n',
  '\u0147': 'N',
  '\u0148': 'n',
  '\u0149': 'n',
  '\u014c': 'O',
  '\u014d': 'o',
  '\u014e': 'O',
  '\u014f': 'o',
  '\u0150': 'O',
  '\u0151': 'o',
  '\u0154': 'R',
  '\u0155': 'r',
  '\u0156': 'R',
  '\u0157': 'r',
  '\u0158': 'R',
  '\u0159': 'r',
  '\u015a': 'S',
  '\u015b': 's',
  '\u015c': 'S',
  '\u015d': 's',
  '\u015e': 'S',
  '\u015f': 's',
  '\u0160': 'S',
  '\u0161': 's',
  '\u0162': 'T',
  '\u0163': 't',
  '\u0164': 'T',
  '\u0165': 't',
  '\u0168': 'U',
  '\u0169': 'u',
  '\u016a': 'U',
  '\u016b': 'u',
  '\u016c': 'U',
  '\u016d': 'u',
  '\u016e': 'U',
  '\u016f': 'u',
  '\u0170': 'U',
  '\u0171': 'u',
  '\u0172': 'U',
  '\u0173': 'u',
  '\u0174': 'W',
  '\u0175': 'w',
  '\u0176': 'Y',
  '\u0177': 'y',
  '\u0178': 'Y',
  '\u0179': 'Z',
  '\u017a': 'z',
  '\u017b': 'Z',
  '\u017c': 'z',
  '\u017d': 'Z',
  '\u017e': 'z',
  '\u017f': 's',
  '\u01a0': 'O',
  '\u01a1': 'o',
  '\u01af': 'U',
  '\u01b0': 'u',
  '\u01c4': 'DZ',
  '\u01c5': 'Dz',
  '\u01c6': 'dz',
  '\u01c7': 'LJ',
  '\u01c8': 'Lj',
  '\u01c9': 'lj',
  '\u01ca': 'NJ',
  '\u01cb': 'Nj',
  '\u01cc': 'nj',
  '\u01cd': 'A',
  '\u01ce': 'a',
  '\u01cf': 'I',
  '\u01d0': 'i',
  '\u01d1': 'O',
  '\u01d2': 'o',
  '\u01d3': 'U',
  '\u01d4': 'u',
  '\u01d5': 'U',
  '\u01d6': 'u',
  '\u01d7': 'U',
  '\u01d8': 'u',
  '\u01d9': 'U',
  '\u01da': 'u',
  '\u01db': 'U',
  '\u01dc': 'u',
  '\u01de': 'A',
  '\u01df': 'a',
  '\u01e0': 'A',
  '\u01e1': 'a',
  '\u01e6': 'G',
  '\u01e7': 'g',
  '\u01e8': 'K',
  '\u01e9': 'k',
  '\u01ea': 'O',
  '\u01eb': 'o',
  '\u01ec': 'O',
  '\u01ed': 'o',
  '\u01f0': 'j',
  '\u01f1': 'DZ',
  '\u01f2': 'Dz',
  '\u01f3': 'dz',
  '\u01f4': 'G',
  '\u01f5': 'g',
  '\u01f8': 'N',
  '\u01f9': 'n',
  '\u01fa': 'A',
  '\u01fb': 'a',
  '\u0200': 'A',
  '\u0201': 'a',
  '\u0202': 'A',
  '\u0203': 'a',
  '\u0204': 'E',
  '\u0205': 'e',
  '\u0206': 'E',
  '\u0207': 'e',
  '\u0208': 'I',
  '\u0209': 'i',
  '\u020a': 'I',
  '\u020b': 'i',
  '\u020c': 'O',
  '\u020d': 'o',
  '\u020e': 'O',
  '\u020f': 'o',
  '\u0210': 'R',
  '\u0211': 'r',
  '\u0212': 'R',
  '\u0213': 'r',
  '\u0214': 'U',
  '\u0215': 'u',
  '\u0216': 'U',
  '\u0217': 'u',
  '\u0218': 'S',
  '\u0219': 's',
  '\u021a': 'T',
  '\u021b': 't',
  '\u021e': 'H',
  '\u021f': 'h',
  '\u0226': 'A',
  '\u0227': 'a',
  '\u0228': 'E',
  '\u0229': 'e',
  '\u022a': 'O',
  '\u022b': 'o',
  '\u022c': 'O',
  '\u022d': 'o',
  '\u022e': 'O',
  '\u022f': 'o',
  '\u0230': 'O',
  '\u0231': 'o',
  '\u0232': 'Y',
  '\u0233': 'y',
  '\u02b0': 'h',
  '\u02b2': 'j',
  '\u02b3': 'r',
  '\u02b7': 'w',
  '\u02b8': 'y',
  '\u02d8': ' ',
  '\u02d9': ' ',
  '\u02da': ' ',
  '\u02db': ' ',
  '\u02dc': ' ',
  '\u02dd': ' ',
  '\u02e1': 'l',
  '\u02e2': 's',
  '\u02e3': 'x',
  '\u037a': ' ',
  '\u037e': ';',
  '\u0384': ' ',
  '\u0385': ' ',
  '\u1d2c': 'A',
  '\u1d2e': 'B',
  '\u1d30': 'D',
  '\u1d31': 'E',
  '\u1d33': 'G',
  '\u1d34': 'H',
  '\u1d35': 'I',
  '\u1d36': 'J',
  '\u1d37': 'K',
  '\u1d38': 'L',
  '\u1d39': 'M',
  '\u1d3a': 'N',
  '\u1d3c': 'O',
  '\u1d3e': 'P',
  '\u1d3f': 'R',
  '\u1d40': 'T',
  '\u1d41': 'U',
  '\u1d42': 'W',
  '\u1d43': 'a',
  '\u1d47': 'b',
  '\u1d48': 'd',
  '\u1d49': 'e',
  '\u1d4d': 'g',
  '\u1d4f': 'k',
  '\u1d50': 'm',
  '\u1d52': 'o',
  '\u1d56': 'p',
  '\u1d57': 't',
  '\u1d58': 'u',
  '\u1d5b': 'v',
  '\u1d62': 'i',
  '\u1d63': 'r',
  '\u1d64': 'u',
  '\u1d65': 'v',
  '\u1d9c': 'c',
  '\u1da0': 'f',
  '\u1dbb': 'z',
  '\u1e00': 'A',
  '\u1e01': 'a',
  '\u1e02': 'B',
  '\u1e03': 'b',
  '\u1e04': 'B',
  '\u1e05': 'b',
  '\u1e06': 'B',
  '\u1e07': 'b',
  '\u1e08': 'C',
  '\u1e09': 'c',
  '\u1e0a': 'D',
  '\u1e0b': 'd',
  '\u1e0c': 'D',
  '\u1e0d': 'd',
  '\u1e0e': 'D',
  '\u1e0f': 'd',
  '\u1e10': 'D',
  '\u1e11': 'd',
  '\u1e12': 'D',
  '\u1e13': 'd',
  '\u1e14': 'E',
  '\u1e15': 'e',
  '\u1e16': 'E',
  '\u1e17': 'e',
  '\u1e18': 'E',
  '\u1e19': 'e',
  '\u1e1a': 'E',
  '\u1e1b': 'e',
  '\u1e1c': 'E',
  '\u1e1d': 'e',
  '\u1e1e': 'F',
  '\u1e1f': 'f',
  '\u1e20': 'G',
  '\u1e21': 'g',
  '\u1e22': 'H',
  '\u1e23': 'h',
  '\u1e24': 'H',
  '\u1e25': 'h',
  '\u1e26': 'H',
  '\u1e27': 'h',
  '\u1e28': 'H',
  '\u1e29': 'h',
  '\u1e2a': 'H',
  '\u1e2b': 'h',
  '\u1e2c': 'I',
  '\u1e2d': 'i',
  '\u1e2e': 'I',
  '\u1e2f': 'i',
  '\u1e30': 'K',
  '\u1e31': 'k',
  '\u1e32': 'K',
  '\u1e33': 'k',
  '\u1e34': 'K',
  '\u1e35': 'k',
  '\u1e36': 'L',
  '\u1e37': 'l',
  '\u1e38': 'L',
  '\u1e39': 'l',
  '\u1e3a': 'L',
  '\u1e3b': 'l',
  '\u1e3c': 'L',
  '\u1e3d': 'l',
  '\u1e3e': 'M',
  '\u1e3f': 'm',
  '\u1e40': 'M',
  '\u1e41': 'm',
  '\u1e42': 'M',
  '\u1e43': 'm',
  '\u1e44': 'N',
  '\u1e45': 'n',
  '\u1e46': 'N',
  '\u1e47': 'n',
  '\u1e48': 'N',
  '\u1e49': 'n',
  '\u1e4a': 'N',
  '\u1e4b': 'n',
  '\u1e4c': 'O',
  '\u1e4d': 'o',
  '\u1e4e': 'O',
  '\u1e4f': 'o',
  '\u1e50': 'O',
  '\u1e51': 'o',
  '\u1e52': 'O',
  '\u1e53': 'o',
  '\u1e54': 'P',
  '\u1e55': 'p',
  '\u1e56': 'P',
  '\u1e57': 'p',
  '\u1e58': 'R',
  '\u1e59': 'r',
  '\u1e5a': 'R',
  '\u1e5b': 'r',
  '\u1e5c': 'R',
  '\u1e5d': 'r',
  '\u1e5e': 'R',
  '\u1e5f': 'r',
  '\u1e60': 'S',
  '\u1e61': 's',
  '\u1e62': 'S',
  '\u1e63': 's',
  '\u1e64': 'S',
  '\u1e65': 's',
  '\u1e66': 'S',
  '\u1e67': 's',
  '\u1e68': 'S',
  '\u1e69': 's',
  '\u1e6a': 'T',
  '\u1e6b': 't',
  '\u1e6c': 'T',
  '\u1e6d': 't',
  '\u1e6e': 'T',
  '\u1e6f': 't',
  '\u1e70': 'T',
  '\u1e71': 't',
  '\u1e72': 'U',
  '\u1e73': 'u',
  '\u1e74': 'U',
  '\u1e75': 'u',
  '\u1e76': 'U',
  '\u1e77': 'u',
  '\u1e78': 'U',
  '\u1e79': 'u',
  '\u1e7a': 'U',
  '\u1e7b': 'u',
  '\u1e7c': 'V',
  '\u1e7d': 'v',
  '\u1e7e': 'V',
  '\u1e7f': 'v',
  '\u1e80': 'W',
  '\u1e81': 'w',
  '\u1e82': 'W',
  '\u1e83': 'w',
  '\u1e84': 'W',
  '\u1e85': 'w',
  '\u1e86': 'W',
  '\u1e87': 'w',
  '\u1e88': 'W',
  '\u1e89': 'w',
  '\u1e8a': 'X',
  '\u1e8b': 'x',
  '\u1e8c': 'X',
  '\u1e8d': 'x',
  '\u1e8e': 'Y',
  '\u1e8f': 'y',
  '\u1e90': 'Z',
  '\u1e91': 'z',
  '\u1e92': 'Z',
  '\u1e93': 'z',
  '\u1e94': 'Z',
  '\u1e95': 'z',
  '\u1e96': 'h',
  '\u1e97': 't',
  '\u1e98': 'w',
  '\u1e99': 'y',
  '\u1e9a': 'a',
  '\u1e9b': 's',
  '\u1ea0': 'A',
  '\u1ea1': 'a',
  '\u1ea2': 'A',
  '\u1ea3': 'a',
  '\u1ea4': 'A',
  '\u1ea5': 'a',
  '\u1ea6': 'A',
  '\u1ea7': 'a',
  '\u1ea8': 'A',
  '\u1ea9': 'a',
  '\u1eaa': 'A',
  '\u1eab': 'a',
  '\u1eac': 'A',
  '\u1ead': 'a',
  '\u1eae': 'A',
  '\u1eaf': 'a',
  '\u1eb0': 'A',
  '\u1eb1': 'a',
  '\u1eb2': 'A',
  '\u1eb3': 'a',
  '\u1eb4': 'A',
  '\u1eb5': 'a',
  '\u1eb6': 'A',
  '\u1eb7': 'a',
  '\u1eb8': 'E',
  '\u1eb9': 'e',
  '\u1eba': 'E',
  '\u1ebb': 'e',
  '\u1ebc': 'E',
  '\u1ebd': 'e',
  '\u1ebe': 'E',
  '\u1ebf': 'e',
  '\u1ec0': 'E',
  '\u1ec1': 'e',
  '\u1ec2': 'E',
  '\u1ec3': 'e',
  '\u1ec4': 'E',
  '\u1ec5': 'e',
  '\u1ec6': 'E',
  '\u1ec7': 'e',
  '\u1ec8': 'I',
  '\u1ec9': 'i',
  '\u1eca': 'I',
  '\u1ecb': 'i',
  '\u1ecc': 'O',
  '\u1ecd': 'o',
  '\u1ece': 'O',
  '\u1ecf': 'o',
  '\u1ed0': 'O',
  '\u1ed1': 'o',
  '\u1ed2': 'O',
  '\u1ed3': 'o',
  '\u1ed4': 'O',
  '\u1ed5': 'o',
  '\u1ed6': 'O',
  '\u1ed7': 'o',
  '\u1ed8': 'O',
  '\u1ed9': 'o',
  '\u1eda': 'O',
  '\u1edb': 'o',
  '\u1edc': 'O',
  '\u1edd': 'o',
  '\u1ede': 'O',
  '\u1edf': 'o',
  '\u1ee0': 'O',
  '\u1ee1': 'o',
  '\u1ee2': 'O',
  '\u1ee3': 'o',
  '\u1ee4': 'U',
  '\u1ee5': 'u',
  '\u1ee6': 'U',
  '\u1ee7': 'u',
  '\u1ee8': 'U',
  '\u1ee9': 'u',
  '\u1eea': 'U',
  '\u1eeb': 'u',
  '\u1eec': 'U',
  '\u1eed': 'u',
  '\u1eee': 'U',
  '\u1eef': 'u',
  '\u1ef0': 'U',
  '\u1ef1': 'u',
  '\u1ef2': 'Y',
  '\u1ef3': 'y',
  '\u1ef4': 'Y',
  '\u1ef5': 'y',
  '\u1ef6': 'Y',
  '\u1ef7': 'y',
  '\u1ef8': 'Y',
  '\u1ef9': 'y',
  '\u1fbd': ' ',
  '\u1fbf': ' ',
  '\u1fc0': ' ',
  '\u1fc1': ' ',
  '\u1fcd': ' ',
  '\u1fce': ' ',
  '\u1fcf': ' ',
  '\u1fdd': ' ',
  '\u1fde': ' ',
  '\u1fdf': ' ',
  '\u1fed': ' ',
  '\u1fee': ' ',
  '\u1fef': '`',
  '\u1ffd': ' ',
  '\u1ffe': ' ',
  '\u2000': ' ',
  '\u2001': ' ',
  '\u2002': ' ',
  '\u2003': ' ',
  '\u2004': ' ',
  '\u2005': ' ',
  '\u2006': ' ',
  '\u2007': ' ',
  '\u2008': ' ',
  '\u2009': ' ',
  '\u200a': ' ',
  '\u2017': ' ',
  '\u2024': '.',
  '\u2025': '..',
  '\u2026': '...',
  '\u202f': ' ',
  '\u203c': '!!',
  '\u203e': ' ',
  '\u2047': '??',
  '\u2048': '?!',
  '\u2049': '!?',
  '\u205f': ' ',
  '\u2070': '0',
  '\u2071': 'i',
  '\u2074': '4',
  '\u2075': '5',
  '\u2076': '6',
  '\u2077': '7',
  '\u2078': '8',
  '\u2079': '9',
  '\u207a': '+',
  '\u207c': '=',
  '\u207d': '(',
  '\u207e': ')',
  '\u207f': 'n',
  '\u2080': '0',
  '\u2081': '1',
  '\u2082': '2',
  '\u2083': '3',
  '\u2084': '4',
  '\u2085': '5',
  '\u2086': '6',
  '\u2087': '7',
  '\u2088': '8',
  '\u2089': '9',
  '\u208a': '+',
  '\u208c': '=',
  '\u208d': '(',
  '\u208e': ')',
  '\u2090': 'a',
  '\u2091': 'e',
  '\u2092': 'o',
  '\u2093': 'x',
  '\u20a8': 'Rs',
  '\u2100': 'a/c',
  '\u2101': 'a/s',
  '\u2102': 'C',
  '\u2103': 'C',
  '\u2105': 'c/o',
  '\u2106': 'c/u',
  '\u2109': 'F',
  '\u210a': 'g',
  '\u210b': 'H',
  '\u210c': 'H',
  '\u210d': 'H',
  '\u210e': 'h',
  '\u2110': 'I',
  '\u2111': 'I',
  '\u2112': 'L',
  '\u2113': 'l',
  '\u2115': 'N',
  '\u2116': 'No',
  '\u2119': 'P',
  '\u211a': 'Q',
  '\u211b': 'R',
  '\u211c': 'R',
  '\u211d': 'R',
  '\u2120': 'SM',
  '\u2121': 'TEL',
  '\u2122': 'TM',
  '\u2124': 'Z',
  '\u2128': 'Z',
  '\u212a': 'K',
  '\u212b': 'A',
  '\u212c': 'B',
  '\u212d': 'C',
  '\u212f': 'e',
  '\u2130': 'E',
  '\u2131': 'F',
  '\u2133': 'M',
  '\u2134': 'o',
  '\u2139': 'i',
  '\u213b': 'FAX',
  '\u2145': 'D',
  '\u2146': 'd',
  '\u2147': 'e',
  '\u2148': 'i',
  '\u2149': 'j',
  '\u2153': '13',
  '\u2154': '23',
  '\u2155': '15',
  '\u2156': '25',
  '\u2157': '35',
  '\u2158': '45',
  '\u2159': '16',
  '\u215a': '56',
  '\u215b': '18',
  '\u215c': '38',
  '\u215d': '58',
  '\u215e': '78',
  '\u215f': '1',
  '\u2160': 'I',
  '\u2161': 'II',
  '\u2162': 'III',
  '\u2163': 'IV',
  '\u2164': 'V',
  '\u2165': 'VI',
  '\u2166': 'VII',
  '\u2167': 'VIII',
  '\u2168': 'IX',
  '\u2169': 'X',
  '\u216a': 'XI',
  '\u216b': 'XII',
  '\u216c': 'L',
  '\u216d': 'C',
  '\u216e': 'D',
  '\u216f': 'M',
  '\u2170': 'i',
  '\u2171': 'ii',
  '\u2172': 'iii',
  '\u2173': 'iv',
  '\u2174': 'v',
  '\u2175': 'vi',
  '\u2176': 'vii',
  '\u2177': 'viii',
  '\u2178': 'ix',
  '\u2179': 'x',
  '\u217a': 'xi',
  '\u217b': 'xii',
  '\u217c': 'l',
  '\u217d': 'c',
  '\u217e': 'd',
  '\u217f': 'm',
  '\u2260': '=',
  '\u226e': '<',
  '\u226f': '>',
  '\u2460': '1',
  '\u2461': '2',
  '\u2462': '3',
  '\u2463': '4',
  '\u2464': '5',
  '\u2465': '6',
  '\u2466': '7',
  '\u2467': '8',
  '\u2468': '9',
  '\u2469': '10',
  '\u246a': '11',
  '\u246b': '12',
  '\u246c': '13',
  '\u246d': '14',
  '\u246e': '15',
  '\u246f': '16',
  '\u2470': '17',
  '\u2471': '18',
  '\u2472': '19',
  '\u2473': '20',
  '\u2474': '(1)',
  '\u2475': '(2)',
  '\u2476': '(3)',
  '\u2477': '(4)',
  '\u2478': '(5)',
  '\u2479': '(6)',
  '\u247a': '(7)',
  '\u247b': '(8)',
  '\u247c': '(9)',
  '\u247d': '(10)',
  '\u247e': '(11)',
  '\u247f': '(12)',
  '\u2480': '(13)',
  '\u2481': '(14)',
  '\u2482': '(15)',
  '\u2483': '(16)',
  '\u2484': '(17)',
  '\u2485': '(18)',
  '\u2486': '(19)',
  '\u2487': '(20)',
  '\u2488': '1.',
  '\u2489': '2.',
  '\u248a': '3.',
  '\u248b': '4.',
  '\u248c': '5.',
  '\u248d': '6.',
  '\u248e': '7.',
  '\u248f': '8.',
  '\u2490': '9.',
  '\u2491': '10.',
  '\u2492': '11.',
  '\u2493': '12.',
  '\u2494': '13.',
  '\u2495': '14.',
  '\u2496': '15.',
  '\u2497': '16.',
  '\u2498': '17.',
  '\u2499': '18.',
  '\u249a': '19.',
  '\u249b': '20.',
  '\u249c': '(a)',
  '\u249d': '(b)',
  '\u249e': '(c)',
  '\u249f': '(d)',
  '\u24a0': '(e)',
  '\u24a1': '(f)',
  '\u24a2': '(g)',
  '\u24a3': '(h)',
  '\u24a4': '(i)',
  '\u24a5': '(j)',
  '\u24a6': '(k)',
  '\u24a7': '(l)',
  '\u24a8': '(m)',
  '\u24a9': '(n)',
  '\u24aa': '(o)',
  '\u24ab': '(p)',
  '\u24ac': '(q)',
  '\u24ad': '(r)',
  '\u24ae': '(s)',
  '\u24af': '(t)',
  '\u24b0': '(u)',
  '\u24b1': '(v)',
  '\u24b2': '(w)',
  '\u24b3': '(x)',
  '\u24b4': '(y)',
  '\u24b5': '(z)',
  '\u24b6': 'A',
  '\u24b7': 'B',
  '\u24b8': 'C',
  '\u24b9': 'D',
  '\u24ba': 'E',
  '\u24bb': 'F',
  '\u24bc': 'G',
  '\u24bd': 'H',
  '\u24be': 'I',
  '\u24bf': 'J',
  '\u24c0': 'K',
  '\u24c1': 'L',
  '\u24c2': 'M',
  '\u24c3': 'N',
  '\u24c4': 'O',
  '\u24c5': 'P',
  '\u24c6': 'Q',
  '\u24c7': 'R',
  '\u24c8': 'S',
  '\u24c9': 'T',
  '\u24ca': 'U',
  '\u24cb': 'V',
  '\u24cc': 'W',
  '\u24cd': 'X',
  '\u24ce': 'Y',
  '\u24cf': 'Z',
  '\u24d0': 'a',
  '\u24d1': 'b',
  '\u24d2': 'c',
  '\u24d3': 'd',
  '\u24d4': 'e',
  '\u24d5': 'f',
  '\u24d6': 'g',
  '\u24d7': 'h',
  '\u24d8': 'i',
  '\u24d9': 'j',
  '\u24da': 'k',
  '\u24db': 'l',
  '\u24dc': 'm',
  '\u24dd': 'n',
  '\u24de': 'o',
  '\u24df': 'p',
  '\u24e0': 'q',
  '\u24e1': 'r',
  '\u24e2': 's',
  '\u24e3': 't',
  '\u24e4': 'u',
  '\u24e5': 'v',
  '\u24e6': 'w',
  '\u24e7': 'x',
  '\u24e8': 'y',
  '\u24e9': 'z',
  '\u24ea': '0',
  '\u2a74': '::=',
  '\u2a75': '==',
  '\u2a76': '===',
  '\u2c7c': 'j',
  '\u2c7d': 'V',
  '\u3000': ' ',
  '\u309b': ' ',
  '\u309c': ' ',
  '\u3200': '()',
  '\u3201': '()',
  '\u3202': '()',
  '\u3203': '()',
  '\u3204': '()',
  '\u3205': '()',
  '\u3206': '()',
  '\u3207': '()',
  '\u3208': '()',
  '\u3209': '()',
  '\u320a': '()',
  '\u320b': '()',
  '\u320c': '()',
  '\u320d': '()',
  '\u320e': '()',
  '\u320f': '()',
  '\u3210': '()',
  '\u3211': '()',
  '\u3212': '()',
  '\u3213': '()',
  '\u3214': '()',
  '\u3215': '()',
  '\u3216': '()',
  '\u3217': '()',
  '\u3218': '()',
  '\u3219': '()',
  '\u321a': '()',
  '\u321b': '()',
  '\u321c': '()',
  '\u321d': '()',
  '\u321e': '()',
  '\u3220': '()',
  '\u3221': '()',
  '\u3222': '()',
  '\u3223': '()',
  '\u3224': '()',
  '\u3225': '()',
  '\u3226': '()',
  '\u3227': '()',
  '\u3228': '()',
  '\u3229': '()',
  '\u322a': '()',
  '\u322b': '()',
  '\u322c': '()',
  '\u322d': '()',
  '\u322e': '()',
  '\u322f': '()',
  '\u3230': '()',
  '\u3231': '()',
  '\u3232': '()',
  '\u3233': '()',
  '\u3234': '()',
  '\u3235': '()',
  '\u3236': '()',
  '\u3237': '()',
  '\u3238': '()',
  '\u3239': '()',
  '\u323a': '()',
  '\u323b': '()',
  '\u323c': '()',
  '\u323d': '()',
  '\u323e': '()',
  '\u323f': '()',
  '\u3240': '()',
  '\u3241': '()',
  '\u3242': '()',
  '\u3243': '()',
  '\u3250': 'PTE',
  '\u3251': '21',
  '\u3252': '22',
  '\u3253': '23',
  '\u3254': '24',
  '\u3255': '25',
  '\u3256': '26',
  '\u3257': '27',
  '\u3258': '28',
  '\u3259': '29',
  '\u325a': '30',
  '\u325b': '31',
  '\u325c': '32',
  '\u325d': '33',
  '\u325e': '34',
  '\u325f': '35',
  '\u32b1': '36',
  '\u32b2': '37',
  '\u32b3': '38',
  '\u32b4': '39',
  '\u32b5': '40',
  '\u32b6': '41',
  '\u32b7': '42',
  '\u32b8': '43',
  '\u32b9': '44',
  '\u32ba': '45',
  '\u32bb': '46',
  '\u32bc': '47',
  '\u32bd': '48',
  '\u32be': '49',
  '\u32bf': '50',
  '\u32c0': '1',
  '\u32c1': '2',
  '\u32c2': '3',
  '\u32c3': '4',
  '\u32c4': '5',
  '\u32c5': '6',
  '\u32c6': '7',
  '\u32c7': '8',
  '\u32c8': '9',
  '\u32c9': '10',
  '\u32ca': '11',
  '\u32cb': '12',
  '\u32cc': 'Hg',
  '\u32cd': 'erg',
  '\u32ce': 'eV',
  '\u32cf': 'LTD',
  '\u3358': '0',
  '\u3359': '1',
  '\u335a': '2',
  '\u335b': '3',
  '\u335c': '4',
  '\u335d': '5',
  '\u335e': '6',
  '\u335f': '7',
  '\u3360': '8',
  '\u3361': '9',
  '\u3362': '10',
  '\u3363': '11',
  '\u3364': '12',
  '\u3365': '13',
  '\u3366': '14',
  '\u3367': '15',
  '\u3368': '16',
  '\u3369': '17',
  '\u336a': '18',
  '\u336b': '19',
  '\u336c': '20',
  '\u336d': '21',
  '\u336e': '22',
  '\u336f': '23',
  '\u3370': '24',
  '\u3371': 'hPa',
  '\u3372': 'da',
  '\u3373': 'AU',
  '\u3374': 'bar',
  '\u3375': 'oV',
  '\u3376': 'pc',
  '\u3377': 'dm',
  '\u3378': 'dm2',
  '\u3379': 'dm3',
  '\u337a': 'IU',
  '\u3380': 'pA',
  '\u3381': 'nA',
  '\u3382': 'A',
  '\u3383': 'mA',
  '\u3384': 'kA',
  '\u3385': 'KB',
  '\u3386': 'MB',
  '\u3387': 'GB',
  '\u3388': 'cal',
  '\u3389': 'kcal',
  '\u338a': 'pF',
  '\u338b': 'nF',
  '\u338c': 'F',
  '\u338d': 'g',
  '\u338e': 'mg',
  '\u338f': 'kg',
  '\u3390': 'Hz',
  '\u3391': 'kHz',
  '\u3392': 'MHz',
  '\u3393': 'GHz',
  '\u3394': 'THz',
  '\u3395': 'l',
  '\u3396': 'ml',
  '\u3397': 'dl',
  '\u3398': 'kl',
  '\u3399': 'fm',
  '\u339a': 'nm',
  '\u339b': 'm',
  '\u339c': 'mm',
  '\u339d': 'cm',
  '\u339e': 'km',
  '\u339f': 'mm2',
  '\u33a0': 'cm2',
  '\u33a1': 'm2',
  '\u33a2': 'km2',
  '\u33a3': 'mm3',
  '\u33a4': 'cm3',
  '\u33a5': 'm3',
  '\u33a6': 'km3',
  '\u33a7': 'ms',
  '\u33a8': 'ms2',
  '\u33a9': 'Pa',
  '\u33aa': 'kPa',
  '\u33ab': 'MPa',
  '\u33ac': 'GPa',
  '\u33ad': 'rad',
  '\u33ae': 'rads',
  '\u33af': 'rads2',
  '\u33b0': 'ps',
  '\u33b1': 'ns',
  '\u33b2': 's',
  '\u33b3': 'ms',
  '\u33b4': 'pV',
  '\u33b5': 'nV',
  '\u33b6': 'V',
  '\u33b7': 'mV',
  '\u33b8': 'kV',
  '\u33b9': 'MV',
  '\u33ba': 'pW',
  '\u33bb': 'nW',
  '\u33bc': 'W',
  '\u33bd': 'mW',
  '\u33be': 'kW',
  '\u33bf': 'MW',
  '\u33c0': 'k',
  '\u33c1': 'M',
  '\u33c2': 'a.m.',
  '\u33c3': 'Bq',
  '\u33c4': 'cc',
  '\u33c5': 'cd',
  '\u33c6': 'Ckg',
  '\u33c7': 'Co.',
  '\u33c8': 'dB',
  '\u33c9': 'Gy',
  '\u33ca': 'ha',
  '\u33cb': 'HP',
  '\u33cc': 'in',
  '\u33cd': 'KK',
  '\u33ce': 'KM',
  '\u33cf': 'kt',
  '\u33d0': 'lm',
  '\u33d1': 'ln',
  '\u33d2': 'log',
  '\u33d3': 'lx',
  '\u33d4': 'mb',
  '\u33d5': 'mil',
  '\u33d6': 'mol',
  '\u33d7': 'PH',
  '\u33d8': 'p.m.',
  '\u33d9': 'PPM',
  '\u33da': 'PR',
  '\u33db': 'sr',
  '\u33dc': 'Sv',
  '\u33dd': 'Wb',
  '\u33de': 'Vm',
  '\u33df': 'Am',
  '\u33e0': '1',
  '\u33e1': '2',
  '\u33e2': '3',
  '\u33e3': '4',
  '\u33e4': '5',
  '\u33e5': '6',
  '\u33e6': '7',
  '\u33e7': '8',
  '\u33e8': '9',
  '\u33e9': '10',
  '\u33ea': '11',
  '\u33eb': '12',
  '\u33ec': '13',
  '\u33ed': '14',
  '\u33ee': '15',
  '\u33ef': '16',
  '\u33f0': '17',
  '\u33f1': '18',
  '\u33f2': '19',
  '\u33f3': '20',
  '\u33f4': '21',
  '\u33f5': '22',
  '\u33f6': '23',
  '\u33f7': '24',
  '\u33f8': '25',
  '\u33f9': '26',
  '\u33fa': '27',
  '\u33fb': '28',
  '\u33fc': '29',
  '\u33fd': '30',
  '\u33fe': '31',
  '\u33ff': 'gal',
  '\ufad1': 'mil',
  '\ufb00': 'ff',
  '\ufb01': 'fi',
  '\ufb02': 'fl',
  '\ufb03': 'ffi',
  '\ufb04': 'ffl',
  '\ufb05': 'st',
  '\ufb06': 'st',
  '\ufb29': '+',
  '\ufc5e': ' ',
  '\ufc5f': ' ',
  '\ufc60': ' ',
  '\ufc61': ' ',
  '\ufc62': ' ',
  '\ufc63': ' ',
  '\ufdfa': '   ',
  '\ufdfb': ' ',
  '\ufe10': ',',
  '\ufe13': ':',
  '\ufe14': ';',
  '\ufe15': '!',
  '\ufe16': '?',
  '\ufe19': '...',
  '\ufe30': '..',
  '\ufe33': '_',
  '\ufe34': '_',
  '\ufe35': '(',
  '\ufe36': ')',
  '\ufe37': '{',
  '\ufe38': '}',
  '\ufe47': '[',
  '\ufe48': ']',
  '\ufe49': ' ',
  '\ufe4a': ' ',
  '\ufe4b': ' ',
  '\ufe4c': ' ',
  '\ufe4d': '_',
  '\ufe4e': '_',
  '\ufe4f': '_',
  '\ufe50': ',',
  '\ufe52': '.',
  '\ufe54': ';',
  '\ufe55': ':',
  '\ufe56': '?',
  '\ufe57': '!',
  '\ufe59': '(',
  '\ufe5a': ')',
  '\ufe5b': '{',
  '\ufe5c': '}',
  '\ufe5f': '#',
  '\ufe60': '&',
  '\ufe61': '*',
  '\ufe62': '+',
  '\ufe63': '-',
  '\ufe64': '<',
  '\ufe65': '>',
  '\ufe66': '=',
  '\ufe68': '\\',
  '\ufe69': '$',
  '\ufe6a': '%',
  '\ufe6b': '@',
  '\ufe70': ' ',
  '\ufe72': ' ',
  '\ufe74': ' ',
  '\ufe76': ' ',
  '\ufe78': ' ',
  '\ufe7a': ' ',
  '\ufe7c': ' ',
  '\ufe7e': ' ',
  '\uff01': '!',
  '\uff02': '"',
  '\uff03': '#',
  '\uff04': '$',
  '\uff05': '%',
  '\uff06': '&',
  '\uff07': "'",
  '\uff08': '(',
  '\uff09': ')',
  '\uff0a': '*',
  '\uff0b': '+',
  '\uff0c': ',',
  '\uff0d': '-',
  '\uff0e': '.',
  '\uff0f': '/',
  '\uff10': '0',
  '\uff11': '1',
  '\uff12': '2',
  '\uff13': '3',
  '\uff14': '4',
  '\uff15': '5',
  '\uff16': '6',
  '\uff17': '7',
  '\uff18': '8',
  '\uff19': '9',
  '\uff1a': ':',
  '\uff1b': ';',
  '\uff1c': '<',
  '\uff1d': '=',
  '\uff1e': '>',
  '\uff1f': '?',
  '\uff20': '@',
  '\uff21': 'A',
  '\uff22': 'B',
  '\uff23': 'C',
  '\uff24': 'D',
  '\uff25': 'E',
  '\uff26': 'F',
  '\uff27': 'G',
  '\uff28': 'H',
  '\uff29': 'I',
  '\uff2a': 'J',
  '\uff2b': 'K',
  '\uff2c': 'L',
  '\uff2d': 'M',
  '\uff2e': 'N',
  '\uff2f': 'O',
  '\uff30': 'P',
  '\uff31': 'Q',
  '\uff32': 'R',
  '\uff33': 'S',
  '\uff34': 'T',
  '\uff35': 'U',
  '\uff36': 'V',
  '\uff37': 'W',
  '\uff38': 'X',
  '\uff39': 'Y',
  '\uff3a': 'Z',
  '\uff3b': '[',
  '\uff3c': '\\',
  '\uff3d': ']',
  '\uff3e': '^',
  '\uff3f': '_',
  '\uff40': '`',
  '\uff41': 'a',
  '\uff42': 'b',
  '\uff43': 'c',
  '\uff44': 'd',
  '\uff45': 'e',
  '\uff46': 'f',
  '\uff47': 'g',
  '\uff48': 'h',
  '\uff49': 'i',
  '\uff4a': 'j',
  '\uff4b': 'k',
  '\uff4c': 'l',
  '\uff4d': 'm',
  '\uff4e': 'n',
  '\uff4f': 'o',
  '\uff50': 'p',
  '\uff51': 'q',
  '\uff52': 'r',
  '\uff53': 's',
  '\uff54': 't',
  '\uff55': 'u',
  '\uff56': 'v',
  '\uff57': 'w',
  '\uff58': 'x',
  '\uff59': 'y',
  '\uff5a': 'z',
  '\uff5b': '{',
  '\uff5c': '|',
  '\uff5d': '}',
  '\uff5e': '~',
  '\uffe3': ' ',
};
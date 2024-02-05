export const JOI_MAPPING: {[key: string]: object} = {
  'any': {
    'custom': 'INTERNAL_SERVER_ERROR',
    'default': 'INTERNAL_SERVER_ERROR',
    'failover': 'INTERNAL_SERVER_ERROR',
    'invalid': 'INTERNAL_SERVER_ERROR',
    'only': 'FIELD_ONLY',
    'ref': 'INTERNAL_SERVER_ERROR',
    'required': 'FIELD_REQUIRED',
    'unknown': 'FIELD_UNKNOW'
  },
  'alternatives': {
    'all': 'INTERNAL_SERVER_ERROR',
    'any': 'INTERNAL_SERVER_ERROR',
    'match': 'INTERNAL_SERVER_ERROR',
    'one': 'INTERNAL_SERVER_ERROR',
    'types': 'INTERNAL_SERVER_ERROR'
  },
  'array': {
    'base': 'FIELD_TYPE',
    'excludes': 'INTERNAL_SERVER_ERROR',
    'hasKnown': 'INTERNAL_SERVER_ERROR',
    'hasUnknown': 'INTERNAL_SERVER_ERROR',
    'includes': 'INTERNAL_SERVER_ERROR',
    'includesRequiredBoth': 'INTERNAL_SERVER_ERROR',
    'includesRequiredKnowns': 'INTERNAL_SERVER_ERROR',
    'includesRequiredUnknowns': 'INTERNAL_SERVER_ERROR',
    'length': 'INTERNAL_SERVER_ERROR',
    'max': 'FIELD_TYPE_RANGE',
    'min': 'FIELD_TYPE_RANGE',
    'orderedLength': 'INTERNAL_SERVER_ERROR',
    'sort': 'INTERNAL_SERVER_ERROR',
    'sort.mismatching': 'INTERNAL_SERVER_ERROR',
    'sort.unsupported': 'INTERNAL_SERVER_ERROR',
    'sparse': 'INTERNAL_SERVER_ERROR',
    'unique': 'INTERNAL_SERVER_ERROR'
  },
  'binary': {
    'base': 'FIELD_TYPE',
    'length': 'INTERNAL_SERVER_ERROR',
    'max': 'FIELD_TYPE_RANGE',
    'min': 'FIELD_TYPE_RANGE'
  },
  'boolean': {
    'base': 'FIELD_TYPE'
  },
  'date': {
    'base': 'FIELD_TYPE',
    'format': 'INTERNAL_SERVER_ERROR',
    'greater': 'INTERNAL_SERVER_ERROR',
    'less': 'INTERNAL_SERVER_ERROR',
    'max': 'FIELD_TYPE_RANGE',
    'min': 'FIELD_TYPE_RANGE',
    'format.iso': 'INTERNAL_SERVER_ERROR',
    'format.javascript': 'INTERNAL_SERVER_ERROR',
    'format.unix': 'INTERNAL_SERVER_ERROR'
  },
  'function': {
    'arity': 'INTERNAL_SERVER_ERROR',
    'class': 'INTERNAL_SERVER_ERROR',
    'maxArity': 'INTERNAL_SERVER_ERROR',
    'minArity': 'INTERNAL_SERVER_ERROR'
  },
  'object': {
    'and': 'INTERNAL_SERVER_ERROR',
    'assert': 'INTERNAL_SERVER_ERROR',
    'base': 'FIELD_TYPE',
    'instance': 'INTERNAL_SERVER_ERROR',
    'length': 'INTERNAL_SERVER_ERROR',
    'max': 'FIELD_TYPE_RANGE',
    'min': 'FIELD_TYPE_RANGE',
    'missing': 'INTERNAL_SERVER_ERROR',
    'nand': 'INTERNAL_SERVER_ERROR',
    'oxor': 'INTERNAL_SERVER_ERROR',
    'pattern': {
      'match': 'INTERNAL_SERVER_ERROR'
    },
    'refType': 'INTERNAL_SERVER_ERROR',
    'rename': {
      'multiple': 'INTERNAL_SERVER_ERROR',
      'override': 'INTERNAL_SERVER_ERROR'
    },
    'schema': 'INTERNAL_SERVER_ERROR',
    'unknown': 'FIELD_UNKNOW',
    'with': 'INTERNAL_SERVER_ERROR',
    'without': 'INTERNAL_SERVER_ERROR',
    'xor': 'INTERNAL_SERVER_ERROR'
  },
  'number': {
    'base': 'FIELD_TYPE',
    'greater': 'INTERNAL_SERVER_ERROR',
    'infinity': 'INTERNAL_SERVER_ERROR',
    'integer': 'INTERNAL_SERVER_ERROR',
    'less': 'INTERNAL_SERVER_ERROR',
    'max': 'FIELD_TYPE_RANGE',
    'min': 'FIELD_TYPE_RANGE',
    'multiple': 'INTERNAL_SERVER_ERROR',
    'negative': 'INTERNAL_SERVER_ERROR',
    'port': 'INTERNAL_SERVER_ERROR',
    'positive': 'INTERNAL_SERVER_ERROR',
    'precision': 'INTERNAL_SERVER_ERROR',
    'unsafe': 'INTERNAL_SERVER_ERROR'
  },
  'symbol': {
    'base': 'FIELD_TYPE',
    'map': 'INTERNAL_SERVER_ERROR'
  },
  'string': {
    'alphanum': 'INTERNAL_SERVER_ERROR',
    'base': 'FIELD_TYPE',
    'base64': 'FIELD_TYPE',
    'creditCard': 'INTERNAL_SERVER_ERROR',
    'dataUri': 'INTERNAL_SERVER_ERROR',
    'domain': 'INTERNAL_SERVER_ERROR',
    'email': 'FIELD_TYPE',
    'empty': 'FIELD_REQUIRED',
    'guid': 'INTERNAL_SERVER_ERROR',
    'hex': 'INTERNAL_SERVER_ERROR',
    'hexAlign': 'INTERNAL_SERVER_ERROR',
    'hostname': 'INTERNAL_SERVER_ERROR',
    'ip': 'INTERNAL_SERVER_ERROR',
    'ipVersion': 'INTERNAL_SERVER_ERROR',
    'isoDate': 'INTERNAL_SERVER_ERROR',
    'isoDuration': 'INTERNAL_SERVER_ERROR',
    'length': 'STRING_LENGTH',
    'lowercase': 'INTERNAL_SERVER_ERROR',
    'max': 'FIELD_TYPE_RANGE',
    'min': 'FIELD_TYPE_RANGE',
    'normalize': 'INTERNAL_SERVER_ERROR',
    'token': 'INTERNAL_SERVER_ERROR',
    'pattern': {
      'base': 'FIELD_TYPE',
      'name': 'INTERNAL_SERVER_ERROR',
      'invert': {
        'base': 'FIELD_TYPE',
        'name': 'INTERNAL_SERVER_ERROR'
      }
    },
    'trim': 'INTERNAL_SERVER_ERROR',
    'uri': 'INTERNAL_SERVER_ERROR',
    'uriCustomScheme': 'INTERNAL_SERVER_ERROR',
    'uriRelativeOnly': 'INTERNAL_SERVER_ERROR',
    'uppercase': 'INTERNAL_SERVER_ERROR'
  }
};

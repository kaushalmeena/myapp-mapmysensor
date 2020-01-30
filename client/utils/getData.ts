import get from 'lodash/get';

const getData = (
  data: object,
  path: string,
  value = undefined,
): object | number | string => get(data, path, value) || value;

export default getData;

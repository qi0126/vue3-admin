/**
 * @desc 转换图片
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** pathEnd */
  pathEnd;
  /** url */
  url;
}

export const init = '';

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/proMigra/uploadImg', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}

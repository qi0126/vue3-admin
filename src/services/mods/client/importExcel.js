/**
 * @desc 导入客户excel
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 文件 */
  file;
}

export const init = '';

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/client/import', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}

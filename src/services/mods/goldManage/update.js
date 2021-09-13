/**
 * @desc 更新盘点数据
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** appId */
  appId;
  /** goldStr */
  goldStr;
}

export const init = '';

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/gold_manage/update', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}

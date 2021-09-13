/**
 * @desc 查询当前公司的柜台字印列表
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** signet */
  signet;
  /** signet */
  '字印名称搜索字段';
}

export const init = [];

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/bizSignet/queryListGD', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}

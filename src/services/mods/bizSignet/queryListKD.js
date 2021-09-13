/**
 * @desc 查询当前公司的指定客户的字印列表
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** clientId */
  clientId;
  /** signet */
  signet;
  /** clientId */
  '二级客户的ID';
  /** signet */
  '字印名称搜索字段';
}

export const init = [];

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/bizSignet/queryListKD', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}

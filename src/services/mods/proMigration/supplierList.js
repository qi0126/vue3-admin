/**
 * @desc 供应商(销售商)列表
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 页码 */
  page;
  /** 行数 */
  rows;
  /** 搜索 */
  search;
  /** 类型   供应商:_FACTORY  , 销售商:_SUBSIDIARY */
  type;
}

export const init = new defs.FrontResponse();

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/proMigra/supplierList', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}

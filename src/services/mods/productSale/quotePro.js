/**
 * @desc 批量引用产品数据
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 产品id(生产商产品ID)  多个则用逗号隔开 如:id1,id2 */
  ids;
}

export const init = new defs.FrontResponse();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/proSale/quotePro', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}

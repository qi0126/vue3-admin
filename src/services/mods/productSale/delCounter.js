/**
 * @desc 批量删除柜位
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 柜台id 多个则以逗号隔开  123,456 */
  counterId;
  /** 柜台名称 多个则以逗号隔开  123Name,456Name */
  counterName;
  /** 产品id(生产商产品ID)  多个则用逗号隔开 如:id1,id2 */
  ids;
}

export const init = new defs.FrontResponse();

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/proSale/delCounter', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}

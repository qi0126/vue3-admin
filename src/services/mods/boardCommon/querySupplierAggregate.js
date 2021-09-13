/**
 * @desc 工厂异常总概
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 结束日期,格式要求:'yyyy-MM-dd' */
  endDate;
  /** 起始日期,格式要求:'yyyy-MM-dd' */
  startDate;
}

export const init = new defs.StandardAggregateWrap();

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/board/common/supplierAggregate', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}

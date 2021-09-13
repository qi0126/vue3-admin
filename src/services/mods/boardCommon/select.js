/**
 * @desc 查询前五供应商（销售商）企业
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 企业类型 */
  type;
}

export const init = [];

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/board/common/companyList', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}

/**
 * @desc 查询列表
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.PageDTO();

export function request(params, body, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/repairinproductionSupplier/list', params, 'POST'),
    {
      method: 'POST',

      body,
      ...options,
    },
  );
}

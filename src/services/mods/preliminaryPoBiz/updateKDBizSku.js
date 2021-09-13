/**
 * @desc 新增和编辑,客单sku明细
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = '';

export function request(params, body, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/preliminary/pobiz/updateKDBizSku', params, 'POST'),
    {
      method: 'POST',

      body,
      ...options,
    },
  );
}

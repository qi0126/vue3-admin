/**
 * @desc 新增柜台单字印
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params, body, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/bizSignet/insertSignetGD', params, 'POST'),
    {
      method: 'POST',

      body,
      ...options,
    },
  );
}

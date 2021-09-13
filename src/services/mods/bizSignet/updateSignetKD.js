/**
 * @desc 客单字印编辑
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params, body, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/bizSignet/updateKD', params, 'POST'),
    {
      method: 'POST',

      body,
      ...options,
    },
  );
}

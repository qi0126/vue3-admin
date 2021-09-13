/**
 * @desc 编辑客单
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params, body, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/preliminary/pobiz/editKD', params, 'POST'),
    {
      method: 'POST',

      body,
      ...options,
    },
  );
}

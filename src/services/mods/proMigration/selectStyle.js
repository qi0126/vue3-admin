/**
 * @desc 查询款式描述列表
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 制造code */
  manufacture;
  /** 品类code */
  one;
  /** 名称 */
  search;
  /** 是否需要禁用 非启用状态数据 1:禁用 2:不禁用  (产品列表取值(请选择2)) */
  type;
}

export const init = new defs.FrontResponse();

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/proMigra/selectStyle', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}

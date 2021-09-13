/**
 * @desc 查询code列表
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** code:BRACELET_TYPE (链扣类型) MANUFACTURE_CRAFT (制造工艺) SURFACE_CRAFT (表面工艺)  PATTERN_TYPE )(花型) CONDITI_TYPE(成色) ONE_CODE(品类)  OPEN_TYPE(开口类型) TAB_CODE(标签) */
  code;
  /** 名称 */
  search;
  /** 是否需要禁用 非启用状态数据 1:禁用 2:不禁用  (产品列表取值(请选择2)) */
  type;
}

export const init = new defs.FrontResponse();

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/proMigra/selectCode', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}

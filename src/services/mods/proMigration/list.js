/**
 * @desc 查询产品列表(数据迁移)
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 品类code */
  code;
  /** describe */
  describe;
  /** 表面工艺name */
  effectName;
  /** 是否专销  1:是,2:否 */
  flagType;
  /** 迁移状态  1:待迁移,2:已迁移, 3:暂不迁移 */
  migrationType;
  /** 页码 */
  page;
  /** 制造工艺name */
  processCode;
  /** 行数 */
  rows;
  /** 专销销售商id */
  saleId;
  /** 搜索 */
  search;
  /** 供应商id */
  supplierId;
}

export const init = new defs.FrontResponse();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/proMigra/list', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}

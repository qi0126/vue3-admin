/**
 * @desc 逐个迁移.(下一个)
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 品类code */
  code;
  /** 表面工艺name */
  effectName;
  /** 是否专销  1:是,2:否 */
  flagType;
  /** 迁移状态  1:待迁移,2:已迁移, 3:暂不迁移 */
  migrationType;
  /** 制造工艺name */
  processCode;
  /** processName */
  processName;
  /** 专销销售商id */
  saleId;
  /** 搜索 */
  search;
  /** 供应商id */
  supplierId;
  /** 是否过滤暂不迁移 1:过滤 2:不过滤 */
  type;
}

export const init = new defs.FrontResponse();

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/proMigra/selectOne', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}

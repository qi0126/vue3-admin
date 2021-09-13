/**
 * @desc 编辑员工
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 账号 */
  account;
  /** createTime */
  createTime;
  /** 部门id */
  deptId;
  /** 所属部门 */
  deptName;
  /** 邮箱 */
  email;
  /** 用户id */
  id;
  /** 是否锁定，1=正常,2=锁定 */
  isLock;
  /** 是否管理员,1=是，2=否 */
  master;
  /** 用户姓名 */
  name;
  /** 是否只能在一家公司,1=是,2=否 */
  onlyOneCompany;
  /** 最后修改人员 */
  operator;
  /** 密码 */
  password;
  /** 办公电话 */
  phone;
  /** 权限值（数组）例：['a','b'] */
  authValJson;
  /** 企业id */
  companyId;
  /** 角色名称 */
  roleName;
  /** updateTime */
  updateTime;
  /** 手机号,系统唯一 */
  telephone;
}

export const init = '';

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/account/update', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}

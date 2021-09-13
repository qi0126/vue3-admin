<template>
  <h1 style="text-align:center;color:#666">原生表格</h1>
  <table>
    <thead>
      <tr>
        <th colspan="2">姓名</th>
        <th colspan="4"></th>
        <th colspan="2">学号</th>
        <th colspan="4"></th>
        <th colspan="2">性别</th>
        <th colspan="4"></th>
        <th colspan="2">学制</th>
        <th colspan="4"></th>
        <th rowspan="4" colspan="4">头像</th>
      </tr>
      <tr>
        <th colspan="4">院系</th>
        <th colspan="8"></th>
        <th colspan="4">专业</th>
        <th colspan="8"></th>
      </tr>
      <tr>
        <th colspan="4">院系</th>
        <th colspan="8"></th>
        <th colspan="4">专业</th>
        <th colspan="8"></th>
      </tr>
      <tr>
        <th colspan="4">院系</th>
        <th colspan="8"></th>
        <th colspan="4">专业</th>
        <th colspan="8"></th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <td colspan="28">
          <div class="footer">
            <span>制表人:</span>
            <span>制表日期:xxxxxxx</span>
          </div>
        </td>
      </tr>
    </tfoot>
    <tbody>
      <tr>
        <td colspan="4">课程名</td>
        <td colspan="2">学分</td>
        <td colspan="2">成绩</td>
        <td colspan="2">修读方式</td>
        <td colspan="2">课程属性</td>
        <td colspan="2">考试时间</td>
        <td colspan="4">课程名</td>
        <td colspan="2">学分</td>
        <td colspan="2">成绩</td>
        <td colspan="2">修读宽度</td>
        <td colspan="2">课程属性</td>
        <td colspan="2">考试时间</td>
      </tr>
      <tr>
        <td colspan="4"></td>
        <td colspan="2"></td>
        <td colspan="2"></td>
        <td colspan="2"></td>
        <td colspan="2"></td>
        <td colspan="2"></td>
        <td colspan="4"></td>
        <td colspan="2"></td>
        <td colspan="2"></td>
        <td colspan="2"></td>
        <td colspan="2"></td>
        <td colspan="2"></td>
      </tr>
      <tr>
        <td colspan="4">方案要求学分</td>
        <td colspan="2"></td>
        <td colspan="4">平均学分成绩点</td>
        <td colspan="2"></td>
        <td colspan="4">已核总学分数</td>
        <td colspan="2"></td>
        <td colspan="4" rowspan="3">系主任签字:</td>
        <td colspan="6" rowspan="3"></td>
      </tr>
      <tr>
        <td colspan="4">获得学士学位</td>
        <td colspan="14"></td>
      </tr>
      <tr>
        <td colspan="4" style="height:40px;">备注</td>
        <td colspan="14"></td>
      </tr>
    </tbody>
  </table>
</template>

<script setup></script>

<style lang="scss" scoped>
table {
  width: 100%;
  border: solid 1px;
  border-collapse: collapse;
  table-layout: fixed;
  white-space: nowrap;
  text-overflow: ellipsis;
  thead {
    background-color: #6e9de7;
    th {
      color: #fff;
      line-height: 17px;
      font-weight: normal;
      line-height: 17px;
      height: 30px;
    }
  }

  tbody {
    background-color: #d9e6fa;
    width: 100%;
    td {
      color: #677998;
      line-height: 12px;
    }
  }
  tfoot {
    background: #e7effb;
    tr {
      td {
        height: 50px;
        .footer {
          color: #677998;
          display: flex;
          justify-content: space-between;
          padding: 0 30px 0 30px;
        }
      }
    }
  }
  th,
  td {
    height: 20px;
    padding: 12px 2px;
    border: solid 1px #ccc;
    text-align: center;
  }
  tr td:first-child {
    color: #333;
    border: solid 1px #ccc;
  }
}
</style>

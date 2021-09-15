<template>
	<el-row :gutter="20">
		<el-col :span="8">
			<el-input placeholder="请输入用户名" v-model="queryInfo.query" clearable @clear="getList">
				<template #append>
					<el-button icon="el-icon-search" @click="getList"></el-button>
				</template>
			</el-input>
		</el-col>
		<el-col :span="3">
			<el-button type="primary" @click="addUserDialogVisible = true">添加用户</el-button>
		</el-col>
	</el-row>
	<div style="margin:20px"></div>
	<el-table :data="tableData" style="width: 100%" border>
		<el-table-column prop="date" label="日期" width="180"> </el-table-column>
		<el-table-column prop="name" label="姓名" width="180"> </el-table-column>
		<el-table-column prop="address" label="地址"> </el-table-column>
	</el-table>
	<el-table :data="tableList" border v-loading="loading" :header-cell-style="headerCellStyle">
		<el-table-column type="index" label="序号" align="center" width="80px" />
		<el-table-column prop="username" label="用户名" width="180" align="center" />
		<el-table-column prop="email" label="邮箱" align="center" />
		<el-table-column prop="role_name" label="角色" align="center" />
		<el-table-column label="状态" align="center">
			<template #default="scope">
				<el-switch v-model="scope.row.mg_state" active-color="#13ce66" inactive-color="#ff4949" @change="updateState(scope.row)"></el-switch>
			</template>
		</el-table-column>
		<el-table-column label="管理" align="center">
			<template #default="scope">
				<el-tooltip class="item" effect="dark" content="修改用户" placement="top" :enterable="false">
					<el-button type="primary" @click="showUpdateUserDialog(scope.row)" icon="el-icon-edit" size="mini" circle></el-button>
				</el-tooltip>
				<el-tooltip class="item" effect="dark" content="删除用户" placement="top" :enterable="false">
					<el-button @click="deleteUser(scope.row)" type="danger" icon="el-icon-delete" size="mini" circle></el-button>
				</el-tooltip>
				<el-tooltip class="item" effect="dark" content="赋予权限" placement="top" :enterable="false">
					<el-button type="warning" icon="el-icon-setting" size="mini" circle></el-button>
				</el-tooltip>
			</template>
		</el-table-column>
	</el-table>
	<MyPagination :total="total" :current-page="1" :page-size="10" />
	<Add v-model:addUserDialogVisible="addUserDialogVisible" />
	<Update v-model:updateUserDialogVisible="updateUserDialogVisible" :updateForm="updateForm" />
</template>

<script>
import { state, getList, headerCellStyle } from "./model";
import { toRefs, reactive } from "vue";
import Add from "./dialog/Add.vue";
import Update from "./dialog/Update.vue";
import MyPagination from "@/components/My-pagination.vue";
import { deleteUsers } from "@/api/users";
import { ElMessage, ElMessageBox } from "element-plus";

export default {
	components: { Add, Update, MyPagination },
	watch: {
		addUserDialogVisible(v) {
			if (!v) {
				this.getList();
			}
		},
		updateUserDialogVisible(v) {
			if (!v) {
				this.getList();
			}
		}
	},
	setup() {
		getList();
		//修改用户状态
		const updateState = async user => {
			state.loading = true;
			await putUsers(user);
			state.loading = false;
		};
		const showUpdateUserDialog = user => {
			state.updateForm = user;
			state.updateUserDialogVisible = true;
		};
		const deleteUser = async user => {
			if (user.role_name === "超级管理员") {
				return ElMessage.error("超级管理员不能删除");
			}
			let r = "";
			r = await ElMessageBox.confirm("要永久删除用户吗？", "删除用户", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning"
			});
			//点击的是取消
			if (r !== "confirm") {
				return ElMessage.info("你取消了删除操作！");
			}
			await deleteUsers(user);
			getUserList();
		};

		return {
			...toRefs(state),
			getList,
			updateState,
			headerCellStyle,
			deleteUser,
			showUpdateUserDialog,
			tableData: [
				{
					date: "2016-05-02",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1518 弄"
				},
				{
					date: "2016-05-04",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1517 弄"
				},
				{
					date: "2016-05-01",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1519 弄"
				},
				{
					date: "2016-05-03",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1516 弄"
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped></style>

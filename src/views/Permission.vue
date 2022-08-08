<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-warn"></i> 权限测试
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <h1>管理员权限页面</h1>
            <p>
                <router-link to="/login" class="logout">退出登录</router-link>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "permission"
};
</script>

<style scoped>
h1 {
    text-align: center;
    margin: 30px 0;
}
p {
    line-height: 30px;
    margin-bottom: 10px;
    text-indent: 2em;
}
.logout {
    color: #409eff;
}
</style>
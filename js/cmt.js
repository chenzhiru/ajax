function getCommitList() {
    $.ajax( {
        method: 'GET',
        url: 'http://www.liulongbin.top:3006/api/cmtlist',
        success: function(res) {
            if (res.status !== 200) alert('获取数据失败');
            console.log('获取数据成功');
        }
    })
}
getCommitList();


var sbs1 = 
{

"100001": {
mp3Url:"http://susanlistening-1253455298.file.myqcloud.com/%E8%8B%B1%E8%AF%AD%E6%95%85%E4%BA%8B/%E8%8B%B1%E8%AF%AD%E4%B8%87%E4%BA%8B%E5%B0%8F%E6%95%85%E4%BA%8B.mp3",
picUrl: "../../images/disk1.png",
name: "英语万事小故事",
artists:"Susan英语学堂" 
},

"100002": {
mp3Url:"http://susanlistening-1253455298.file.myqcloud.com/%E8%8B%B1%E8%AF%AD%E6%95%85%E4%BA%8B/%E8%8B%B1%E8%AF%AD%E4%BA%BA%E7%89%A9%E5%B0%8F%E6%95%85%E4%BA%8B.mp3",
picUrl: "../../images/disk1.png",
name: "英语人物小故事",
artists:"Susan英语学堂" 
},

"100003": {
mp3Url:"http://susanlistening-1253455298.file.myqcloud.com/%E8%8B%B1%E8%AF%AD%E6%95%85%E4%BA%8B/%E8%8B%B1%E8%AF%AD%E5%8A%A8%E7%89%A9%E5%B0%8F%E6%95%85%E4%BA%8B.mp3",
picUrl: "../../images/disk1.png",
name: "英语动物小故事",
artists:"Susan英语学堂" 
},

"100004": {
mp3Url:"http://susanlistening-1253455298.file.myqcloud.com/%E8%8B%B1%E8%AF%AD%E6%95%85%E4%BA%8B/%E8%8B%B1%E8%AF%AD%E5%93%B2%E7%90%86%E5%B0%8F%E6%95%85%E4%BA%8B.mp3",
picUrl: "../../images/disk1.png",
name: "英语哲理小故事",
artists:"Susan英语学堂" , 
 name: "英语哲理小故事"
},




};


module.exports = {

    'GET /api/sbs1': async (ctx, next) => {
        ctx.response.type = 'application/json';
        ctx.response.body = sbs1;
    },


};

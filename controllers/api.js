

var sbs1 = 
{

"100001": {
mp3Url:"	http://	susanlistening-1253455298.file.myqcloud.com/Side%20by%20Side/SBS1MP3/%E7%AC%AC1%E5%86%8C%20%E5%AD%A6%E7%94%9F%E7%94%A8%E4%B9%A6%E9%9F%B3%E9%A2%91/A001Introduction%20.MP3",
album: { 
picUrl: "../../images/sbs1.jpg",
name: "国际朗文英语第1册",
 }, 
artists:"国际朗文英语" , 
 name: "A001Introduction ...",
zh: ""
},
"100002": {
mp3Url:"	http://	susanlistening-1253455298.file.myqcloud.com/Side%20by%20Side/SBS1MP3/%E7%AC%AC1%E5%86%8C%20%E5%AD%A6%E7%94%9F%E7%94%A8%E4%B9%A6%E9%9F%B3%E9%A2%91/P001_Chapter%2001_Vocabulary%20Preview.mp3",
album: { 
picUrl: "../../images/sbs1.jpg",
name: "国际朗文英语第1册",
 }, 
artists:"国际朗文英语" , 
 name: "P001_Chapter 01_Vocabular...",
zh: ""
}};


module.exports = {

    'GET /api/sbs1': async (ctx, next) => {
        ctx.response.type = 'application/json';
        ctx.response.body = sbs1;
    },


    'POST /api/products': async (ctx, next) => {
        var p = {
            name: ctx.request.body.name,
            price: ctx.request.body.price
        };
        products.push(p);
        ctx.response.type = 'application/json';
        ctx.response.body = p;
    }
};

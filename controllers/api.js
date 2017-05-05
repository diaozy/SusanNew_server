

var list = 
{"date":"20170503","stories":[{"images":["https:\/\/pic3.zhimg.com\/v2-1aa98f88d19ad3fba8e616f1762a8e32.jpg"],"type":0,"id":9396948,"ga_prefix":"050313","title":"facai到极致的剧组是怎么拍电影的？"},{"images":["https:\/\/pic3.zhimg.com\/v2-48566082907880d38f5490d3341e904a.jpg"],"type":0,"id":9394512,"ga_prefix":"050312","title":"大误 · 走吧，去火星"},{"images":["https:\/\/pic4.zhimg.com\/v2-5cb4fcbd56bb6717969e9967829929b7.jpg"],"type":0,"id":9395306,"ga_prefix":"050311","title":"这茶，明显是用了梅雨期的雨水，我还是喜欢用腊月的雪水"},{"images":["https:\/\/pic3.zhimg.com\/v2-750263b3bf32aee7e1d31d525adc035a.jpg"],"type":0,"id":9396201,"ga_prefix":"050310","title":"现在人人都想做产品经理，可五年后还会有这个职位吗？"},{"images":["https:\/\/pic3.zhimg.com\/v2-27f1a581d539e00caecc19587d8f8306.jpg"],"type":0,"id":9396000,"ga_prefix":"050309","title":"身为律师，我知道这场官司一定会输，接还是不接？"},{"images":["https:\/\/pic4.zhimg.com\/v2-375f0088e4260b86a7def04cdbc077ef.jpg"],"type":0,"id":9395683,"ga_prefix":"050308","title":"职场中的寥寥数语，能观察到的东西比想象中要多得多"},{"images":["https:\/\/pic4.zhimg.com\/v2-409d07d34e79df3474fab770efbeca2f.jpg"],"type":0,"id":9395438,"ga_prefix":"050307","title":"女性无法同时拥有事业和家庭这件事，可能在变得更糟"},{"images":["https:\/\/pic4.zhimg.com\/v2-38d6a56fa8e063774928183ffae19827.jpg"],"type":0,"id":9396136,"ga_prefix":"050307","title":"我要是巴菲特，也会偏爱这个行业"},{"images":["https:\/\/pic1.zhimg.com\/v2-1f3e5856f7a772c9e001548597369f9c.jpg"],"type":0,"id":9396108,"ga_prefix":"050307","title":"五一出去玩了吗？挤吗？烦吗？"},{"images":["https:\/\/pic2.zhimg.com\/v2-598353f424a360ed640ff6057f823e05.jpg"],"type":0,"id":9393330,"ga_prefix":"050306","title":"瞎扯 · 如何正确地吐槽"},{"images":["https:\/\/pic1.zhimg.com\/v2-e2010f27a11ec0a0f36c4e048a2d4398.jpg"],"type":0,"id":9395459,"ga_prefix":"050306","title":"这里是广告 · 青年节充值计划"}],"top_stories":[{"image":"https:\/\/pic2.zhimg.com\/v2-52fb0c14562378702acc02840810d3dd.jpg","type":0,"id":9396136,"ga_prefix":"050307","title":"我要是巴菲特，也会偏爱这个行业"},{"image":"https:\/\/pic2.zhimg.com\/v2-56bdeb0161c68f5548df0413203c231d.jpg","type":0,"id":9396108,"ga_prefix":"050307","title":"五一出去玩了吗？挤吗？烦吗？"},{"image":"https:\/\/pic4.zhimg.com\/v2-37c94b2e64b6320a7a8356a2ef5eecf7.jpg","type":0,"id":9394795,"ga_prefix":"050219","title":"一滴血就想检测癌症，想得也太好了吧"},{"image":"https:\/\/pic1.zhimg.com\/v2-54e9562742f6b043c88148fc3aab61c4.jpg","type":0,"id":9394853,"ga_prefix":"050215","title":"「最强速攀大师」坠崖，我们失去了一位伟大的攀登家"},{"image":"https:\/\/pic3.zhimg.com\/v2-430ce94c5a87e98a7ed7a2d20f0ca85e.jpg","type":0,"id":9383848,"ga_prefix":"042706","title":"这里是广告 · 从电影的世界里看 AI"}]};

var theme =
{
    "limit":1000,
    "subscribed":[

    ],
    "others":[
        {
            "color":14483535,
            "thumbnail":"https:\/\/pic3.zhimg.com/00eba01080138a5ac861d581a64ff9bd.jpg",
            "description":"除了经典和新片，我们还关注技术和产业",
            "id":3,
            "name":"学语法"
        },
        {
            "color":62140,
            "thumbnail":"https:\/\/p1.zhimg.com/d3/7b/d37b38d5c82b4345ccd7e50c4ae997da.jpg",
            "description":"好设计需要打磨和研习，我们分享灵感和路径",
            "id":4,
            "name":"学词汇"
        },
        {
            "color":1615359,
            "thumbnail":"https:\/\/pic4.zhimg.com/aa94e197491fb9c44d384c4747773810.jpg",
            "description":"商业世界变化越来越快，就是这些家伙干的",
            "id":5,
            "name":"听听力"
        }
    ]
};

module.exports = {

    'GET /api/list': async (ctx, next) => {
        ctx.response.type = 'application/json';
        ctx.response.body = list;
    },

    'GET /api/theme': async (ctx, next) => {
        ctx.response.type = 'application/json';
        ctx.response.body = theme;
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

# koa-pg-naive-orm

这是一个最简单最直接的 orm，

我尅告诉你，我不喜欢创建实体，json 就是天然的实体好么。

最近在用 postgres 和 koa， 所以就有了这个库。

## Install

npm i koa-pg-naive-orm --save

## 例子


    var accountInfo = {
        youku_id: youkuId,
        nick: userInfoJson.nickname,
        email: userInfoJson.email,
        mobile: userInfoJson.mobile,
        password: password
    };

    var accRes = yield db.insert("account", accountInfo);


    var result = yield db.take("account", {
        where: "id>$id",
        params: {id: 1},
        page:1
        size:20,
        orderBy: "id desc",
        cols: ["email", "mobile", "nick"]
    });


## API

....
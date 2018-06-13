const db = require('./server/database');

const express = require('express');
const app = express();
const portNo = 3001;
app.listen(portNo, () => {
    console.log("서버 실행 완료:", 'http://localhost:${portNo}');
})

app.get('/api/adduser', (req, res) => {
    const userid = req.query.userid;
    const passwd = req.query.passwd;

    if(userid === '' || passwd === '') {
        return res.json({status:false, msg: '필요한 요소를 입력하지 않았습니다.'});
    }

    db.getUser(userid, (user) => {
        if(user) {
            return res.json({status:false, msg: '이미 존재하는 사용자압니다'});
        }

        db.addUser(userid, passwd, (toekn) => {
            if(!token) {
                res.json({status:false, msg:'DB 오류'});
            }
            res.json({status:true, token});
        })
    })
})
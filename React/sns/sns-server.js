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

    if (userid === '' || passwd === '') {
        return res.json({ status: false, msg: '필요한 요소를 입력하지 않았습니다.' });
    }

    db.getUser(userid, (user) => {
        if (user) {
            return res.json({ status: false, msg: '이미 존재하는 사용자입니다' });
        }

        db.addUser(userid, passwd, (token) => {
            if (!token) {
                res.json({ status: false, msg: 'DB 오류' });
            }
            res.json({ status: true, token });
        })
    })
})

app.get('/api/login', (req, res) => {
    const userid = req.query.userid
    const passwd = req.query.passwd
    db.login(userid, passwd, (err, token) => {
        if (err) {
            res.json({ status: false, msg: '인증 오류' })
            return
        }
        res.json({ status: true, token })
    })
})

app.get('/api/add_friend', (req, res) => {
    const userid = req.query.userid
    const token = req.query.token
    const friendid = req.query.friendid
    db.checkToken(userid, token, (err, user) => {
        if (err) {
            res.json({ status: false, msg: '인증 오류' })
            return
        }

        user.friends[friendid] = true
        db.updateUser(user, (err) => {
            if (err) {
                res.json({ status: false, msg: 'DB 오류' })
                return
            }
            res.json({ status: true })
        })
    })
})

app.get('/api/add_timeline', (req, res) => {
    const userid = req.query.userid
    const token = req.query.token
    const comment = req.query.comment
    const time = (new Date()).getTime()

    db.checkToken(userid, token, (err, user) => {
        if (err) {
            res.json({ status: false, msg: '인증 오류' })
            return
        }

        const item = { userid, comment, time }
        db.timelineDB.insert(item, (err, it) => {
            if (err) {
                res.json({ status: false, msg: 'DB 오류' })
                return
            }
            res.json({ status: true, timelineid: it._id })
        })
    })
})

app.get('/api/get_allusers', (req, res) => {
    db.userDB.find({}, (err, docs) => {
        if (err) {
            return res.json({ status: false })
        }
        const users = docs.map(e => e.userid)
        res.json({ status: true, users })
    })
})

app.get('/api/get_user', (req, res) => {
    const userid = req.query.userid;
    db.getUser(userid, (user) => {
        if (!user) {
            return res.json({ status: false })
        }
        res.json({ status: true, friends: user.friends })
    })
})

app.get('/api/get_friends_timeline', (req, res) => {
    const userid = req.query.userid
    const token = req.query.token
    db.getFriendsTimeline(userid, token, (err, docs) => {
        if (err) {
            res.json({ status: false, msg: err.toString() })
            return
        }
        res.json({ status: true, timelines: docs })
    })
})

app.use('/public', express.static('./public'))
app.use('/login', express.static('./public'))
app.use('/users', express.static('./public'))
app.use('/timeline', express.static('./public'))
app.use('/', express.static('./public'))
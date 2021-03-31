const News = require('../models/news');
const { multipleMongooseToObject } = require('../../util/mongoose');


class Sitecontroller {

    // --- GET ---  --- /news ---   

    index(req, res, next) {
        News.find({})
            .then(news => {
                res.render('home', {
                    news: multipleMongooseToObject(news)
                });
            })
            .catch(next);

        // res.render('home');
    }
    search(req, res) {
        res.render('search');
    }
}

module.exports = new Sitecontroller;
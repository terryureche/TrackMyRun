const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('./../middlewares/requireAuth');
const router = require('./authRoutes');

const Track = mongoose.model('Track');

const ruoter = express.Router();

router.use(requireAuth);

router.get('/tracks', async (req, res) => {
    const tracks = await Track.find({
        userId: req.user._id
    });

    res.send(tracks);
});

router.post('/tracks', async(req, res) => {
    const {
        name,
        locations
    } = req.body;

    if(!name || !locations) {
        return res
            .status(422)
            .send({error: 'You must provide a name and a location'});
    }
    try {
        const track = new Track({name, locations, userId: req.user.id});

        await track.save();

        res.send(track);
    } catch (err) {
        res.status(422).send({error: err.message});
    }
});

module.exports = router;
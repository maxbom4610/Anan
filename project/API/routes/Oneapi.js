const express = require('express');
const router = express.Router();
const math = require('mathjs');


router.get('/Oneapi', (req, res) => {
    res.send('testget');
});

router.post('/Oneapi', (req, res) => {
    const eq = req.body.Formula;
    var x = parseFloat(req.body.x);
    var xo = 0;
    var i = 1;
    var check = parseFloat(0.000000);
    var result1 = [];
    do{
        let scopel = {
            x: xl
        };
            x = eq.eval(scopel);
            check = Math.abs((x - xo)/x)*100 ;
            xo = x;
            i++ ;
            result1.push({
                'iteration': i,
                'x': x,
                'Check': Check,
            });
    }while(check>0.00001 && i<50)


    res.json({
        result: result1
    })

});



module.exports = router;
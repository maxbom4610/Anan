const express = require('express');
const router = express.Router();
const math = require('mathjs');


router.get('/Newapi', (req, res) => {
    res.send('testget');
});

router.post('/Newapi', (req, res) => {
    const eq = math.compile(req.body.Formula);
    var diff;
    var x = parseFloat(req.body.x);
    var xn ;
    var i = 1;
    var check = parseFloat(0.00000000);
    var result1 = [];
    const fx = math.compile(eq);
    do{
            let scope = {x: x};
            i++;
            diff = math.derivative(eq,'x');
            xn = x_old-(fx.eval(scope)/diff.eval(scope));
            check = Math.abs((xn-x)/xn)*100;

            x = xn;
            result1.push({
                'Iteration' : i,
                'Xi': x,
                'Xi+1' : xn,
                'check': check
            });
    }while(check>0.00001 && i<100)

    res.json({
        result: result1
    })

});



module.exports = router;
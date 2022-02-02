const controller = {
    index: (req,res)=>{
        res.render('index')
    },
    usados: (req,res)=>{
        res.render('usados')
    },
    novos: (req,res)=>{
        res.render('novos')
    },
};
    


module.exports = controller;
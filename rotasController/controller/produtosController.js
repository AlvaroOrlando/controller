const controller = {
    index: (req,res)=>{
        res.render('index', {title: 'Home'})  
    },

    usados: (req,res)=>{
        res.render('usados', {title: 'Usados'})
    },

    novos: (req,res)=>{
        res.render('novos', {title: 'Novos'})
    },

    

};

        module.exports = controller;
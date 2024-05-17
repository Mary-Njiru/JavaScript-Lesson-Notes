function nums (){
    const a = 2;
    console.log({a});

    function add(){
        const b = 3;
        console.log({sum: a+b});
        return 'ola'
    }
    console.log(add());
    
};

nums();
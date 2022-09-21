//output
const ls = require('./ls');
const pwd = require('./pwd');
process.stdout.write('prompt > ');

//response
process.stdin.on('data', (data) => {
    if(data.toString().trim() === 'pwd'){
        pwd();
    }
    if(data.toString().trim() === 'ls'){
        ls();
    }
    else{
    const cmd = data.toString().trim();//remove line

        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ');
    }
})



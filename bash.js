//output
process.stdout.write('prompt > ');

//response
process.stdin.on('data', (data) => {
    if(data.toString().trim() === 'pwd'){
        console.log(process.cwd());
        process.stdout.write('\nprompt >');
    }
    else{
    const cmd = data.toString().trim();//remove line

        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ');
    }
})



'use strict';
const { isMainThread, workerData, parentPort, Worker } = require('worker_threads'); // import the required values

const min = 2;


//simple function to generate all the primes between the start and range of numbers
function generatePrimes(start,range) {
    const values = []
    const end = start + range;

    for(let i=start;i<end;i++) {
        let isPrime = true;
        for(let j=min;j <= Math.sqrt(i);j++) {
            if(i % j === 0) {
                 isPrime = false;
                 break;
            }
        }
        if(isPrime) {
            values.push(i);
        }
    }
    return values;
}

if(isMainThread) {
    const primes = [];
    const max = 1e8;
    const maxThread = +process.argv[2] || 2;
    const threads = new Set();
    console.log(`Running iwth thread count ${maxThread}`);
    const range = Math.ceil((max - min) / maxThread);
    let start = min;
    for(let i = 0 ;i < maxThread - 1;i++ ) {
        const nowStart = start;
        threads.add(new Worker(__filename, {workerData: {start: nowStart, range }}));
        start = start + range;
    }
    // push the remaining the numbers to be processed to the threads
    threads.add(new Worker(__filename, {workerData: {start, range: range + (max + 1 - min) % maxThread}}));
    for (let worker of threads) {
        worker.on('error' ,(err) => { throw err; });
        worker.on('exit' ,() => {
                threads.delete(worker);
                if(threads.size === 0) {
                    console.log('...Completed');
                    console.log(primes.join('\n'));
                }
        });
        worker.on('message', (data) => {
            primes.push(...data)
        });
    }

} else {
    const generated = generatePrimes(workerData.start, workerData.range);
    parentPort.postMessage(generated);
   
}



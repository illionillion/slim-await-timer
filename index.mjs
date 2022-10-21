const timer = s => new Promise(resolve => setTimeout(resolve, s))

for (let i = 1; i <= 10; i++) {
    await timer(1000)
    console.log(i);
}
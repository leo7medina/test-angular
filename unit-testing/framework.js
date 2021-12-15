function expect(current) {
    return {
        toBe(expect) {
            if (current != expect) {
                throw new Error('Prueba no exitosa');
            }
        }
    };
}


function it(title, callback) {
    try {
        callback();
        console.log(`✔  ${title}`);
    } catch (error) {
        console.error(`× ${title}`);
    }
}

module.exports = {
    expect,
    it
}
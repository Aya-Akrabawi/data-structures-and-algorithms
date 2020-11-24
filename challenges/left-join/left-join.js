function leftJoin(hashA, hashB) {
    hashA.entries.forEach((value, index) => {
      if(value) {
        if (hashB.entries[index]) {
          hashA.entries[index].appendLL(hashB.entries[index])
        }
      }
    });
  }
  
  module.exports = leftJoin;
const fs                     = require('fs');

// как да вземем информация за произволен потребител в системата - подаваме конфигурационния му файл
const socialNetworkProcessor = require('./src/processor.js');
const objectNormal = socialNetworkProcessor.initConfig(`${__dirname}/test_scenarious/normal/config.json`);

const objectVip = socialNetworkProcessor.initConfig(`${__dirname}/test_scenarious/vip/config.json`);
const objectRestricted = socialNetworkProcessor.initConfig(`${__dirname}/test_scenarious/restricted/config.json`);


// objectNormal.addNewFriend();
// console.log(objectNormal.addNewFriend());

// console.log(objectNormal.getAllFriends());
// objectNormal.removeExistingFriend();
// console.log(objectNormal.getAllFriends());

// objectVip.addNewFriend();
// console.log(`${objectVip.getAllFriends()} VIP`);
// objectVip.removeExistingFriend();
// console.log(objectVip.getAllFriends());

// objectRestricted.addNewFriend();
// console.log(objectRestricted.getAllFriends());
// objectRestricted.removeExistingFriend();
// console.log(objectRestricted.getAllFriends());



let  rawdata = fs.readFileSync('./test_scenarious/normal/config.json')
        let normalFriends = JSON.parse(rawdata).numberOfFriends;
fs.writeFile("./test_scenarious/normal/Gosho/friends",`You now have ${normalFriends} friends`,(error) => {
    if (error) {
        console.log('An error has occurred ', error);
    return;
    }
console.log('Data written successfully to disk');
});


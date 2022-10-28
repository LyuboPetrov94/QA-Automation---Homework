const assert = require('assert');
const { describe } = require('mocha');
const fs                     = require('fs');

// как да вземем информация за произволен потребител в системата - подаваме конфигурационния му файл
const socialNetworkProcessor = require('./src/processor.js');
const objectNormal = socialNetworkProcessor.initConfig(`${__dirname}/test_scenarious/normal/config.json`);
const objectVip = socialNetworkProcessor.initConfig(`${__dirname}/test_scenarious/vip/config.json`);
const objectRestricted = socialNetworkProcessor.initConfig(`${__dirname}/test_scenarious/restricted/config.json`);

 

describe('Testing add new friend functionality - HAPPY PATH', () => {

    it('Test add new friend - NORMAL account type', () => {

        let  rawdata = fs.readFileSync('./test_scenarious/normal/config.json')
        let numberOfFriendsJsonConfig = JSON.parse(rawdata).numberOfFriends;

        if(numberOfFriendsJsonConfig >= 150){
            let expectedErrorMessage = 'You cannot add more friends';
            let actualErrorMessage = objectNormal.addNewFriend();
            assert.equal(actualErrorMessage, expectedErrorMessage, 'error');
        };

        let numberOfFriends =  + objectNormal.getAllFriends();
        let addedNumberOfFriends = + objectNormal.addNewFriend();
        assert.equal(addedNumberOfFriends, ++ numberOfFriends, 'error');
    });

    it('Test add new friend - VIP account type', () => {
        let numberOfFriends =  + objectVip.getAllFriends();
        let addedNumberOfFriends = + objectVip.addNewFriend();
        assert.equal(addedNumberOfFriends, numberOfFriends + 2, 'error');
    });

    it('Test add new friend - RESTRICTED account type', () => {

        let  rawdata = fs.readFileSync('./test_scenarious/restricted/config.json')
        let numberOfFriendsJsonConfig = JSON.parse(rawdata).numberOfFriends;

        if(numberOfFriendsJsonConfig >= 50){
            let expectedErrorMessage = 'You cannot add more friends';
            let actualErrorMessage = objectRestricted.addNewFriend();
            assert.equal(actualErrorMessage, expectedErrorMessage, 'error');
        };

        let numberOfFriends =  + objectRestricted.getAllFriends();
        let addedNumberOfFriends = + objectRestricted.addNewFriend();
        assert.equal(addedNumberOfFriends, ++ numberOfFriends, 'error');
    }); 
});

describe('Testing remove friends functionality - HAPPY PATH', () => {

    it('Test remove friend - NORMAL account type', () => {
        let  rawdata = fs.readFileSync('./test_scenarious/normal/config.json')
        let numberOfFriendsJsonConfig = JSON.parse(rawdata).numberOfFriends;

        if(numberOfFriendsJsonConfig == 0){
            let expectedErrorMessage = 'You cannot have less than 0 friends';
            let actualErrorMessage = objectNormal.addNewFriend();
            assert.equal(actualErrorMessage, expectedErrorMessage, 'error');
        };
        let numberOfFriends = + objectNormal.getAllFriends();
        let reducedNumberOfFriends = + objectNormal.removeExistingFriend();
        assert.equal(reducedNumberOfFriends, numberOfFriends - 1, 'error');
    });

    it('Test remove friend - VIP account type', () => {
        let  rawdata = fs.readFileSync('./test_scenarious/vip/config.json')
        let numberOfFriendsJsonConfig = JSON.parse(rawdata).numberOfFriends;

        if(numberOfFriendsJsonConfig == 0){
            let expectedErrorMessage = 'You cannot have less than 0 friends';
            let actualErrorMessage = objectVip.addNewFriend();
            assert.equal(actualErrorMessage, expectedErrorMessage, 'error');
        };
        let numberOfFriends = + objectVip.getAllFriends();
        let reducedNumberOfFriends = + objectVip.removeExistingFriend();
        assert.equal(reducedNumberOfFriends, numberOfFriends - 1, 'error');
    });

    it('Test remove friend - RESTRICTED account type', () => {
        let  rawdata = fs.readFileSync('./test_scenarious/restricted/config.json')
        let numberOfFriendsJsonConfig = JSON.parse(rawdata).numberOfFriends;

        if(numberOfFriendsJsonConfig == 0){
            let expectedErrorMessage = 'You cannot have less than 0 friends';
            let actualErrorMessage = objectRestricted.addNewFriend();
            assert.equal(actualErrorMessage, expectedErrorMessage, 'error');
        };
        let numberOfFriends = + objectRestricted.getAllFriends();
        let reducedNumberOfFriends = + objectRestricted.removeExistingFriend();
        assert.equal(reducedNumberOfFriends, numberOfFriends - 1, 'error');
    });
});

describe('Testing get all friends functionality', () => {

    it('Get all friends  - NORMAL account type', () => {
        let  rawdata = fs.readFileSync('./test_scenarious/normal/config.json')
        let numberOfFriendsJsonConfig = JSON.parse(rawdata).numberOfFriends;

        if(numberOfFriendsJsonConfig == 0){
            let jsonNumberOfFriendsMessage = `You do not have any friends`;
            let functionNumberOfFriends = objectNormal.getAllFriends();
            assert.equal(functionNumberOfFriends, jsonNumberOfFriendsMessage, 'error');
        };
        
        if(numberOfFriendsJsonConfig == 1){
            let jsonNumberOfFriendsMessage = `You have ${numberOfFriendsJsonConfig} friend`;
            let functionNumberOfFriends = objectNormal.getAllFriends();
            assert.equal(functionNumberOfFriends, jsonNumberOfFriendsMessage, 'error');
        };

        if(numberOfFriendsJsonConfig > 1){
            let jsonNumberOfFriendsMessage = `You have ${numberOfFriendsJsonConfig} friends`;
            let functionNumberOfFriends = objectNormal.getAllFriends();
            assert.equal(functionNumberOfFriends, jsonNumberOfFriendsMessage, 'error');
        };
    });

    it('Get all friends  - VIP account type', () => {
        let  rawdata = fs.readFileSync('./test_scenarious/vip/config.json')
        let numberOfFriendsJsonConfig = JSON.parse(rawdata).numberOfFriends;

        if(numberOfFriendsJsonConfig == 0){
            let jsonNumberOfFriendsMessage = `You do not have any friends`;
            let functionNumberOfFriends = objectVip.getAllFriends();
            assert.equal(functionNumberOfFriends, jsonNumberOfFriendsMessage, 'error');
        };
        
        if(numberOfFriendsJsonConfig == 1){
            let jsonNumberOfFriendsMessage = `You have ${numberOfFriendsJsonConfig} friend`;
            let functionNumberOfFriends = objectVip.getAllFriends();
            assert.equal(functionNumberOfFriends, jsonNumberOfFriendsMessage, 'error');
        };
        if(numberOfFriendsJsonConfig > 1){
            let jsonNumberOfFriendsMessage = `You have ${numberOfFriendsJsonConfig} friends`;
            let functionNumberOfFriends = objectVip.getAllFriends();
            assert.equal(functionNumberOfFriends, jsonNumberOfFriendsMessage, 'error');
        }; 
    });

    it('Get all friends  - RESTRICTED account type', () => {
        let  rawdata = fs.readFileSync('./test_scenarious/restricted/config.json')
        let numberOfFriendsJsonConfig = JSON.parse(rawdata).numberOfFriends;

        if(numberOfFriendsJsonConfig == 0){
            let jsonNumberOfFriendsMessage = `You do not have any friends`;
            let functionNumberOfFriends = objectRestricted.getAllFriends();
            assert.equal(functionNumberOfFriends, jsonNumberOfFriendsMessage, 'error');
        };
        
        if(numberOfFriendsJsonConfig == 1){
            let jsonNumberOfFriendsMessage = `You have ${numberOfFriendsJsonConfig} friend`;
            let functionNumberOfFriends = objectRestricted.getAllFriends();
            assert.equal(functionNumberOfFriends, jsonNumberOfFriendsMessage, 'error');
        };
        if(numberOfFriendsJsonConfig > 1){
            let jsonNumberOfFriendsMessage = `You have ${numberOfFriendsJsonConfig} friends`;
            let functionNumberOfFriends = objectRestricted.getAllFriends();
            assert.equal(functionNumberOfFriends, jsonNumberOfFriendsMessage, 'error');
        }; 
    });
});


describe('Testing add new photo functionality - HAPPY PATH', () => {

    it('Test add new photo - NORMAL account type', () => {
        let  rawdata = fs.readFileSync('./test_scenarious/normal/config.json')
        let numberOfPhotosJsonConfig = JSON.parse(rawdata).numberOfPhotos;
        let accountType = JSON.parse(rawdata).accountType;

        if(numberOfPhotosJsonConfig >= 150 && accountType == 'NORMAL' ){
            let jsonNumberOfPhotosMessage = 'You cannot add more photos';
            let functionNumberOfPhotos = objectNormal.addNewPhoto();
            assert.equal(functionNumberOfPhotos, jsonNumberOfPhotosMessage, 'error');
        };

        let numberOfPhotos = + objectNormal.getAllPhotos();
        let functionAddedNumberOfPhotos = + objectNormal.addNewPhoto();
        assert.equal(functionAddedNumberOfPhotos, ++ numberOfPhotos, 'error');

    });

    it('Test add new photo - VIP account type', () => {

        let numberOfPhotos =  + objectVip.getAllPhotos();
        let functionAddedNumberOfPhotos = + objectVip.addNewPhoto();
        assert.equal(functionAddedNumberOfPhotos, ++ numberOfPhotos, 'error');
    });

    it('Test add new photo - RESTRICTED account type', () => {
        let  rawdata = fs.readFileSync('./test_scenarious/restricted/config.json')
        let accountType = JSON.parse(rawdata).accountType;
 
        if(accountType == 'RESTRICTED' ){
            let jsonNumberOfPhotosMessage = 'You cannot add photos';
            let functionNumberOfPhotos = objectNormal.addNewPhoto();
            assert.equal(functionNumberOfPhotos, jsonNumberOfPhotosMessage, 'error');
        };
    }); 
});

describe('Testing Remove existing photo functionality', () => {

    it('Test remove existing photo - NORMAL account type', () => {
        let  rawdata = fs.readFileSync('./test_scenarious/normal/config.json')
        let numberOfPhotosJsonConfig = JSON.parse(rawdata).numberOfPhotos;

        if(numberOfPhotosJsonConfig == 0){
            let removePhotoMessage = `You cannot have less than 0 photos`;
            let functionRemovePhoto = objectNormal.removeExistingPhoto();
            assert.equal(functionRemovePhoto, removePhotoMessage, 'error');
        };
        let currentNumberOfPhotos = objectNormal.getAllPhotos();
        let reducedNumberOfPhotos = objectNormal.removeExistingPhoto();
        assert.equal(reducedNumberOfPhotos, currentNumberOfPhotos - 1, 'error');
    });

    it('Test remove existing photo - VIP account type', () => {
        let  rawdata = fs.readFileSync('./test_scenarious/vip/config.json')
        let numberOfPhotosJsonConfig = JSON.parse(rawdata).numberOfPhotos;

        if(numberOfPhotosJsonConfig == 0){
            let removePhotoMessage = `You cannot have less than 0 photos`;
            let functionRemovePhoto = objectVip.removeExistingPhoto();
            assert.equal(functionRemovePhoto, removePhotoMessage, 'error');
        };
        let currentNumberOfPhotos = objectVip.getAllPhotos();
        let reducedNumberOfPhotos = objectVip.removeExistingPhoto();
        assert.equal(reducedNumberOfPhotos, currentNumberOfPhotos - 1, 'error');
    });

    it('Test remove existing photo - RESTRICTED account type', () => {
        let  rawdata = fs.readFileSync('./test_scenarious/restricted/config.json')
        let numberOfPhotosJsonConfig = JSON.parse(rawdata).numberOfPhotos;

        if(numberOfPhotosJsonConfig == 0){
            let removePhotoMessage = `You cannot have less than 0 photos`;
            let functionRemovePhoto = objectRestricted.removeExistingPhoto();
            assert.equal(functionRemovePhoto, removePhotoMessage, 'error');
        };
        let currentNumberOfPhotos = objectRestricted.getAllPhotos();
        let reducedNumberOfPhotos = objectRestricted.removeExistingPhoto();
        assert.equal(reducedNumberOfPhotos, currentNumberOfPhotos - 1, 'error');
    });
});

describe('Testing get all photos functionality', () => {

    it('Get all photos  - NORMAL account type', () => {
        let  rawdata = fs.readFileSync('./test_scenarious/normal/config.json')
        let numberOfPhotosJsonConfig = JSON.parse(rawdata).numberOfPhotos;

        if(numberOfPhotosJsonConfig == 0){
            let jsonNumberOfPhotosMessage = `You have not uploaded any photos yet`;
            let functionNumberOfPhotos = objectNormal.getAllPhotos();
            assert.equal(functionNumberOfPhotos, jsonNumberOfPhotosMessage, 'error');
        };
        
        if(numberOfPhotosJsonConfig == 1){
            let jsonNumberOfPhotosMessage = `You have uploaded ${numberOfPhotosJsonConfig} photo`;
            let functionNumberOfPhotos = objectNormal.getAllPhotos();
            assert.equal(functionNumberOfPhotos, jsonNumberOfPhotosMessage, 'error');
        };

        if(numberOfPhotosJsonConfig > 1){
            let jsonNumberOfPhotosMessage = `You have uploaded ${numberOfPhotosJsonConfig} photos`;
            let functionNumberOfPhotos = objectNormal.getAllPhotos();
            assert.equal(functionNumberOfPhotos, jsonNumberOfPhotosMessage, 'error');
        };
    });

    it('Get all photos  - VIP account type', () => {
        let  rawdata = fs.readFileSync('./test_scenarious/vip/config.json')
        let numberOfPhotosJsonConfig = JSON.parse(rawdata).numberOfPhotos;

        if(numberOfPhotosJsonConfig == 0){
            let jsonNumberOfPhotosMessage = `You have not uploaded any photos yet`;
            let functionNumberOfPhotos = objectVip.getAllPhotos();
            assert.equal(functionNumberOfPhotos, jsonNumberOfPhotosMessage, 'error');
        };
        
        if(numberOfPhotosJsonConfig == 1){
            let jsonNumberOfPhotosMessage = `You have uploaded ${numberOfPhotosJsonConfig} photo`;
            let functionNumberOfPhotos = objectVip.getAllPhotos();
            assert.equal(functionNumberOfPhotos, jsonNumberOfPhotosMessage, 'error');
        };
        if(numberOfPhotosJsonConfig > 1){
            let jsonNumberOfPhotosMessage = `You have uploaded ${numberOfPhotosJsonConfig} photos`;
            let functionNumberOfPhotos = objectVip.getAllPhotos();
            assert.equal(functionNumberOfPhotos, jsonNumberOfPhotosMessage, 'error');
        }; 
    });

    it('Get all photos  - RESTRICTED account type', () => {
        let  rawdata = fs.readFileSync('./test_scenarious/restricted/config.json')
        let numberOfPhotosJsonConfig = JSON.parse(rawdata).numberOfPhotos;

        if(numberOfPhotosJsonConfig == 0){
            let jsonNumberOfPhotosMessage = `You have not uploaded any photos yet`;
            let functionNumberOfPhotos = objectRestricted.getAllPhotos();
            assert.equal(functionNumberOfPhotos, jsonNumberOfPhotosMessage, 'error');
        };
        
        if(numberOfPhotosJsonConfig == 1){
            let jsonNumberOfPhotosMessage = `You have uploaded ${numberOfPhotosJsonConfig} photo`;
            let functionNumberOfPhotos = objectRestricted.getAllPhotos();
            assert.equal(functionNumberOfPhotos, jsonNumberOfPhotosMessage, 'error');
        };
        if(numberOfPhotosJsonConfig > 1){
            let jsonNumberOfPhotosMessage = `You have uploaded ${numberOfPhotosJsonConfig} photos`;
            let functionNumberOfPhotos = objectRestricted.getAllPhotos();
            assert.equal(functionNumberOfPhotos, jsonNumberOfPhotosMessage, 'error');
        }; 
    });
});

describe('Testing add new video functionality', () => {

    it('Test add new video - NORMAL account type', () => {
        let  rawdata = fs.readFileSync('./test_scenarious/normal/config.json')
        let numberOfVideosJsonConfig = JSON.parse(rawdata).numberOfVideos;
        let accountType = JSON.parse(rawdata).accountType;



        if(numberOfVideosJsonConfig >= 50 && accountType == 'NORMAL' ){
            let jsonNumberOfVideosMessage = 'You cannot add more videos';
            let functionNumberOfVideo = objectNormal.addNewVideo();
            assert.equal(functionNumberOfVideo, jsonNumberOfVideosMessage, 'error');
        };

        let numberOfVideos = + objectNormal.getAllVideos();
        let functionAddedNumberOfVideos = + objectNormal.addNewVideo();
        assert.equal(functionAddedNumberOfVideos, ++ numberOfVideos, 'error');

    });

    it('Test add new video - VIP account type', () => {

        let numberOfVideos =  + objectVip.getAllVideos();
        let functionAddedNumberOfVideos = + objectVip.addNewVideo();
        assert.equal(functionAddedNumberOfVideos, ++ numberOfVideos, 'error');
    });

    it('Test add new video - RESTRICTED account type', () => {
        let  rawdata = fs.readFileSync('./test_scenarious/restricted/config.json')
        let accountType = JSON.parse(rawdata).accountType;

        if(accountType == 'RESTRICTED' ){
            let jsonNumberOfVideosMessage = 'You cannot add videos';
            let functionAddedNumberOfVideos = objectNormal.addNewVideo();
            assert.equal(functionAddedNumberOfVideos, jsonNumberOfVideosMessage, 'error');
        };
    }); 
});
//////////////////////////////////////////////////////////////////////////////////////
describe('Testing Remove existing video functionality', () => {

    it('Test remove existing video - NORMAL account type', () => {
        let  rawdata = fs.readFileSync('./test_scenarious/normal/config.json')
        let numberOfVideosJsonConfig = JSON.parse(rawdata).numberOfVideos;

        if(numberOfVideosJsonConfig == 0){
            let removeVideoMessage = `You cannot have less than 0 videos`;
            let functionRemoveVideo = objectNormal.removeExistingVideo();
            assert.equal(functionRemoveVideo, removeVideoMessage, 'error');
        };
        let currentNumberOfVideos = objectNormal.getAllVideos();
        let reducedNumberOfVideos = objectNormal.removeExistingVideo();
        assert.equal(reducedNumberOfVideos, currentNumberOfVideos - 1, 'error');
    });

    it('Test remove existing video - VIP account type', () => {
        let  rawdata = fs.readFileSync('./test_scenarious/vip/config.json')
        let numberOfVideosJsonConfig = JSON.parse(rawdata).numberOfVideos;

        if(numberOfVideosJsonConfig == 0){
            let removeVideoMessage = `You cannot have less than 0 videos`;
            let functionRemoveVideo = objectVip.removeExistingPhoto();
            assert.equal(functionRemoveVideo, removeVideoMessage, 'error');
        };
        let currentNumberOfVideos = objectVip.getAllVideos();
        let reducedNumberOfVideos = objectVip.removeExistingVideo();
        assert.equal(reducedNumberOfVideos, currentNumberOfVideos - 1, 'error');
    });

    it('Test remove existing video - RESTRICTED account type', () => {
        let  rawdata = fs.readFileSync('./test_scenarious/restricted/config.json')
        let numberOfVideosJsonConfig = JSON.parse(rawdata).numberOfVideos;

        if(numberOfVideosJsonConfig == 0){
            let removeVideoMessage = `You cannot have less than 0 photos`;
            let functionRemoveVideo = objectRestricted.removeExistingPhoto();
            assert.equal(functionRemoveVideo, removeVideoMessage, 'error');
        };
        let currentNumberOfVideos = objectRestricted.getAllVideos();
        let reducedNumberOfVideos = objectRestricted.removeExistingPhoto();
        assert.equal(reducedNumberOfVideos, currentNumberOfVideos - 1, 'error');
    });
});

describe('Testing get all videos functionality', () => {

    it('Get all videos  - NORMAL account type', () => {
        let  rawdata = fs.readFileSync('./test_scenarious/normal/config.json')
        let numberOfVideosJsonConfig = JSON.parse(rawdata).numberOfVideos;


        if(numberOfVideosJsonConfig == 0){
            let jsonNumberOfVideosMessage = `You have not uploaded any videos yet`;
            let functionNumberOfVideos = objectNormal.getAllVideos();
            assert.equal(functionNumberOfVideos, jsonNumberOfVideosMessage, 'error');
        };
        
        if(numberOfVideosJsonConfig == 1){
            let jsonNumberOfVideosMessage = `You have uploaded ${numberOfVideosJsonConfig} video`;
            let functionNumberOfVideos = objectNormal.getAllVideos();
            assert.equal(functionNumberOfVideos, jsonNumberOfVideosMessage, 'error');
        };

        if(numberOfVideosJsonConfig > 1){
            let jsonNumberOfVideosMessage = `You have uploaded ${numberOfVideosJsonConfig} videos`;
            let functionNumberOfVideos = objectNormal.getAllVideos();
            assert.equal(functionNumberOfVideos, jsonNumberOfVideosMessage, 'error');
        };
    });

    it('Get all videos  - VIP account type', () => {
        let  rawdata = fs.readFileSync('./test_scenarious/vip/config.json')
        let numberOfVideosJsonConfig = JSON.parse(rawdata).numberOfVideos;

        if(numberOfVideosJsonConfig == 0){
            let jsonNumberOfVideosMessage = `You have not uploaded any videos yet`;
            let functionNumberOfVideos = objectVip.getAllVideos();
            assert.equal(functionNumberOfVideos, jsonNumberOfVideosMessage, 'error');
        };
        
        if(numberOfVideosJsonConfig == 1){
            let jsonNumberOfVideosMessage = `You have uploaded ${numberOfVideosJsonConfig} video`;
            let functionNumberOfVideos = objectVip.getAllVideos();
            assert.equal(functionNumberOfVideos, jsonNumberOfVideosMessage, 'error');
        };
        if(numberOfVideosJsonConfigs > 1){
            let jsonNumberOfVideosMessage = `You have uploaded ${numberOfVideosJsonConfig} videos`;
            let functionNumberOfVideos = objectVip.getAllVideos();
            assert.equal(functionNumberOfVideos, jsonNumberOfVideosMessage, 'error');
        }; 
    });

    it('Get all videos  - RESTRICTED account type', () => {
        let  rawdata = fs.readFileSync('./test_scenarious/restricted/config.json')
        let numberOfVideosJsonConfig = JSON.parse(rawdata).numberOfVideos;

        if(numberOfVideosJsonConfig == 0){
            let jsonNumberOfVideosMessage = `You have not uploaded any videos yet`;
            let functionNumberOfVideos = objectRestricted.getAllVideos();
            assert.equal(functionNumberOfVideos, jsonNumberOfVideosMessage, 'error');
        };
        
        if(numberOfVideosJsonConfig == 1){
            let jsonNumberOfVideosMessage = `You have uploaded ${numberOfVideosJsonConfig} video`;
            let functionNumberOfVideos = objectRestricted.getAllVideos();
            assert.equal(functionNumberOfVideos, jsonNumberOfVideosMessage, 'error');
        };
        if(numberOfVideosJsonConfig > 1){
            let jsonNumberOfVideosMessage = `You have uploaded ${numberOfVideosJsonConfig} videos`;
            let functionNumberOfVideos = objectRestricted.getAllVideos();
            assert.equal(functionNumberOfVideos, jsonNumberOfVideosMessage, 'error');
        }; 
    });
});










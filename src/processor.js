const fs = require('fs');

class ConfigSpecification {

    constructor(filePath) {

        this.jsonConfig = require(filePath);
        this.filePath   = filePath;
    }

    addNewFriend() {

        if(this.jsonConfig.numberOfFriends >= 150 && this.jsonConfig.accountType == 'NORMAL'){
            return 'You cannot add more friends'
        };

        if(this.jsonConfig.accountType == 'VIP'){
            let numericalRepresentation   = +this.jsonConfig.numberOfFriends;
            this.jsonConfig.numberOfFriends =  ++numericalRepresentation;
        };

        if(this.jsonConfig.numberOfFriends >= 50 && this.jsonConfig.accountType == 'RESTRICTED'){
            return 'You cannot add more friends'
        };

        let numericalRepresentation   = +this.jsonConfig.numberOfFriends;
        this.jsonConfig.numberOfFriends =  ++numericalRepresentation;
        fs.writeFileSync(this.filePath, JSON.stringify(this.jsonConfig));

    };

    removeExistingFriend() {

        if (this.jsonConfig.numberOfFriends == 0){
            return `You cannot have less than 0 friends`;
        };

        let numericalRepresentation   = +this.jsonConfig.numberOfFriends;
        this.jsonConfig.numberOfFriends =  --numericalRepresentation;
        fs.writeFileSync(this.filePath, JSON.stringify(this.jsonConfig));

        
    }

    getAllFriends() {

        if(this.jsonConfig.numberOfFriends == 0) {
            return `You do not have any friends`;
        }

        if(this.jsonConfig.numberOfFriends == 1) {
            return `You have ${this.jsonConfig.numberOfFriends} friend`;
        }

        return `You have ${this.jsonConfig.numberOfFriends} friends`;
    }

    addNewPhoto() {
        if(this.jsonConfig.numberOfPhotos >= 150 && this.jsonConfig.accountType == 'NORMAL'){
            return 'You cannot add more photos'
        };

        if(this.jsonConfig.accountType == 'RESTRICTED'){
            return 'You cannot add photos'
        };

        let numericalRepresentation   = +this.jsonConfig.numberOfPhotos;
        this.jsonConfig.numberOfPhotos  =  ++numericalRepresentation;
        fs.writeFileSync(this.filePath, JSON.stringify(this.jsonConfig));
    }

    removeExistingPhoto() {

        if (this.jsonConfig.numberOfPhotos == 0){
            return `You cannot have less than 0 photos`;
        };

        let numericalRepresentation   = +this.jsonConfig.numberOfPhotos;
        this.jsonConfig.numberOfPhotos  =  --numericalRepresentation;
        fs.writeFileSync(this.filePath, JSON.stringify(this.jsonConfig));
    }

    getAllPhotos() {

        if(this.jsonConfig.numberOfPhotos == 0) {
            return `You have not uploaded any photos yet`;
        }

        if(this.jsonConfig.numberOfPhotos == 1) {
            return `You have uploaded ${this.jsonConfig.numberOfPhotos} photo`;
        }

        return `You have uploaded ${this.jsonConfig.numberOfPhotos} photos`;
    }

    addNewVideo() {

        if(this.jsonConfig.numberOfVideos >= 50 && this.jsonConfig.accountType == 'NORMAL'){
            return 'You cannot add more videos'
        };

        if(this.jsonConfig.accountType == 'RESTRICTED'){
            return 'You cannot add videos'
        };

        let numericalRepresentation   = +this.jsonConfig.numberOfVideos;
        this.jsonConfig.numberOfVideos  =  ++numericalRepresentation;
        fs.writeFileSync(this.filePath, JSON.stringify(this.jsonConfig));
    }

    removeExistingVideo() {
        
        if (this.jsonConfig.numberOfVideos == 0){
            return `You cannot have less than 0 videos`;
        };

        let numericalRepresentation   = +this.jsonConfig.numberOfVideos;
        this.jsonConfig.numberOfVideos  =  --numericalRepresentation;
        fs.writeFileSync(this.filePath, JSON.stringify(this.jsonConfig));
    }

    getAllVideos() {

        if(this.jsonConfig.numberOfVideos == 0) {
            return `You have not uploaded any videos yet`;
        }

        if(this.jsonConfig.numberOfVideos == 1) {
            return `You have uploaded ${this.jsonConfig.numberOfVideos} video`;
        }

        return `You have uploaded ${this.jsonConfig.numberOfVideos} videos`;
    }
}

const initConfig = (configFile) => {
    return new ConfigSpecification(configFile);
};

module.exports = {
    initConfig
};


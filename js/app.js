var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    self.nicknames = ko.observableArray([
        { nickname: 'Beef' },
        { nickname: 'Gob' }, 
        { nickname: 'Lucifer' },
        { nickname: 'Mop' }
        ]);
    this.level = ko.observable('Newborn');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://www.flickr.com/photos/bigsomething')

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };

    this.levelCounter = ko.computed(function() {
        if(this.clickCount()<10){
            return this.level('Infant');
        } else if(this.clickCount()<20){
            return this.level('Newborn');  
        } else if(this.clickCount()<30){
            return this.level('Teen');
        } else {
            return this.level('Adult');
        }
    }, this);
}

ko.applyBindings(new ViewModel());

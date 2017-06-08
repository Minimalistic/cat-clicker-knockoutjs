var Cat = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://www.flickr.com/photos/bigsomething')
    this.nicknames = ko.observableArray([
        'Beef',
        'Gob', 
        'Lucifer',
        'Mop' 
        ]);
    this.level = ko.observable('Newborn');


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

var ViewModel = function() {
    var self = this;

    this.currentCat = ko.observable( new Cat() );

    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

};

ko.applyBindings(new ViewModel());

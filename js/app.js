var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nicknames = ko.observableArray(data.nicknames);

    this.title = ko.computed(function() {
        var title;
        var clicks = this.clickCount();
        if (clicks < 10) {
            title = 'Newborn';
        } else if (clicks < 20) {
            title = 'Infant';  
        } else if (clicks < 30) {
            title = 'Teen';
        } else {
            title = 'Adult';
        }
        return title;
    }, this);
}

var ViewModel = function() {
    var self = this;

    this.currentCat = ko.observable( new Cat({
        clickCount: 0,
        name: 'Charlie',
        imgSrc: 'img/charlie_IMG_0231.jpg',
        imgAttribution: 'Jason Marsh',
        nicknames: ['CharChar', 'Turd', 'Fluff Butt', 'Chuck']
    }) );

    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

};

ko.applyBindings(new ViewModel());

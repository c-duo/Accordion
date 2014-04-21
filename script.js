$(document).ready(function() {

var accordion = {
    settings: {
        accordionSelector: ".accordion",
        childSelector: ".content",
        closeAll: false,
        mobileSelector: '.mobileAccordion',
        titleSelector: ".title"
    },
    run: function () {
        var self = this;

        $(this.settings.accordionSelector).off();
        $(this.settings.accordionSelector).on("click", " " + this.settings.titleSelector, this.clickFunction);

        /* Making sections accordions in mobile */
        if (window.innerWidth < 769) {
            $(this.settings.mobileSelector).addClass('accordion');
            $(this.settings.accordionSelector).off();
            $(this.settings.accordionSelector).on("click", " " + this.settings.titleSelector, this.clickFunction);
        }
        $(window).resize(function(){
            if (window.innerWidth < 769) {
                $(self.settings.mobileSelector).addClass('accordion');
                $(self.settings.accordionSelector).off();
                $(self.settings.accordionSelector).on("click", " " + self.settings.titleSelector, self.clickFunction);
            } else {
                $(self.settings.mobileSelector + self.settings.accordionSelector).off();
                $(self.settings.mobileSelector).removeClass('accordion').find(self.settings.childSelector).show();
            }
        });
    },
    clickFunction: function (e) {
        var nextElem = $(e.target).next(self.childSelector);
        console.log('click');
        if (self.closeAll) {
            if(nextElem.is(":visible")) {
                e.preventDefault();
            } else {
                $(self.accordionSelector + " " + self.childSelector).slideUp("fast");
                $(self.titleSelector).removeClass("open");
                $(e.target).toggleClass("open");
                nextElem.stop().slideToggle("fast");
            }
        } else {
            if(nextElem.is(":visible")) {
                $(e.target).removeClass("open");
                nextElem.stop().slideUp("fast");
            } else {
                $(e.target).addClass("open");
                nextElem.stop().slideDown("fast");
            }
        }
    }
};

accordion.run();
});
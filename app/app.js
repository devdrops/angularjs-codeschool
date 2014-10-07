(function(){
    var app = angular.module('store',[]);
    
    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: '...',
            canPurchase: true,
            soldOut: true,
            images: [
                {
                    full: 'img/gem-02.gif',
                    thumb: 'img/citrine-thumb.png'
                }
            ],
            reviews: [
                {
                    stars: 0,
                    body: "I love this product!",
                    author: "teste@teste.com"
                },
                {
                    stars: 5,
                    body: "This product sucks!",
                    author: "teste@teste.com"
                },
                {
                    stars: 3,
                    body: "I have no idea what I'm doing!",
                    author: "teste@teste.com"
                }
            ]
        },
        {
            name: 'Pentagonal gem',
            price: 15.33,
            description: '...',
            canPurchase: true,
            soldOut: false,
            images: [
                {
                    full: 'img/gem-01.gif',
                    thumb: 'img/zircon-thumb.png'
                }
            ],
            reviews: [
                {
                    stars: 4,
                    body: "This product sucks. I love it!",
                    author: "admin@teste.com"
                }
            ]
        },
    ]

    app.controller('StoreController', function(){
        this.products = gems;
    });

    app.controller('PanelController', function(){
        this.tab = 1;

        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    });

    app.controller('ReviewController', function(){
        this.review = {};
    });
    
})();
import { MyTour, TourManager } from './my-tour.js';


Hooks.once('ready', function () {
    // Your module ready code here
    game.tourManager = new TourManager();
    game.tourManager.init();
});

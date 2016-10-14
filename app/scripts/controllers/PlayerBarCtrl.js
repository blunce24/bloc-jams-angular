(function() {
    function PlayerBarCtrl(Fixtures, SongPlayer) {
        this.albumData = Fixtures.getAlbum();
        this.songPlayer = SongPlayer;
        /*var init = function(this.albumData, this.songPlayer) {
            this.songPlayer.play(this.albumData.songs[0]);
        };
        init();*/
    }
    
    angular
        .module('blocJams')
        .controller('PlayerBarCtrl', ['Fixtures', 'SongPlayer', PlayerBarCtrl]);
})();
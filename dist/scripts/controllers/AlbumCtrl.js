(function() {
    function AlbumCtrl(Fixtures, SongPlayer) {
        this.albumData = Fixtures.getAlbum();
        this.songPlayer = SongPlayer;
        
        /*Play song on load
        var init = function() {
            SongPlayer.play(Fixtures.getAlbum().songs[0]);
        };
        init();*/
        
        //Pause song on load
        var init = function() {
            SongPlayer.setSong(Fixtures.getAlbum().songs[0]);
            SongPlayer.pause(Fixtures.getAlbum().songs[0]);
        };
        init();
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
    
})();
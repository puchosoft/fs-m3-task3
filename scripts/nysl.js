
var mainScreenDiv = new Vue({
  el: '#mainScreen',
  data: data,
  methods: {
    viewGame:  function(game){
      this.listMode = false;
      this.listVisible = !this.portrait;
      this.backVisible = this.portrait;
      this.detailVisible = true;
      this.detailDate = game.date;
      this.detailTime = game.time;
      this.detailTeam1Id = game.team1;
      this.detailTeam1Name = this.teams[game.team1 - 1].name;
      this.detailTeam2Id = game.team2;
      this.detailTeam2Name = this.teams[game.team2 - 1].name;
      this.detailSite = this.locations[game.location].name;
      this.detailDomicile = this.locations[game.location].domicile;
      this.detailMap = this.locations[game.location].map;
    },
    back: function(){
      this.listMode = true;
      this.backVisible = false;
      this.detailVisible = false;
      this.listVisible = true;
    }
  }
});

function changeOrientation() {
  if(typeof(orientation)==='undefined'){
    vertical = true;
  }
  else {
    vertical = (orientation == 0);
  }
  
  data.portrait = vertical;
  if (data.portrait) {
    data.listVisible = data.listMode;
    data.detailVisible = !data.listMode;
    data.backVisible = !data.listMode;
  }
  else {
    data.listVisible = true;
    data.detailVisible = !data.listMode;
    data.backVisible = false;
  }
}

window.onorientationchange = changeOrientation;
changeOrientation();

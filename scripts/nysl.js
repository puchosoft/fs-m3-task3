var divGameList = new Vue({
  el: '#header',
  data: dataHeader,
  methods: {
    back: function(){
      this.visible = false;
      dataDetail.visible = false;
      dataList.visible = true;
    }
  }
});

var divGameList = new Vue({
  el: '#gameList',
  data: dataList,
  methods: {
    viewGame:  function(game){
          this.visible = false;
          dataDetail.visible = true;
          dataDetail.date = game.date;
          dataDetail.time = game.time;
          dataDetail.team1Id = game.team1;
          dataDetail.team1Name = this.teams[game.team1 - 1].name;
          dataDetail.team2Id = game.team2;
          dataDetail.team2Name = this.teams[game.team2 - 1].name;
          dataDetail.site = this.locations[game.location].name;
          dataDetail.domicile = this.locations[game.location].domicile;
          dataDetail.map = this.locations[game.location].map;
          dataHeader.visible = true;
    }
  }
});

var divGameDetail = new Vue({
  el: '#gameDetail',
  data: dataDetail
});

function gameClick(game){
  alert(game.date);
}
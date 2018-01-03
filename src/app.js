new Vue({
    el: '#app',
    data: {
      title: `You are my friend...let's fight!`,
      started: false,
          playerHealth: 100,
          monsterHealth: 100,
          specialCounter: 0,
          hitLog: []
    },
      methods: {
          toggleStart: function() {
              this.started = !this.started;
          },
          damageHit: function(person) {
              let randHit = Math.floor((Math.random() * 10) + 1);
              if (person == 'player') {
                  this.playerHealth -= randHit;
                  this.hitLog.unshift('Monster hit Player: ' + randHit);
              } else {
                  this.monsterHealth -= randHit;
                  this.hitLog.unshift('Player hit Monster: ' + randHit);
              }
          },
          attack: function() {
              this.damageHit('monster');
              this.damageHit('player');
          },
          specialAttack: function() {
              if (this.specialCounter < 3) {
                  this.damageHit('monster');
                  this.specialCounter++;
              } else {
                  alert('You have used your special attacks!');
              }
          },
          restartGame: function() {
              this.toggleStart();
              this.hitLog = [];
              this.playerHealth = 100;
              this.monsterHealth = 100;
              this.specialCounter = 0;
          }
      },
      computed: {
          monsterBar: function() {
              return this.monsterHealth + '%';
          },
          playerBar: function() {
              return this.playerHealth + '%';
          }
      },
      watch: {
          playerHealth: function() {
              if (this.playerHealth < 1) {
                  alert('You LOST!');
                  this.restartGame();
              }
          },
          monsterHealth: function() {
            if (this.monsterHealth < 1) {
                alert('You WON!');
                this.restartGame();
            }
        }
      }
  });
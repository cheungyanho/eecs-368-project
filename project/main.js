document.addEventListener("DOMContentLoaded", () => {
  const board = document.querySelectorAll(".board div");
  const player = document.querySelector("#player");
  const control = document.querySelectorAll(".button div");
  let currentplayer = 1;
  let vertwin = 0;
  let horiwin = 0;
  let diagwin = 0;

  control[0].addEventListener('click', () => {
    place(0);
    checkwin();
  })
  control[1].addEventListener('click', () => {
    place(1);
    checkwin();
  })
  control[2].addEventListener('click', () => {
    place(2);
    checkwin();
  })
  control[3].addEventListener('click', () => {
    place(3);
    checkwin();
  })
  control[4].addEventListener('click', () => {
    place(4);
    checkwin();
  })
  control[5].addEventListener('click', () => {
    place(5);
    checkwin();
  })
  control[6].addEventListener('click', () => {
    place(6);
    checkwin();
  })

function place(j){
  for(var i=j; i<board.length-7; i=i+7)
  {
    if(board[i+7].classList.contains("mark"))
    {
      if(!board[i].classList.contains("mark"))
      {
        if(currentplayer==1)
        {
          board[i].classList.add("mark");
          board[i].classList.add("player1");
          currentplayer = 2;
          player.innerText = "2";
        }else if(currentplayer==2)
        {
          board[i].classList.add("mark");
          board[i].classList.add("player2");
          currentplayer = 1;
          player.innerText = "1";
        }
      }
    }
  }
}

function checkwin(){
  const win = [[0, 1, 2, 3], [41, 40, 39, 38], [7, 8, 9, 10], [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], [21, 22, 23, 24],[20, 19, 18, 17], [28, 29, 30, 31], [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], [0, 7, 14, 21], [41, 34, 27, 20],[1, 8, 15, 22], [40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], [3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25],[37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], [41, 33, 25, 17],[7, 15, 23, 31], [34, 26, 18, 10], [14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], [6, 12, 18, 24], [28, 22, 16, 10],[13, 19, 25, 31], [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22],[2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], [40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32], [11, 7, 23, 29], [12, 18, 24, 30], [1, 2, 3, 4], [5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9], [15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25], [26, 25, 24, 23], [29, 30, 31, 2], [33, 32, 31, 30], [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28], [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34]];
  for(var i=0; i<win.length; i++)
  {
    const a = board[win[i][0]];
    const b = board[win[i][1]];
    const c = board[win[i][2]];
    const d = board[win[i][3]];
    if(a.classList.contains("player"+currentplayer)&&
       b.classList.contains("player"+currentplayer)&&
       c.classList.contains("player"+currentplayer)&&
       d.classList.contains("player"+currentplayer))
    {
      alert("Player " + currentplayer + " wins!!");
      location.reload(true);
    }
  }

}

})

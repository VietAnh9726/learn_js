// Tự nghĩ ra 1 mảng trong thực tế.
game = ['cod', 'pubg', 'lmht', 'csgo'];
console.log(game[0]);
console.log(game[1]);
console.log(game[2]);
console.log(game[3]);

// In ra các phần tử trong mảng theo đúng thứ tự bằng 2 cách và ngược thứ tự bằng cách 1
// C1
var game = ['cod', 'pubg', 'lmht', 'csgo'];
for(var i = 0 < game; i+=1)
{
    console.log(game[i])
}
// C2
var game = ['cod', 'pubg', 'lmht', 'csgo'];
for (var game of game) 
{
  console.log(game)
}
// ngược thứ tự bằng cách 1
var  game = ['cod', 'pubg', 'lmht', 'csgo'];
for (var i = 3; i >= 0; i--) 
{
  console.log(game[i])
}

// Thêm 1 phần tử mới vào mảng. (mới)
game = ['cod', 'pubg', 'lmht', 'csgo','dota'];

// Xóa 1 phần tử trong mảng ở vị trí đầu tiên.
game = ['pubg', 'lmht', 'csgo','dota'];

// Xóa 1 phần tử trong mảng ở vịt trí cuối cùng.
game = ['cod', 'pubg', 'lmht', 'csgo'];

// Nghĩ thêm 1 mảng khác
sport = ['badminton', 'soccer', 'volleyball', 'running'];
console.log(sport[0]);
console.log(sport[1]);
console.log(sport[2]);
console.log(sport[3]);

// Hợp nhất (merge) 2 mảng lại với nhau. In ra tất cả các phần tử ở mảng hợp nhất.
const hi = ['🤡', '🙁']
const clown = ['😇', '👿']
const icon = hi.concat(clown);
console.log(hi);
console.log(clown);
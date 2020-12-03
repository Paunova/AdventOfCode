const baseInput = 
`..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;

const input = 
    `.........#.#.#.........#.#.....
    ...#......#...#.....#.....#....
    #.....#.....#.....#.#........#.
    ......#..#......#.......#......
    .#..........#.............#...#
    ............#..##.......##...##
    ....#.....#..#....#............
    .#..#.........#....#.#....#....
    #.#...#...##..##.#..##..#....#.
    .#.......#.#...#..........#....
    ...#...#........##...#..#.....#
    ..................#..........#.
    .....#.##..............#.......
    ........#....##..##....#.......
    ...#.....#.##..........#...##..
    .......#.#....#............#...
    ..............#......#......#..
    #.......#...........#........##
    .......#.......##......#.......
    ................#....##...#.#.#
    #.......#....................#.
    .##.#..##..#..#.#.....#.....#..
    #...#............#......##....#
    .#....##.#......#.#......#..#..
    ..........#........#.#.#.......
    ...#...#..........#..#....#....
    ..#.#...#...#...##...##......#.
    ......#...#........#.......###.
    ....#...............#.###...#.#
    ..................#.....#..#.#.
    .#...#..#..........#........#..
    #..........##................##
    ...#.....#...#......#.#......#.
    ......#..........#.#......#..#.
    ..#......#.....................
    ............#.........##.......
    ......#.......#........#.......
    #.#...#...........#.......#....
    .#.#........#.#.#....#........#
    #.....##........#.#.....#.#....
    .#...#..........##...#.....#..#
    .........#....###............#.
    ..#...#..............#.#.#.....
    .....#.#.#..#.#.#.###......#.#.
    .#.##...#.......###..#.........
    .....##....#.##..#.##..#.......
    ..#...........##......#..#.....
    ................##...#.........
    ##.....................#..#.###
    ...#..#....#...........#.......
    .#.............##.#.....#.#....
    .......#.#.#....##..#....#...#.
    ...##..#..........#....#.......
    ....##......#.........#........
    .##....#...........#.#.......#.
    ...#...#.##.......#.#..........
    ..#.........#.##...........#...
    ....#.##........#.......#...##.
    ...................#..#..#...##
    #...#......###..##.#..###......
    #.............#.#........#...#.
    ...#...#..#..#..............#..
    #.....#..#...#...#......#.#..#.
    ...##.............#........##.#
    ......#.#.........#.#....#...#.
    ........##............#...#....
    ............#.#...#......#.....
    ...#...........#...#...........
    .........#.#......#............
    ....#.............#..#.....#..#
    #.....#...........#.....#.#.#.#
    .............#.....##......#...
    ...................###.#......#
    #.##.....#...#..#..#...#....#..
    ............#.....#....#.#.....
    #....#..#..........#....#..#...
    ..........##..................#
    ....#.......###..#......###....
    .......#...#.##.##..#....##....
    ...##...............#.....#...#
    #...........#...#......#..#..#.
    ..##....#.......#...#.....#....
    .......##..............#.##..#.
    .#......#..........#.......#...
    ....##...................#.#..#
    ......#....###................#
    .#........#...........#........
    .#.....##....#..##...........#.
    ##..............##...#.......#.
    ......#..........#..........##.
    ..#.....#.#.........####....#..
    .............#......#......#...
    ..#.............#...........##.
    #.#...#........#..........##...
    ...#....#.....#.....#.....##...
    ......#........................
    ......#..#...#......#.....#....
    ......#....##.....#....#.......
    #.#......#.##..#...............
    ..........#.#.##..##..#........
    ......#.#..#....###.#..........
    ........................#....#.
    #.#.............#....#.....##.#
    .#.#..........#.......#..#....#
    ..#...#......#..#..#...#.#...#.
    ...#.##...###..................
    ........#.#...........#...#....
    ........#..........#....#......
    #....#........#.......##.....#.
    ......###...##...#......#......
    ............#.......#.....##..#
    ....#..#.......##......#.......
    #............##................
    ...............#..#......#...#.
    .#....##...#......#............
    #...#................#.........
    ..#....#..#........##......#...
    ....#....###......##.#.......#.
    ......#.#..#.#..#....#..#......
    ....#..........#..#..#.........
    .#..#.......#......#........#..
    .......#..#..#............#....
    .............#...#....#..#.....
    ..............#.#.#.........#..
    #.....##.......#....#..........
    ...#.....#......#..............
    ...##.#..#.#........#..##....#.
    .......#.#.....##..#...........
    .....#.#....#..................
    .#......#.###..............##..
    ..#....#...#..#...##...##....#.
    ..........##..#...#..#.........
    ..#............#........#.#...#
    .........................#.#.#.
    ......#........#.#..#......##.#
    #.#......#..#.........#........
    .....#........#......#...#.#...
    ........##....##....#.#........
    ....#....#.#...#...##....#..#..
    #.............#.....#..........
    #............##..#............#
    ..#.#......#........#..........
    .#......#......#.#.##.##.......
    ..#.....#..........#......##...
    ...#......#...#.##....#.....##.
    ......#......#...........#.#...
    ....#........#..#..#........#.#
    ....#.........#.....#...#.#.#..
    ....#.....###........#.........
    .............##........#.#.....
    ...#............#........#.#.#.
    ......#....#.......#.#.........
    .....#................#........
    .#....#..#.#.............#...#.
    #..##...#............#......#..
    ...#..#........................
    .#.#...........#.......#.......
    #....###............##.........
    ...##....#.#............##.....
    .........####......#........#..
    .....#.......#.#...............
    .......#...#.###..#....#...#..#
    ...#.....##..#....#..#.#...###.
    .............#........#.#.#..#.
    ................#..........##..
    .......####..##..##........##.#
    ..#......#..#..#.#.##..........
    #....#........#....#...###.#.#.
    ........##........##.....#.....
    ...........#.#...........#....#
    #.............#...........#....
    ...#.........#...#....#.....#..
    ..##......#...#...............#
    .............#.........#....#..
    ..#...........#..#........#.##.
    .#.#......#.............##...#.
    .#......#.....##.#..#..#.......
    ....##......#..................
    .#.#..##............#....#....#
    ........#...##.............#..#
    ........#....##.....#......###.
    .........#....#.#..............
    #.....#........................
    .#..#....#.....#......#.###..#.
    ..........#...#....##....#..#..
    ...#.#.#...##..#..#......#..#.#
    #............#.....#....#......
    #.###...#.#......###..#....#..#
    ...#.###........#......#....#..
    ..#.##...#.........#.#.........
    ............##.................
    ....#..........#.#.#.#.#....#..
    ...##.#...#.......#.......##..#
    ....##.#........#....#...#.....
    .............#.#....#...#.....#
    ...#......................##...
    ..#...#.....#.....#........#..#
    ..#..#.......#....#..##.....#..
    ..#..#.#.......................
    .......##..#....#....#..#......
    ....#......##....#............#
    .#...#..#..#.##...#.#...#......
    .....#......#....#.........#...
    .##......##.........#....#.....
    #...........#...##.....#......#
    .....#.#.......#.........#.....
    .........#..........#..####.##.
    ............#..#......#.#......
    .#.............#........#.#....
    ......#......#...#..#....#####.
    .........##.#..##...###..#....#
    ....#.#....#.#..#.........#....
    ..#.............#...##...##....
    ........#..........#.##..#....#
    .....#...#..##........#.#..#...
    ##..#.#.....#............#.....
    .............#........##...##..
    #......####.....##.............
    ..##.....##....###..#.#....#...
    ......##.##.#...#..#.#..##.....
    ......#.................#......
    #.....#.#...#......#.#....#....
    ....#.#........#..............#
    ##........#.......##.#...##...#
    ..#..................#.#....#..
    ...........#..........#.#.....#
    ........##.#.....#......#..#..#
    .....#....#..#.....#.........##
    #.#..#..#...#......#..........#
    #...##.....#..#.#.......#.##...
    ..#....##...............#......
    #..........#.#.........#.#....#
    ..............#......#....#....
    .....#...........#...#...#...#.
    ...#......#....#....#..........
    .#..........#.#....##..##....#.
    ..............#.........#.#....
    .......#.....#.....#...##....#.
    ##.#.........#....#.....#.#....
    ....#..#......#................
    ......##.....#.......##........
    .....##...#........#...#...#...
    ..#...#...#..#..#.#......#..#..
    ....#...#.......#..............
    ....#..#.........###........#..
    ....#.............##..#........
    ..........##.#.......##..##....
    #.##..................#.....#..
    #........#........#.....#......
    .#...#......#..................
    #....##.##......#...#.........#
    ......#.##..##................#
    ............#.........##.......
    ..........####.#........#.....#
    .##...#...#....#..#............
    .#.##...#..#...#......#......##
    .....#.#....#..###......#.#.#..
    ...#.......................##..
    ......................#.......#
    ..#....#.........#..#.#.....#..
    .#....#..#....#...#............
    ..........#...##.....#.#..#....
    ........#..#..#....#...#...#...
    .....#......#.#................
    .....#...........#...#.........
    .....#...##..#.#....#..#.....#.
    #.......#.............##.......
    ................#....#.#..#....
    .#..##...#.#........#......#.#.
    .#.##..........#...............
    ....##......#....#........#....
    ....#..#....#.##.#.............
    .......#..#......##.#.....#....
    .......#.....#.............#...
    .....#....#.......#............
    ........#.#...##..##..##.......
    #.........##....##...##........
    ........#..#.#..........###.#..
    ..........................#.#..
    #.....#.......#..#........#....
    ...##.....#.......#......#.....
    .#.#..#...........#...........#
    .....##..#........#...####.....
    .#.#...##.#.#..#..#.#..#.......
    ..#.##.#...#.#.#...#..#........
    ............#..........#..#....
    ...............#..##.#.........
    .............#.....#....#......
    ...##..##......##..........#...
    ..#.......#....#..........#...#
    .##................#.#.#.......
    .....##.....#..#.....#.........
    ......#.#.......#......#..#....
    .....#.....#........#.......##.
    ......#.......##......#...#...#
    ....#...........###.........#..
    ...#.....#.........##........#.
    ..#.....#..............#.......
    ....#.......#...#....#....#..##
    ......#...........#...........#
    .##......#......#.#.....#.##...
    ....#..##......#...#..#.#.###..
    .......#.#....#......#..#......
    ..........#........#...........
    #.##.........#.#.#...#...#.#...
    .#......###.....#....#.#....#..
    ...................##..#.......
    ....#..#..............#.#.....#
    #..................#.....#.....
    ...........##.##.......#..#.#..
    ........#.#......#...........#.
    #..#.......#...#...........#.#.
    ......##...........#...........
    .........#.#........#........#.
    #......#....#.#.....#..#.......
    ............#..#.....##...#....
    .#......#..#......#.........#..
    .......#...#.........#.##.....#
    ........................#..#...
    .###..............#.#..#.......
    .....#.........#.......#......#
    ..##..##....#.....#.......#.#..
    ...###.#..#.##............#....`;

module.exports = {baseInput, input};
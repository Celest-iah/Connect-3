//Setting board size variables for dynamic board building
const height = 6
const width = 3
const winningSize = 3
//Control Variables
var turn = 1
var won = false
//Building initial board and creating list of elements so they can be added at once
const elementList = []
createBoard(height, width)
//Creating dictionary of all tiles for logic purposes
const allTiles = []
for(var i = 0;i < height;++i){
    for(var v = 0;v < width;++v){
        allTiles.push(0)
    }
}

function setTile(tileID, tileClass){
    if(won == true){
        
    }else if(tileClass == 'noPlayer'){
        //Calculating lowest tile available
        currentHeight = tileID.substring(1,2)
        console.log(currentHeight)
        currentRow = tileID.substring(3,4)
        console.log(currentRow)

        for(i=height;i>0;--i){
            var tileClass = document.getElementById('C' + i + 'R' + currentRow).classList
            if(tileClass.contains('noPlayer')){
                //Setting the tile to be the lowest one found
                var listSpace = (i*currentRow)-1
                console.log(listSpace)
                tileID = 'C' + i + 'R' + currentRow
                break
            }
        }
        //Removing the blank class from the tile
        document.getElementById(tileID).classList.remove('noPlayer')
        switch(turn){
            //Check current turn and process placing of tiles and incrementing the turn counter
            case 1:
                turn = 2
                document.getElementById('status').innerHTML = 'Current Turn: Player 2'
                document.getElementById('status').style.color = '#00FF35'
                document.getElementById(tileID).classList.add('player1')
                allTiles[listSpace]=1
                break
            case 2:
                turn = 1
                document.getElementById('status').innerHTML = 'Current Turn: Player 1'
                document.getElementById('status').style.color = '#FF00CA'
                document.getElementById(tileID).classList.add('player2')
                allTiles[listSpace]=2
                break
        }

        //Check if a winner has been found
        var winner = checkWinnings(allTiles,listSpace)
        switch(winner){
            case 0:
                break
            case 1:
                won = true
                document.getElementById('status').innerHTML = 'Player 1 Wins!'
                document.getElementById('status').style.color = '#FF00CA'
                break
            case 2:
                won = true
                document.getElementById('status').innerHTML = 'Player 2 Wins!'
                document.getElementById('status').style.color = '#00FF35'
                break
        }
    }else{
        //Invalid input handling
        text = 'Current Turn: Player ' + turn + ' - Please select an unoccupied tile'
        document.getElementById('status').innerHTML = text
    }
}

function createBoard(height, width){
    //Creating board variables
    console.log('Board Height: ' + height)
    console.log('Board Width : ' + width)
    const board = document.createElement('div')
    board.classList.add('board')

    //Using 1 instead of 0 for incremental for the sake of creating ID's
    for(var i = 1;i < height+1;++i){
        for(var v = 1;v < width+1;++v){
            var currentButton = document.createElement('button')


            currentButton.setAttribute('onClick','setTile(this.id, this.classList)')


            currentButton.setAttribute('class', 'noPlayer')

            //Giving the button its unique id
            var currentID = 'C' + i + 'R' + v
            console.log(currentID)
            currentButton.setAttribute('id', currentID)
            //Add button to the list
            elementList.push(currentButton)
        }
        //Add LB to the list
        elementList.push(document.createElement('br'))
    }
    for(var i = 0; i < elementList.length;++i){
        board.append(elementList[i])
    }
    document.body.append(board)
}

function checkWinnings(rawTiles,tileIndex){
    var winner = 0

    //Turning list of tiles into a more manageable list
    tiles = []
    totalListIncrement = 0;
    console.log(rawTiles)
    for(var i = 0;i < width;++i){
        var tempList = []
        for(var v = 0; v < height;++v){
            
            tempList.push(rawTiles[totalListIncrement])
            ++totalListIncrement
        }
        tiles.push(tempList)
        
    }

    return winner
}
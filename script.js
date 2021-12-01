//Setting board size variables for dynamic board building
const height = 6
const width = 3
const winningSize = 3
var won = false
//Setting colors in reference to player classes for easier editing of code in the future
const colors = {pink : 'player1', green : 'player2'}
var turn = 1
//Building initial board
createBoard(height, width)
//Printing out current turn for debugging and tracking purposes
console.log('Player '+turn)

//Creating dictionary of all tiles for logic purposes
const allTiles = []
for(var i = 1;i < height+1;++i){
    for(var v = 1;v < width+1;++v){
        var currentID = 'C' + i + 'R' + v
        allTiles.push({key:currentID,value:0})
    }
}
console.log(allTiles)


function setTile(tileID, tileClass){

    if(won == true){
        
    }else if(tileClass == 'noPlayer'){
        //Calculating lowest tile available
        currentHeight = tileID.substring(1,2)
        console.log(currentHeight)
        currentRow = tileID.substring(3,4)
        console.log(currentRow)

        //'C' + i + 'R' + currentRow
        //for(i=currentHeight;i<height;++i){
        //    var tileClass = document.getElementById('C' + i + 'R' + currentRow).classList
        //    if(tileClass.contains('noPlayer')){

        //    }else{
        //        tileID = 'C' + i-1 + 'R' + currentRow
        //        console.log(tileID)
        //    }
        //}

        for(i=height;i>0;--i){
            var tileClass = document.getElementById('C' + i + 'R' + currentRow).classList

            if(tileClass.contains('noPlayer')){
                tileID = 'C' + i + 'R' + currentRow
                break
            }
        }

        //Removing the blank class from the tile
        document.getElementById(tileID).classList.remove('noPlayer')





        //Setting the tile to be the correct color
        switch(turn){
            case 1:
                document.getElementById(tileID).classList.add('player1')
                break
            case 2:
                document.getElementById(tileID).classList.add('player2')
                break
        }
        //Processing turn to next player
        if(turn == 1){
            turn = 2
            document.getElementById('status').innerHTML = 'Current Turn: Player 2'
            document.getElementById('status').style.color = '#00FF35'
        }else{
            turn = 1
            document.getElementById('status').innerHTML = 'Current Turn: Player 1'
            document.getElementById('status').style.color = '#FF00CA'
        }

        console.log('Player '+turn)
    }else{

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

    //Creating list of elements so they can be added at once
    const elementList = []
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
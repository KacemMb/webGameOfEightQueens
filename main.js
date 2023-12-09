document.addEventListener("DOMContentLoaded", function () {
    const chessboard = document.getElementById("chessboard");

    function createChessboard() {
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                let position;
                const square = document.createElement("div");
                square.classList.add("square", (row + col) % 2 === 0 ? "even" : "odd");
                square.dataset.position = "free";
                square.dataset.row = row;
                square.dataset.col = col;
                square.addEventListener("click", handleSquareClick);
                chessboard.appendChild(square);
            }
        }
    }

    function handleSquareClick() {
        const row = parseInt(this.dataset.row);
        const col = parseInt(this.dataset.col);
        const position = this.dataset.position;
        console.log(row,col);
        if(position == "free"){
            highlightNeighbours(row, col)
            const image = document.createElement("img");
            image.src = "./chess.svg";
            image.classList.add("icon");
            this.appendChild(image);
            this.dataset.position = "queen";
        }
    }
    function highlightNeighbours(row, col) {
        // Highlight the entire vertical and horizontal lines
        for (let i = 0; i < 8; i++) {
            highlightSquare(row, i); // Highlight horizontal line
            highlightSquare(i, col); // Highlight vertical line
        }

        // Highlight diagonals
        for (let i = -7; i < 8; i++) {
            highlightSquare(row + i, col + i); // Highlight main diagonal
            highlightSquare(row + i, col - i); // Highlight anti-diagonal
        }
    }

    function highlightSquare(row, col) {
        const square = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        if (square) {
            square.dataset.position = "danger";
            square.classList.add("danger");
            if((row+col)%2 === 0 ){
                square.classList.add("Neven");
            }else{
                square.classList.add("Nodd");
            }
        }
    }

    createChessboard();
});

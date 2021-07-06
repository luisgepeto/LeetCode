function matrixReshape(mat: number[][], r: number, c: number): number[][] {    
    const originalRows = mat.length;
    const originalCols = mat[0].length;  
    const originalSize = originalRows*originalCols;
    const newSize = r*c;
    if(newSize !== originalSize) return mat;

    const newMatrix: number[][] = [];      
    let newRow:number[];
    mat.map((row:number[], rowIndex:number):void => {
        row.map((column:number, columnIndex: number):void => {                
              const oldIndex = rowIndex*(originalCols) + columnIndex;              
              if(oldIndex % c === 0){
                  newRow = [];
                  newMatrix.push(newRow);
              }
              newRow.push(mat[rowIndex][columnIndex]);             
        });
    });
    return newMatrix;
}

console.log(matrixReshape([[1,2],[3,4],[5,6],[7,8],[9,10],[11,12]],1, 12));
console.log(matrixReshape([[1,2],[3,4],[5,6],[7,8],[9,10],[11,12]],2, 6));
console.log(matrixReshape([[1,2],[3,4],[5,6],[7,8],[9,10],[11,12]],3, 4));
console.log(matrixReshape([[1,2],[3,4],[5,6],[7,8],[9,10],[11,12]],4, 3));
console.log(matrixReshape([[1,2],[3,4],[5,6],[7,8],[9,10],[11,12]],2, 6));
console.log(matrixReshape([[1,2],[3,4],[5,6],[7,8],[9,10],[11,12]],12, 1));
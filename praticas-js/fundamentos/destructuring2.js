const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] 
console.log(n1, n3, n5, n6) // n5 é undefined pq não tem valor na posição 4 do array e n6 é 0 pq foi atribuído um valor padrão

const [, [, nota]] = [[, 8, 8], [9, 6, 8]] // pegando o valor 6
console.log(nota)
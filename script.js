const students = [
  {
    name: "Luis",
    first: 10,
    second: 10,
    
  },
  {
    name: "Junior",
    first: 6,
    second: 5,
  },
  {
    name: "Vinicius",
    first: 8,
    second: 7.5,
  },
  {
    name: "Emanoel",
    first: 10,
    second: 10, 
  },
]


function showMediaStudent(student) {

  return`
  O aluno(a), ${student.name}, tirou ${student.first} na primeira prova, e tirou ${student.second} na segunda prova, sua media foi de ${((student.first + student.second) / 2).toFixed(1)}.

  `
  
}

for (let student of students) {
  let ShowMedia = showMediaStudent
  alert(showMediaStudent(student))

  result = ((student.first + student.second) /2)

  if(result >=7) {
    let result = alert(`Parabêns! você passou!`)
  } else {
    let result = alert(`Não foi dessa vez, tente na proxima!`)
  }
}




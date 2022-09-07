let isOk = true;

export default function fetchData(time, toDo){
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      if(isOk){
        resolve(toDo)
      }else{
        reject("Fatal Error")
      }
    })
  }, time)
}
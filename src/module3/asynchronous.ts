// // Mocking

// // Json Place Holder
// interface IToDo {
//     userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }
// const getToDo = async (): Promise<IToDo> => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     return await response.json();
// };

// const getToDoData = async(): Promise<void> => {
//     const result = await getToDo();
//     console.log(result);
// };

// getToDoData();

// const makePromise = (): Promise<string> => {
//     return new Promise<string>((resolve, reject) => {
//         const data : string = "Data is fetched"
//         if(data){
//             resolve(data)
//         }
//         else {
//             reject("Failed to fetched data")
//         }
//     })
// };


// const getPromiseData = async (): Promise<string> => {
//     const data = await makePromise();
//     return data
// }

// // Promise<string> Promise<boolean> 
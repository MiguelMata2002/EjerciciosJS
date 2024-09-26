var myArray=[1,2,3,4,3]
function maximen(){
    let minumber=myArray[0]
    let maxnumber=myArray[0]
    for(let i=0;i<myArray.length;i++){
        if(myArray[i]>maxnumber){
            maxnumber=myArray[i]
        }
        if(myArray[i]<minumber){
            minumber=myArray[i]
        }
            
    }
    console.log(`max:${maxnumber} men:${minumber}`)
}
maximen()
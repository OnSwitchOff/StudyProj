const base="https://api.hh.ru/";

const initVocData=[  
  {'url':"industries",from:['industries']},
  {'url':'specializations',from:['specializations']},
  {'url':"dictionaries",from:['expirience']},
  {'url':'dictionaries',from:['employment']}
];

const outVocData=[];

const searchName = function(dataObj,fromArr){
  let result=dataObj;
  for (let i = 0; i < fromArr.length; i++) {  
    result=result[fromArr[i]];
  }
  return result.map(function(value) {return value.name});
}

/*
console.log('---');
console.log(searchName(testObj,['industries']));*/


const axiosReq=function(url,index){
   axios.get(url)
    .then(function (response) {
     let tempObjArr=[];
     (response.data).forEach(function(value){(searchName(value,(initVocData[index].from))).forEach(function(value){tempObjArr.push(value)})});
      outVocData.push({vocName:initVocData[index].url,vocValList:_.uniq(tempObjArr)});
    })
    .catch(function (error) {
      console.log(error);
    })
}


/*for (let i = 0; i < initVocData.length;i++) {
    axiosReq(base+initVocData[i].url,i);  
}*/

let i=0;

const getVocData=function(initVocData){
  axiosReq(base+initVocData[i].url,i)
  .then(function(){
    i++;
    console.log(i);
    if (i<initVocData.length) {
      getVocData();
    }
    else{
      console.log(outVocData);
    }
  });
};

getVocData(initVocData);
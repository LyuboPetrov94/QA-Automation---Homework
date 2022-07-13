const fs = require('fs');
const TEST_DIR_SRC = `${__dirname}\\scenario-1`;
// - модул за работа с файлова система; fs е обект - съдържа всички функции за работа с файлове
// oбект - набор от променливи + функции


// 1. Влизаме в папка scenario-1
// стъпка 1 и 2 са близки по аналогия от гл.точка на автоматизираното тестване, понеже четем съдържанието на папката

// 2. Откриваме всички файлове поместени в нея
// __dirname дава ми пътя до текущия файл, но само файла, който изпълнявам в момента
// -- за да не се специфицират директно пътища

const scenario1FileList = fs.readdirSync(TEST_DIR_SRC);
//console.log(scenario1FileList);
//console.log(`${__dirname}\\scenario-1`);
//магическа променлива на NodeJS


// 3. Верифицираме наличието им и техните имена

// while - цикъл с условия - предусловие
// ползваме когато условието е генерално дефинирано (те нямат брояч/индекс)
// let index = 0; 
// while(index < scenario1FileList.length){
//     // length - показва всички елементи в масива
//     console.log(scenario1FileList[index]);
//     index = index + 1;
// }

// for цикли - специално разработени за МАСИВИ/ колекции
// компактна версия на while
// позициите са строго дефинирани -- инициализиране на променлива; сценарии; инкрементация(увеличаване на стойност)
// For цикъл - модифицирана версия на while за масиви
// ползва се когато искаме да четем  И ИСКАМЕ ДА ПРАВИМ ПРОМЕНИ

//              for(let index =0; index<scenario1FileList.length; index = index + 1  ) {
//               console.log(scenario1FileList[index]);
//                  }

// трети вариант - модифициран/разширен for - ползва се само за колекции и за обхождането им
// ползва се когато искаме да ЧЕТЕМ  - НЕ ПРЕДПОЛАГА ПРОМЕНИ, разполага с резултатната стойност
for(const fileName of scenario1FileList){
   // console.log(fileName); 
   if(isFileNameInTheList(fileName)) {
    
   }
}


function isFileNameInTheList(fileName) {

    //          const referenceFileName =['main', 'traffic', 'capacity', 'click', 'volume'];
    //          // вариант с масив, по-малко писане
    //          return referenceFileName.includes(fileName)
    //          return ['main', 'traffic', 'capacity', 'click', 'volume'].includes(fileName);


    if (fileName == 'main') return true;
    if (fileName == 'traffic') return true;
    if (fileName == 'capacity') return true;
    if (fileName == 'click') return true;
    if (fileName == 'volume') return true;
  
    return false;
}

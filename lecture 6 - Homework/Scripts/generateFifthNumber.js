function generateFifthNumber()
{
    let foodCategoryNumber = +prompt("Коя от следните категории продукти пазарувате? (посочете само номера на категорията) : 1 - плодове и зеленчуци; 2 - месо и месни продукти; 3 - цигари и алкохол; 4 - млечни продукти; 5 - захарни изделия;");
                                
    let frequency = +prompt("Колко често си купувате избраният продукт? (посочете само номера на честотата) : 1 - рядко; 2 - понякога; 3 - често");        
                                
    userData.foodCategory       = foodCategoryNumber;            
    userData.frequencyCategory  = frequency;

    number = foodCategoryNumber + frequency;
    return number                        
};
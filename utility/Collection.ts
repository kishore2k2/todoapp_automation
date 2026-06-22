
//properties reader

import PropertiesReader from 'properties-reader';
const properties = PropertiesReader('data/config.properties');
export const propdata={
    url:properties.get('url') as string,
    task1:properties.get('task1') as string,
    task2:properties.get('task2') as string,
    task3:properties.get('task3') as string,
    task4:properties.get('task4') as string,
    task5:properties.get('task5') as string,
    task6:properties.get('task6') as string,
    task7:properties.get('task7') as string,
    task8:properties.get('task8') as string,
    task9:properties.get('task9') as string,
    task10:properties.get('task10') as string
   
    
}

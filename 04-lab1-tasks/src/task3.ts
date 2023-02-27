export class Task3 {
    separar(input: string): string[]{
        let result:string[] = [];
        //const validation = input % 2 == 0;
        for(let i=0; i< input.length; i++){
            result.push(input.charAt(i));
        }
        
        return result;
    }
}

